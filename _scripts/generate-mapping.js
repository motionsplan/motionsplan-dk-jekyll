import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🚀 Starter udvidet multi-pass mapping (med Zercher & Core-containment)...\n");

// 1. Definér stier
const exercisesDir = path.resolve(__dirname, '../_data/exercises');
const rawDir = path.join(exercisesDir, 'raw');
const outputPath = path.join(exercisesDir, 'exercises_mapping.json');

const hasanPath = path.join(rawDir, 'hasaneyldrm/exercises.json');
const freeDbPath = path.join(rawDir, 'yuhonas/exercises.json');

function parseJsonArray(filePath) {
  if (!fs.existsSync(filePath)) return [];
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return Array.isArray(raw) ? raw : Object.values(raw);
  } catch (e) {
    return [];
  }
}

const hasanData = parseJsonArray(hasanPath);
const freeDbData = parseJsonArray(freeDbPath);

console.log(`📦 Hasan indeholder:  ${hasanData.length} øvelser`);
console.log(`📦 FreeDB indeholder: ${freeDbData.length} øvelser\n`);

// ==========================================
// 🛠️ HJÆLPEFUNKTIONER & METODER
// ==========================================

function toSlug(text) {
  if (!text) return '';
  return text.toString().toLowerCase().trim()
    .replace(/\(.*?\)/g, '')
    .replace(/[\s_\/]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeName(text) {
  let slug = toSlug(text);
  return slug
    .replace(/\bdb\b/g, 'dumbbell')
    .replace(/\bbb\b/g, 'barbell')
    .replace(/\bez\b/g, 'ez-bar')
    .replace(/\bkb\b/g, 'kettlebell')
    .replace(/\bsquats\b/g, 'squat')
    .replace(/\bcurls\b/g, 'curl')
    .replace(/\braises\b/g, 'raise')
    .replace(/\bpresses\b/g, 'press')
    .replace(/\bextensions\b/g, 'extension');
}

function toSortedTokenKey(text) {
  return normalizeName(text).split('-').filter(Boolean).sort().join('-');
}

// Strikkemotoren: Fjern BÅDE udstyr og modifikatorer for at ramme den rene bevægelse
function stripModifiersAndEquipment(text) {
  let norm = normalizeName(text).replace(/-/g, ' ');
  const modifiers = [
    // Udstyr
    'barbell', 'dumbbell', 'db', 'bb', 'kettlebell', 'kb', 'cable', 'smith machine', 'smith',
    'lever', 'machine', 'band', 'resistance band', 'ez bar', 'ez', 'plate', 'weighted', 'bodyweight',
    // Varianter & Stillinger
    'full', 'half', 'quarter', 'seated', 'standing', 'lying', 'incline', 'decline',
    'assisted', 'single arm', 'one arm', 'dual', 'alternating', 'kneeling', 'bench',
    'male', 'female', 'v1', 'v2', 'version 1', 'version 2'
  ];
  
  modifiers.forEach(mod => {
    const reg = new RegExp(`\\b${mod}\\b`, 'gi');
    norm = norm.replace(reg, '');
  });
  
  return norm.replace(/\s+/g, ' ').trim().replace(/\s/g, '-');
}

// Sørensen-Dice Fuzzy Algoritme
function getBigrams(str) {
  const s = str.toLowerCase();
  const bigrams = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    bigrams.add(s.slice(i, i + 2));
  }
  return bigrams;
}

function diceCoefficient(str1, str2) {
  if (!str1 || !str2) return 0;
  if (str1 === str2) return 1.0;
  if (str1.length < 2 || str2.length < 2) return 0;
  const b1 = getBigrams(str1);
  const b2 = getBigrams(str2);
  let intersection = 0;
  for (const bg of b1) {
    if (b2.has(bg)) intersection++;
  }
  return (2.0 * intersection) / (b1.size + b2.size);
}

// ==========================================
// 🔍 INDEKSERING
// ==========================================

const freeDbList = [];
const freeDbLookupExact = new Map();
const freeDbLookupNorm = new Map();
const freeDbLookupToken = new Map();
const freeDbLookupCore = new Map();

freeDbData.forEach(item => {
  if (!item) return;
  const idStr = String(item.id || '');
  const nameStr = String(item.name || idStr);

  const slug = toSlug(nameStr || idStr);
  const norm = normalizeName(nameStr || idStr);
  const token = toSortedTokenKey(nameStr || idStr);
  const core = stripModifiersAndEquipment(nameStr || idStr);
  const wordSet = new Set(norm.split('-').filter(Boolean));

  const entry = { item, idStr, nameStr, slug, norm, token, core, wordSet };
  freeDbList.push(entry);

  if (slug) freeDbLookupExact.set(slug, entry);
  if (norm) freeDbLookupNorm.set(norm, entry);
  if (token) freeDbLookupToken.set(token, entry);
  if (core && core.length > 2) freeDbLookupCore.set(core, entry);
});

// ==========================================
// 🎯 MATCHING
// ==========================================

const finalMapping = [];
const freeDbMatchedIds = new Set();

let stats = {
  exact: 0,
  normalized: 0,
  token: 0,
  coreMatch: 0,
  subsetMatch: 0,
  fuzzy: 0,
  unmatchedHasan: 0
};

hasanData.forEach(h => {
  if (!h) return;
  const hIdStr = String(h.id);
  const hName = String(h.name || '');

  const hSlug = toSlug(hName);
  const hNorm = normalizeName(hName);
  const hToken = toSortedTokenKey(hName);
  const hCore = stripModifiersAndEquipment(hName);
  const hWords = hNorm.split('-').filter(Boolean);

  const canonicalId = hNorm || `hasan-${hIdStr}`;

  let matchEntry = null;
  let matchMethod = '';
  let confidence = 1.0;

  // PASS 1: Eksakt Slug
  if (hSlug && freeDbLookupExact.has(hSlug)) {
    matchEntry = freeDbLookupExact.get(hSlug);
    matchMethod = 'exact_slug';
    stats.exact++;
  } 
  // PASS 2: Normaliseret (db->dumbbell, squats->squat)
  else if (hNorm && freeDbLookupNorm.has(hNorm)) {
    matchEntry = freeDbLookupNorm.get(hNorm);
    matchMethod = 'normalized';
    stats.normalized++;
  } 
  // PASS 3: Ord-sorteret Token Match
  else if (hToken && freeDbLookupToken.has(hToken)) {
    matchEntry = freeDbLookupToken.get(hToken);
    matchMethod = 'token_sorted';
    stats.token++;
  } 
  // PASS 4: Ren Core-bevægelse (fx "full barbell zercher squat" -> "zercher-squat")
  else if (hCore && hCore.length > 2 && freeDbLookupCore.has(hCore)) {
    matchEntry = freeDbLookupCore.get(hCore);
    matchMethod = 'core_movement';
    confidence = 0.95;
    stats.coreMatch++;
  }
  // PASS 5: Word Subset Matching (Fanger "Zercher Squat" inde i "Barbell Full Zercher Squat")
  else {
    for (const fEntry of freeDbList) {
      if (!fEntry.core || fEntry.core.length < 3) continue;
      const fCoreWords = fEntry.core.split('-').filter(Boolean);
      
      // Tjek om ALLE ord fra Yuhonas Core findes i Hasans navn
      const isSubset = fCoreWords.length > 0 && fCoreWords.every(word => hWords.includes(word));
      if (isSubset) {
        matchEntry = fEntry;
        matchMethod = 'token_subset';
        confidence = 0.90;
        stats.subsetMatch++;
        break;
      }
    }
  }

  // PASS 6: Fuzzy Sørensen-Dice Fallback
  if (!matchEntry) {
    let bestScore = 0;
    let bestMatch = null;

    for (const fEntry of freeDbList) {
      const score = diceCoefficient(hNorm, fEntry.norm);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = fEntry;
      }
    }

    if (bestScore >= 0.78 && bestMatch) {
      matchEntry = bestMatch;
      matchMethod = 'fuzzy_dice';
      confidence = Number(bestScore.toFixed(2));
      stats.fuzzy++;
    }
  }

  if (matchEntry) {
    freeDbMatchedIds.add(matchEntry.idStr);
    finalMapping.push({
      canonical_id: canonicalId,
      name_en: hName,
      sources: {
        hasan_id: h.id,
        free_db_id: matchEntry.item.id || null,
        custom_id: null
      },
      match_method: matchMethod,
      confidence: confidence
    });
  } else {
    stats.unmatchedHasan++;
    finalMapping.push({
      canonical_id: canonicalId,
      name_en: hName,
      sources: {
        hasan_id: h.id,
        free_db_id: null,
        custom_id: null
      },
      match_method: 'none',
      confidence: 0
    });
  }
});

