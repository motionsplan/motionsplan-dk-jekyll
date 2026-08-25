---
title: Dit Personlige Træningsoverblik
seo_title: Mit Motionsplan – Gemte testresultater og beregninger
description: Dit personlige dashboard. Her samles alle dine testresultater, 1RM-beregninger og kondital fra Motionsplan – 100% privat i din egen browser.
permalink: /hjem/
classes: wide
layout: splash
sitemap: false
header:
  overlay_color: "#333"
---

Velkommen til dit personlige overblik. Alle dine testresultater gemmes udelukkende lokalt i din egen browser (Local Storage). Ingen data sendes til vores servere, så alt er 100% privat.

<div id="mp-dashboard-app">
  
  <!-- 1. DASHBOARDS -->
  <h2 class="dash-section-title">🚀 Dine dashboards</h2>
  <div id="dashboards-container" class="dash-grid">
    <p class="loading-text">Indlæser dashboards...</p>
  </div>

  <!-- 2. GEMTE TESTRESULTATER -->
  <h2 class="dash-section-title">📊 Dine seneste resultater</h2>
  <div id="results-container" class="results-container">
    <p class="loading-text">Indlæser dine resultater...</p>
  </div>

  <!-- 3. MIN ØNSKELISTE -->
  <h2 class="dash-section-title">🎯 Min ønskeliste</h2>
  <div id="wishlist-container" class="todo-grid">
    <!-- Udfyldes af JS -->
  </div>

  <!-- 4. UDFORSK OG FILTER -->
  <h2 class="dash-section-title">🔍 Udforsk værktøjer</h2>
  <div class="search-filter-wrapper">
    <input type="text" id="test-search" class="test-search-input" placeholder="Søg efter værktøj eller test (f.eks. 'fedtprocent', 'squat' eller 'hop')...">
    <div id="category-filters" class="category-pills">
      <!-- Genereres af JS -->
    </div>
  </div>
  <div id="explore-container" class="explore-grid">
    <!-- Udfyldes af JS -->
  </div>

  <!-- 5. SKJULTE DASHBOARDS -->
  <div id="hidden-dash-section" style="margin-top: 3rem; display: none;">
    <h2 class="dash-section-title" style="color: #64748b; border-color: #cbd5e1;">🙈 Skjulte dashboards</h2>
    <div id="hidden-dash-container" class="benched-grid">
      <!-- Udfyldes af JS -->
    </div>
  </div>

</div>

<!-- DATA BRIDGE: Jekyll Frontmatter -> JavaScript -->
<script>
  const siteTests = [];
  const siteDashboards = [];
  
  {% assign all_docs = site.pages | concat: site.documents | uniq %}
  
  {% for p in all_docs %}
    {% comment %} Dashboards {% endcomment %}
    {% if p.dashboards %}
      {% for dash in p.dashboards %}
        siteDashboards.push({
          id: "{{ dash.id | default: dash.title | slugify }}",
          title: "{{ dash.title | escape }}",
          url: "{{ dash.url | default: p.url }}",
          anchor: "{{ dash.anchor | default: dash.id }}",
          icon: "{{ dash.icon | default: '📊' }}",
          description: "{{ dash.description | escape }}"
        });
      {% endfor %}
    {% endif %}

    {% comment %} Tests {% endcomment %}
    {% if p.tests %}
      {% for item in p.tests %}
        {% if item.ls_key %}
          siteTests.push({
            id: "{{ item.id }}",
            title: "{{ item.title | escape }}",
            url: "{{ item.url | default: p.url }}",
            anchor: "{{ item.anchor | default: item.id }}",
            category: "{{ item.category | join: ',' | split: ',' | first | default: 'Tests' }}", 
            lsKey: "{{ item.ls_key }}",
            icon: "{{ item.icon | default: '📈' }}"
          });
        {% endif %}
      {% endfor %}
    {% endif %}

    {% comment %} Tools {% endcomment %}
    {% if p.tools %}
      {% for item in p.tools %}
        {% if item.ls_key %}
          siteTests.push({
            id: "{{ item.id }}",
            title: "{{ item.title | default: item.name | escape }}",
            url: "{{ item.url | default: p.url }}",
            anchor: "{{ item.anchor | default: item.id }}",
            category: "{{ item.category | join: ',' | split: ',' | first | default: 'Værktøjer' }}",
            lsKey: "{{ item.ls_key }}",
            icon: "{{ item.icon | default: '🔧' }}"
          });
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</script>

