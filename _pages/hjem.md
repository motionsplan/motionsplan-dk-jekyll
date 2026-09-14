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
  
  <!-- 1. SAMLE-DASHBOARDS -->
  <h2 class="dash-section-title">🚀 Dashboards</h2>
  <div id="dashboards-container" class="dash-grid">
    <p class="loading-text">Indlæser dashboards...</p>
  </div>

  <!-- 2. MIT DASHBOARD (SAMLET AKTIVE RESULTATER OG PLANLAGTE TESTS) -->
  <h2 class="dash-section-title">📊 Mit Dashboard</h2>
  <div id="unified-dashboard-container">
    <p class="loading-text">Indlæser dit dashboard...</p>
  </div>

  <!-- 3. UDFORSK OG KATALOG -->
  <h2 class="dash-section-title">🔍 Udforsk værktøjer</h2>
  <div class="search-filter-wrapper">
    <input type="text" id="test-search" class="test-search-input" placeholder="Søg efter værktøj eller test (fx 'fedtprocent', 'squat', 'balke' eller 'hop')...">
    <div id="category-filters" class="category-pills">
      <!-- Genereres af JS -->
    </div>
  </div>
  <div id="explore-container" class="explore-grid">
    <!-- Udfyldes af JS -->
  </div>

  <!-- 4. SKJULTE DASHBOARDS -->
  <div id="hidden-dash-section" style="margin-top: 3rem; display: none;">
    <h2 class="dash-section-title" style="color: #64748b; border-color: #cbd5e1;">🙈 Skjulte dashboards</h2>
    <div id="hidden-dash-container" class="benched-grid">
      <!-- Udfyldes af JS -->
    </div>
  </div>

</div>

<!-- DATA BRIDGE: Jekyll Frontmatter -> Global Data Object -->
<script>
  window.MP_DATA = {
    dashboards: [
      {% assign all_docs = site.pages | concat: site.documents | uniq %}
      {% for p in all_docs %}{% if p.dashboards %}{% for dash in p.dashboards %}
        {
          id: "{{ dash.id | default: dash.title | slugify }}",
          title: "{{ dash.title | escape }}",
          url: "{{ dash.url | default: p.url }}",
          anchor: "{{ dash.anchor | default: dash.id }}",
          icon: "{{ dash.icon | default: '📊' }}",
          description: "{{ dash.description | escape }}"
        },
      {% endfor %}{% endif %}{% endfor %}
    ],
    tests: [
      {% for p in all_docs %}
        {% if p.tests %}
          {% for item in p.tests %}
            {% assign key = item.storage_key | default: item.ls_key %}
            {% if key %}
              {
                id: "{{ item.id }}",
                title: "{{ item.title | escape }}",
                url: "{{ item.url | default: p.url }}",
                anchor: "{{ item.anchor | default: item.id }}",
                category: "{{ item.category | join: ',' | split: ',' | first | default: item.badge | default: 'Diverse' }}", 
                storageKey: "{{ key }}",
                unit: "{{ item.unit }}",
                allowQuickLog: {{ item.allow_quick_log | default: false }},
                icon: "{{ item.icon | default: '📈' }}"
              },
            {% endif %}
          {% endfor %}
        {% endif %}
        {% if p.tools %}
          {% for item in p.tools %}
            {% assign key = item.storage_key | default: item.ls_key %}
            {% if key %}
              {
                id: "{{ item.id }}",
                title: "{{ item.title | default: item.name | escape }}",
                url: "{{ item.url | default: p.url }}",
                anchor: "{{ item.anchor | default: item.id }}",
                category: "{{ item.category | join: ',' | split: ',' | first | default: item.badge | default: 'Diverse' }}",
                storageKey: "{{ key }}",
                unit: "{{ item.unit }}",
                allowQuickLog: {{ item.allow_quick_log | default: false }},
                icon: "{{ item.icon | default: '🔧' }}"
              },
            {% endif %}
          {% endfor %}
        {% endif %}
      {% endfor %}
    ]
  };
</script>

<style>
/* --- FÆLLES DESIGN-STANDARDER --- */
#mp-dashboard-app { font-family: system-ui, -apple-system, sans-serif; }
.dash-section-title { margin: 2.2rem 0 0.9rem 0; font-size: 1.3rem; font-weight: 800; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }

#mp-dashboard-app a,
#mp-dashboard-app a:hover,
#mp-dashboard-app a *,
#mp-dashboard-app a:hover * {
  text-decoration: none !important;
}

.category-group { margin-bottom: 2rem; }
.category-title { font-size: 0.95rem; color: #475569; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800; }

.dash-grid, .res-grid, .explore-grid, .benched-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); 
  gap: 16px; 
}

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

.card-header-group { padding-right: 28px; }
.card-title { font-weight: 800; color: #0f172a; font-size: 0.95rem; margin: 0; line-height: 1.38; }
.dash-desc { margin: 6px 0 0 0; font-size: 0.83rem; color: #64748b; line-height: 1.4; padding-right: 32px; }

.badge-todo {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  color: #d97706;
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.card-bottom-row { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 14px; width: 100%; }
.card-corner-icon { font-size: 2.2rem; line-height: 1; flex-shrink: 0; margin-left: auto; }
.res-value { font-size: 1.15rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; border: 1px solid transparent; }
.res-value .mp-db-unit { font-size: 0.75rem; font-weight: 700; opacity: 0.85; }
.res-value-placeholder { font-size: 0.85rem; font-weight: 700; color: #2563eb; }

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

<!-- MODULÆR ORKESTRERING VIA DASHBOARDMANAGER & STORAGEADAPTER -->
<script type="module">
  import { DashboardManager } from '/assets/js/core/DashboardManager.js';
  import { StorageAdapter } from '/assets/js/core/StorageAdapter.js';

  const CATEGORY_ORDER = [
    "Kondition & Løb",
    "Cykel",
    "Styrke & 1RM",
    "Hop & Agility",
    "Kropssammensætning",
    "Diverse"
  ];

  let state = {
    tests: window.MP_DATA ? window.MP_DATA.tests : [],
    dashboards: window.MP_DATA ? window.MP_DATA.dashboards : [],
    exploreTests: [],
    activeCategory: 'Alle',
    searchTerm: ''
  };

  function getFullUrl(item) {
    let url = item.url || '';
    if (item.anchor && item.anchor.trim() !== '') {
      url += '#' + item.anchor;
    }
    return url;
  }

  function mapToMainCategory(rawCategory) {
    if (!rawCategory) return "Diverse";
    const cat = rawCategory.toLowerCase();
    
    if (cat.includes("løb") || cat.includes("gang") || cat.includes("løbebånd") || cat.includes("kondition") || cat.includes("sofatest") || cat.includes("puls")) return "Kondition & Løb";
    if (cat.includes("cykel")) return "Cykel";
    if (cat.includes("styrke") || cat.includes("1rm")) return "Styrke & 1RM";
    if (cat.includes("hop") || cat.includes("vertikal") || cat.includes("horisontal") || cat.includes("cod") || cat.includes("sprint") || cat.includes("agility")) return "Hop & Agility";
    if (cat.includes("fedt") || cat.includes("bmi") || cat.includes("krop")) return "Kropssammensætning";
    
    return "Diverse";
  }

  // --- 1. RENDERING AF TEMADASHBOARDS ---
  function renderDashboards() {
    const dashContainer = document.getElementById('dashboards-container');
    const benchedContainer = document.getElementById('hidden-dash-container');
    const benchedSection = document.getElementById('hidden-dash-section');
    if (!dashContainer) return;

    let hiddenIds = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
    let activeHtml = '', hiddenHtml = '';

    const active = state.dashboards.filter(d => !hiddenIds.includes(d.id));
    const hidden = state.dashboards.filter(d => hiddenIds.includes(d.id));

    if (active.length > 0) {
      active.forEach(d => {
        activeHtml += `
          <a href="${getFullUrl(d)}" class="dash-card">
            <button class="btn-action-icon btn-hide-dash" data-id="${d.id}" title="Skjul dashboard">×</button>
            <div>
              <h3 class="card-title">${d.title}</h3>
              <p class="dash-desc">${d.description}</p>
            </div>
            <div class="card-bottom-row"><span class="card-corner-icon">${d.icon}</span></div>
          </a>`;
      });
    } else {
      activeHtml = `<p class="res-empty">Alle dashboards er skjult.</p>`;
    }
    dashContainer.innerHTML = activeHtml;

    if (hidden.length > 0) {
      benchedSection.style.display = 'block';
      hidden.forEach(d => {
        hiddenHtml += `
          <div class="benched-card">
            <button class="btn-plus-action btn-unbench" data-id="${d.id}" title="Vis på overblik">+</button>
            <h4 class="card-title">${d.title}</h4>
            <div class="card-bottom-row"><span class="card-corner-icon">${d.icon}</span></div>
          </div>`;
      });
      benchedContainer.innerHTML = hiddenHtml;
    } else {
      benchedSection.style.display = 'none';
    }

    dashContainer.querySelectorAll('.btn-hide-dash').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        let hiddenList = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
        if (!hiddenList.includes(btn.dataset.id)) {
          hiddenList.push(btn.dataset.id);
          localStorage.setItem('mp_hidden_dashboards', JSON.stringify(hiddenList));
          renderDashboards();
        }
      });
    });

    if (benchedContainer) {
      benchedContainer.querySelectorAll('.btn-unbench').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          let hiddenList = JSON.parse(localStorage.getItem('mp_hidden_dashboards')) || [];
          hiddenList = hiddenList.filter(id => id !== btn.dataset.id);
          localStorage.setItem('mp_hidden_dashboards', JSON.stringify(hiddenList));
          renderDashboards();
        });
      });
    }
  }

  // --- 2. MIT DASHBOARD (UNIFIED VIA DASHBOARDMANAGER) ---
  function renderUnifiedDashboard() {
    const unifiedContainer = document.getElementById('unified-dashboard-container');
    if (!unifiedContainer) return;

    let wishlistKeys = JSON.parse(localStorage.getItem('mp_wishlist')) || [];
    const groupedData = {};

    CATEGORY_ORDER.forEach(cat => groupedData[cat] = { results: [], wishlist: [] });
    state.exploreTests = [];

    state.tests.forEach(test => {
      const mainCat = mapToMainCategory(test.category);
      if (!groupedData[mainCat]) groupedData[mainCat] = { results: [], wishlist: [] };

      // Hent måling direkte via StorageAdapter
      const latestRecord = StorageAdapter.getLatest(test.storageKey);

      if (latestRecord) {
        // Hent færdigformateret score og norm-farver via DashboardManager
        const score = DashboardManager.getCardScore(test.storageKey);
        groupedData[mainCat].results.push({ ...test, score, mainCat });
        
        if (wishlistKeys.includes(test.storageKey)) {
          wishlistKeys = wishlistKeys.filter(k => k !== test.storageKey);
          localStorage.setItem('mp_wishlist', JSON.stringify(wishlistKeys));
        }
      } else if (wishlistKeys.includes(test.storageKey)) {
        groupedData[mainCat].wishlist.push({ ...test, mainCat });
      } else {
        state.exploreTests.push({ ...test, mainCat });
      }
    });

    let html = '';
    let totalItems = 0;

    CATEGORY_ORDER.forEach(catName => {
      const group = groupedData[catName];
      if (group.results.length > 0 || group.wishlist.length > 0) {
        totalItems += group.results.length + group.wishlist.length;
        
        html += `
          <div class="category-group">
            <div class="category-title">📂 ${catName}</div>
            <div class="res-grid">`;

        // Aktive målinger
        group.results.sort((a, b) => a.title.localeCompare(b.title)).forEach(t => {
          html += `
            <a href="${getFullUrl(t)}" class="res-card">
              <button class="btn-action-icon btn-delete" data-key="${t.storageKey}" title="Slet data">🗑️</button>
              <div class="card-header-group">
                <h4 class="card-title">${t.title}</h4>
              </div>
              <div class="card-bottom-row">
                <div class="res-value" style="background:${t.score.bg}; color:${t.score.color}; border-color:${t.score.border};">
                  ${t.score.display}
                </div>
                <span class="card-corner-icon">${t.icon}</span>
              </div>
            </a>`;
        });

        // Planlagte målinger
        group.wishlist.sort((a, b) => a.title.localeCompare(b.title)).forEach(t => {
          html += `
            <a href="${getFullUrl(t)}" class="wish-card">
              <button class="btn-action-icon btn-remove-wish" data-key="${t.storageKey}" title="Fjern fra dashboard">×</button>
              <div class="card-header-group">
                <span class="badge-todo">📋 Planlagt</span>
                <h4 class="card-title">${t.title}</h4>
              </div>
              <div class="card-bottom-row">
                <span class="res-value-placeholder">Start test →</span>
                <span class="card-corner-icon">${t.icon}</span>
              </div>
            </a>`;
        });

        html += `</div></div>`;
      }
    });

    if (totalItems === 0) {
      html = `<p class="res-empty">Dit dashboard er tomt. Søg i kataloget nedenfor og klik på **+** for at tilføje tests eller beregnere.</p>`;
    }

    unifiedContainer.innerHTML = html;

    // Slet historik via StorageAdapter
    unifiedContainer.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        if(confirm('Vil du slette dette resultat permanent fra din browser?')) {
          StorageAdapter.clearLog(btn.dataset.key);
          renderUnifiedDashboard();
          renderCategoryFilters();
          filterAndRenderExplore();
        }
      });
    });

    // Fjern fra ønsker
    unifiedContainer.querySelectorAll('.btn-remove-wish').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        let wish = JSON.parse(localStorage.getItem('mp_wishlist')) || [];
        wish = wish.filter(k => k !== btn.dataset.key);
        localStorage.setItem('mp_wishlist', JSON.stringify(wish));
        renderUnifiedDashboard();
        renderCategoryFilters();
        filterAndRenderExplore();
      });
    });

    renderCategoryFilters();
    filterAndRenderExplore();
  }

  // --- 3. KATALOG OG SØGNING ---
  function renderCategoryFilters() {
    const categoryFiltersContainer = document.getElementById('category-filters');
    if (!categoryFiltersContainer) return;

    const categories = ['Alle', ...CATEGORY_ORDER];
    let html = '';
    categories.forEach(cat => {
      const activeClass = state.activeCategory === cat ? 'active' : '';
      html += `<button class="filter-pill ${activeClass}" data-category="${cat}">${cat}</button>`;
    });
    categoryFiltersContainer.innerHTML = html;

    categoryFiltersContainer.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.dataset.category;
        renderCategoryFilters();
        filterAndRenderExplore();
      });
    });
  }

  function filterAndRenderExplore() {
    const exploreContainer = document.getElementById('explore-container');
    if (!exploreContainer) return;

    const filtered = state.exploreTests.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(state.searchTerm) || t.category.toLowerCase().includes(state.searchTerm);
      const matchesCategory = state.activeCategory === 'Alle' || t.mainCat === state.activeCategory;
      return matchesSearch && matchesCategory;
    });

    if(filtered.length === 0) {
      exploreContainer.innerHTML = `<p class="res-empty">Ingen tilgængelige værktøjer matcher din søgning.</p>`;
      return;
    }
    
    filtered.sort((a, b) => a.title.localeCompare(b.title));

    let expHtml = '';
    filtered.forEach(t => {
      expHtml += `
        <a href="${getFullUrl(t)}" class="explore-card">
          <button class="btn-plus-action btn-add-wish" data-key="${t.storageKey}" title="Tilføj til mit dashboard">+</button>
          <h4 class="card-title">${t.title}</h4>
          <div class="card-bottom-row">
            <span class="card-corner-icon">${t.icon}</span>
          </div>
        </a>`;
    });
    exploreContainer.innerHTML = expHtml;

    exploreContainer.querySelectorAll('.btn-add-wish').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        let wish = JSON.parse(localStorage.getItem('mp_wishlist')) || [];
        if (!wish.includes(btn.dataset.key)) {
          wish.push(btn.dataset.key);
          localStorage.setItem('mp_wishlist', JSON.stringify(wish));
          state.searchTerm = '';
          const searchInput = document.getElementById('test-search');
          if (searchInput) searchInput.value = '';
          renderUnifiedDashboard();
        }
      });
    });
  }

  // Initialisering
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('test-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.toLowerCase();
        filterAndRenderExplore();
      });
    }

    renderDashboards();
    renderUnifiedDashboard();
  });
</script>