// Tilføj u-matchede fra FreeDB
let unmatchedFreeDbCount = 0;
freeDbList.forEach(fEntry => {
  if (!freeDbMatchedIds.has(fEntry.idStr)) {
    unmatchedFreeDbCount++;
    finalMapping.push({
      canonical_id: fEntry.norm || toSlug(fEntry.nameStr),
      name_en: fEntry.nameStr,
      sources: {
        hasan_id: null,
        free_db_id: fEntry.item.id || null,
        custom_id: null
      },
      match_method: 'none',
      confidence: 0
    });
  }
});

// Gem resultat
const dataDir = path.dirname(outputPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(finalMapping, null, 2), 'utf8');

const totalMatched = stats.exact + stats.normalized + stats.token + stats.coreMatch + stats.subsetMatch + stats.fuzzy;
const matchPercentage = ((totalMatched / hasanData.length) * 100).toFixed(1);

console.log(`==================================================`);
console.log(`📊 UPDATERET AUTOMATISK MATCHING RAPPORT`);
console.log(`==================================================`);
console.log(`🎯 Exact Slug Matches:       ${stats.exact}`);
console.log(`🔄 Normalized Matches:       ${stats.normalized}`);
console.log(`🔀 Token-Sorted Matches:     ${stats.token}`);
console.log(`🏋️ Core Movement Matches:     ${stats.coreMatch}`);
console.log(`🧩 Token Subset Matches:     ${stats.subsetMatch}`);
console.log(`🧠 Fuzzy Matches (>= 0.78):   ${stats.fuzzy}`);
console.log(`--------------------------------------------------`);
console.log(`🎉 Samlet succesfulde matches: ${totalMatched} ud af ${hasanData.length} Hasan-øvelser (${matchPercentage}%)`);
console.log(`- Kun i Hasan:                ${stats.unmatchedHasan}`);
console.log(`- Kun i FreeDB (yuhonas):      ${unmatchedFreeDbCount}`);
console.log(`--------------------------------------------------`);
console.log(`💾 Fil gemt: ${outputPath}\n`);