<style>
/* --- FÆLLES DESIGN-STANDARDER --- */
#mp-dashboard-app { font-family: system-ui, -apple-system, sans-serif; }
.dash-section-title { margin: 2.2rem 0 0.9rem 0; font-size: 1.3rem; font-weight: 800; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }

/* Fjern alle understregninger på tværs af kort og hovers */
#mp-dashboard-app a,
#mp-dashboard-app a:hover,
#mp-dashboard-app a *,
#mp-dashboard-app a:hover * {
  text-decoration: none !important;
}

/* Grids (100% ensartet opbygning og kortbredde) */
.category-group { margin-bottom: 1.8rem; }
.category-title { font-size: 0.88rem; color: #64748b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800; }
.dash-grid, .res-grid, .todo-grid, .explore-grid, .benched-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); 
  gap: 16px; 
}

/* Kort Base Style */
.dash-card, .res-card, .wish-card, .explore-card, .benched-card { 
  background: #ffffff; 
  border: 1.5px solid #e2e8f0; 
  border-radius: 12px; 
  padding: 18px; 
  position: relative; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  min-height: 120px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  box-sizing: border-box;
  text-decoration: none !important;
  color: inherit;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dash-card:hover, .res-card:hover, .wish-card:hover, .explore-card:hover { 
  border-color: #3b82f6; 
  transform: translateY(-2px); 
  box-shadow: 0 4px 12px rgba(59,130,246,0.08); 
}

.wish-card { background: #fafafa; border-style: dashed; border-color: #cbd5e1; }
.benched-card { background: #f8fafc; border-style: dashed; border-color: #cbd5e1; cursor: default; }

/* Overskrift & Tekst */
.card-title { font-weight: 800; color: #0f172a; font-size: 0.95rem; margin: 0; line-height: 1.38; padding-right: 32px; }
.dash-desc { margin: 6px 0 0 0; font-size: 0.83rem; color: #64748b; line-height: 1.4; padding-right: 32px; }

/* Bundsektion & Ikon */
.card-bottom-row { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 14px; width: 100%; }
.card-corner-icon { font-size: 2.2rem; line-height: 1; flex-shrink: 0; margin-left: auto; }
.res-value { font-size: 1.25rem; font-weight: 800; color: #2563eb; word-break: break-word; }

/* --- KNAPPER I ØVERSTE HØJRE HJØRNE --- */
.btn-action-icon { 
  position: absolute;
  top: 12px;
  right: 12px;
  background: none; 
  border: none; 
  font-size: 1.25rem; 
  line-height: 1;
  cursor: pointer; 
  color: #94a3b8; 
  padding: 4px;
  transition: color 0.15s, transform 0.15s; 
  z-index: 2;
}
.btn-action-icon:hover { color: #ef4444; transform: scale(1.15); }

/* Grønne Plus-knapper til tilføjelse og genoprettelse */
.btn-plus-action {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: #dcfce7;
  color: #16a34a;
  font-size: 1.2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1;
  z-index: 2;
}
.btn-plus-action:hover {
  background: #16a34a;
  color: #ffffff;
  transform: scale(1.1);
}

.res-empty { color: #64748b; font-style: italic; font-size: 0.9rem; grid-column: 1 / -1; }

/* Søgning og Kategori-pills */
.search-filter-wrapper { margin-bottom: 16px; display: flex; flex-direction: column; gap: 12px; }
.test-search-input { width: 100%; padding: 12px 16px; font-size: 0.95rem; border: 1.5px solid #cbd5e1; border-radius: 10px; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
.test-search-input:focus { border-color: #3b82f6; }

.category-pills { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-pill {
  padding: 5px 14px;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 9999px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.filter-pill:hover { border-color: #3b82f6; color: #2563eb; }
.filter-pill.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const dashContainer = document.getElementById('dashboards-container');
  const benchedContainer = document.getElementById('hidden-dash-container');
  const benchedSection = document.getElementById('hidden-dash-section');
  const resContainer = document.getElementById('results-container');
  const wishlistContainer = document.getElementById('wishlist-container');
  const exploreContainer = document.getElementById('explore-container');
  const searchInput = document.getElementById('test-search');
  const categoryFiltersContainer = document.getElementById('category-filters');

  let exploreTests = []; 
  let activeCategory = 'Alle';

  function getFullUrl(item) {
    let url = item.url || '';
    if (item.anchor && item.anchor.trim() !== '') {
      url += '#' + item.anchor;
    }
    return url;
  }

  function formatResultValue(rawData) {
    if (!rawData) return '--';
    try {
      const obj = JSON.parse(rawData);
      if (typeof obj !== 'object' || obj === null) return rawData;

      if (obj.summary) return obj.summary;
      if (obj.value) return obj.value;
      if (obj.result) return obj.result;

      if (obj.level !== undefined && obj.shuttles !== undefined) {
        const typeLabel = obj.type ? `${obj.type.toUpperCase()} ` : '';
        const vo2 = obj.vo2max ? ` (VO₂max: ${obj.vo2max})` : '';
        return `${typeLabel}Niveau ${obj.level}.${obj.shuttles}${vo2}`;
      }

      if (obj.distance) {
        const vo2 = obj.vo2max ? ` · VO₂max: ${obj.vo2max}` : '';
        return `${obj.distance} m${vo2}`;
      }

      if (obj.oneRepMax || obj.rm1) return `1RM: ${obj.oneRepMax || obj.rm1} kg`;
      if (obj.fatPercent || obj.bodyFat) return `${obj.fatPercent || obj.bodyFat}% kropsfedt`;

      const ignoreKeys = ['age', 'weight', 'gender', 'levelSelect', 'formula', 'isManuallySelected', 'type', 'method'];
      const keyData = Object.entries(obj)
        .filter(([k, v]) => !ignoreKeys.includes(k) && v !== '' && v !== null && v !== undefined)
        .map(([k, v]) => `${k}: ${v}`)
        .join(' · ');

      return keyData || rawData;
    } catch (e) {
      return rawData;
    }
  }

  // --- 1. DASHBOARDS ---
  function renderDashboards() {
    let hiddenIds = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
    let activeHtml = '';
    let hiddenHtml = '';

    const activeDashboards = siteDashboards.filter(d => !hiddenIds.includes(d.id));
    const hiddenDashboards = siteDashboards.filter(d => hiddenIds.includes(d.id));

    if (activeDashboards.length > 0) {
      activeDashboards.forEach(d => {
        activeHtml += `
          <a href="${getFullUrl(d)}" class="dash-card">
            <button class="btn-action-icon btn-hide-dash" data-id="${d.id}" title="Skjul dashboard">×</button>
            <div>
              <h3 class="card-title">${d.title}</h3>
              <p class="dash-desc">${d.description}</p>
            </div>
            <div class="card-bottom-row">
              <span class="card-corner-icon">${d.icon}</span>
            </div>
          </a>`;
      });
    } else {
      activeHtml = `<p class="res-empty">Alle dashboards er skjult.</p>`;
    }
    dashContainer.innerHTML = activeHtml;

    if (hiddenDashboards.length > 0) {
      benchedSection.style.display = 'block';
      hiddenDashboards.forEach(d => {
        hiddenHtml += `
          <div class="benched-card">
            <button class="btn-plus-action btn-unbench" data-id="${d.id}" title="Vis på overblik">+</button>
            <h4 class="card-title">${d.title}</h4>
            <div class="card-bottom-row">
              <span class="card-corner-icon">${d.icon}</span>
            </div>
          </div>`;
      });
      benchedContainer.innerHTML = hiddenHtml;
    } else {
      benchedSection.style.display = 'none';
    }

    document.querySelectorAll('.btn-hide-dash').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const id = this.dataset.id;
        let hidden = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
        if (!hidden.includes(id)) {
          hidden.push(id);
          localStorage.setItem('mp_hidden_dashboards', JSON.stringify(hidden));
          renderDashboards();
        }
      });
    });

    document.querySelectorAll('.btn-unbench').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const id = this.dataset.id;
        let hidden = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
        hidden = hidden.filter(i => i !== id);
        localStorage.setItem('mp_hidden_dashboards', JSON.stringify(hidden));
        renderDashboards();
      });
    });
  }

  // --- 2. MAIN RENDER ---
  function renderDashboard() {
    let resHtml = '';
    let wishHtml = '';
    
    let wishlistKeys = JSON.parse(localStorage.getItem('mp_wishlist')) || [];
    const groupedResults = {};
    const wishlistedTests = [];
    exploreTests = [];

    siteTests.forEach(test => {
      const resultData = localStorage.getItem(test.lsKey);
      
      if (resultData) {
        if (!groupedResults[test.category]) groupedResults[test.category] = [];
        groupedResults[test.category].push({ ...test, result: resultData });
        
        if (wishlistKeys.includes(test.lsKey)) {
          wishlistKeys = wishlistKeys.filter(k => k !== test.lsKey);
          localStorage.setItem('mp_wishlist', JSON.stringify(wishlistKeys));
        }
      } else if (wishlistKeys.includes(test.lsKey)) {
        wishlistedTests.push(test);
      } else {
        exploreTests.push(test);
      }
    });

    // RESULTATER
    if (Object.keys(groupedResults).length === 0) {
      resHtml = `<p class="res-empty">Du har endnu ikke gemt nogen resultater på Motionsplan.</p>`;
    } else {
      for (const [category, tests] of Object.entries(groupedResults)) {
        resHtml += `<div class="category-group"><div class="category-title">${category}</div><div class="res-grid">`;
        tests.forEach(t => {
          const formattedVal = formatResultValue(t.result);
          resHtml += `
            <a href="${getFullUrl(t)}" class="res-card">
              <button class="btn-action-icon btn-delete" data-key="${t.lsKey}" title="Slet resultat">🗑️</button>
              <h4 class="card-title">${t.title}</h4>
              <div class="card-bottom-row">
                <div class="res-value">${formattedVal}</div>
                <span class="card-corner-icon">${t.icon}</span>
              </div>
            </a>`;
        });
        resHtml += `</div></div>`;
      }
    }
    resContainer.innerHTML = resHtml;

    // ØNSKELISTE
    if (wishlistedTests.length > 0) {
      wishlistedTests.forEach(t => {
        wishHtml += `
          <a href="${getFullUrl(t)}" class="wish-card">
            <button class="btn-action-icon btn-remove-wish" data-key="${t.lsKey}" title="Fjern fra ønskeliste">×</button>
            <h4 class="card-title">${t.title}</h4>
            <div class="card-bottom-row">
              <span class="card-corner-icon">${t.icon}</span>
            </div>
          </a>`;
      });
    } else {
      wishHtml = `<p class="res-empty">Din ønskeliste er tom. Søg efter et værktøj nedenfor og klik på det grønne + ikon.</p>`;
    }
    wishlistContainer.innerHTML = wishHtml;

    renderCategoryFilters();
    filterAndRenderExplore();

    document.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(confirm('Vil du slette dette resultat permanent fra din browser?')) {
          localStorage.removeItem(this.dataset.key);
          renderDashboard();
        }
      });
    });

    document.querySelectorAll('.btn-remove-wish').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        wishlistKeys = wishlistKeys.filter(k => k !== this.dataset.key);
        localStorage.setItem('mp_wishlist', JSON.stringify(wishlistKeys));
        renderDashboard();
      });
    });
  }

  function renderCategoryFilters() {
    const categories = ['Alle', ...new Set(exploreTests.map(t => t.category))];
    let html = '';
    categories.forEach(cat => {
      const activeClass = activeCategory === cat ? 'active' : '';
      html += `<button class="filter-pill ${activeClass}" data-category="${cat}">${cat}</button>`;
    });
    categoryFiltersContainer.innerHTML = html;

    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', function() {
        activeCategory = this.dataset.category;
        renderCategoryFilters();
        filterAndRenderExplore();
      });
    });
  }

  function filterAndRenderExplore() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = exploreTests.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(searchTerm) || t.category.toLowerCase().includes(searchTerm);
      const matchesCategory = activeCategory === 'Alle' || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    renderExploreGrid(filtered);
  }

  function renderExploreGrid(testsToRender) {
    if(testsToRender.length === 0) {
      exploreContainer.innerHTML = `<p class="res-empty">Ingen tilgængelige værktøjer matcher din søgning.</p>`;
      return;
    }
    
    let expHtml = '';
    testsToRender.forEach(t => {
      expHtml += `
        <a href="${getFullUrl(t)}" class="explore-card">
          <button class="btn-plus-action btn-add-wish" data-key="${t.lsKey}" title="Tilføj til ønskeliste">+</button>
          <h4 class="card-title">${t.title}</h4>
          <div class="card-bottom-row">
            <span class="card-corner-icon">${t.icon}</span>
          </div>
        </a>`;
    });
    exploreContainer.innerHTML = expHtml;

    document.querySelectorAll('.btn-add-wish').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let currentWish = JSON.parse(localStorage.getItem('mp_wishlist')) || [];
        if (!currentWish.includes(this.dataset.key)) {
          currentWish.push(this.dataset.key);
          localStorage.setItem('mp_wishlist', JSON.stringify(currentWish));
          renderDashboard();
          searchInput.value = '';
        }
      });
    });
  }

  searchInput.addEventListener('input', function() {
    filterAndRenderExplore();
  });

  renderDashboards();
  renderDashboard();
});
</script>