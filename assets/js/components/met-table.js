// assets/js/components/met-table.js

export function initMetTable(rootContainer) {
  if (!rootContainer) return;

  const DATA_URL = '/assets/data/met.json';
  const PAGE_SIZE = 40; // Hvor mange rækker der vises ad gangen

  let allData = [];
  let filteredData = [];
  let currentDisplayCount = PAGE_SIZE;
  let activeGroup = 'all';
  let searchQuery = '';

  // DOM Elements
  const searchInput = rootContainer.querySelector('.js-met-search');
  const pillsContainer = rootContainer.querySelector('.js-met-pills');
  const tbody = rootContainer.querySelector('.js-met-tbody');
  const countEl = rootContainer.querySelector('.js-met-count');
  const filterLabelEl = rootContainer.querySelector('.js-met-filter-label');
  const loadMoreBtn = rootContainer.querySelector('.js-met-load-more');

  // Hent JSON data
  async function loadData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) throw new Error('Fejl ved hentning af MET-data');
      allData = await response.json();
      
      // Sorter alfabetisk efter aktivitet som standard
      allData.sort((a, b) => (a.Activity || '').localeCompare(b.Activity || ''));
      
      applyFilters();
    } catch (e) {
      if (tbody) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color: #dc2626; padding: 2rem;">Kunne ikke indlæse MET-databasen. Tjek om /assets/data/met.json eksisterer.</td></tr>`;
      }
    }
  }

  // Filtrering af data i hukommelsen
  function applyFilters() {
    filteredData = allData.filter(item => {
      // Group Filter
      const matchGroup = (activeGroup === 'all') || 
        (item.Group && item.Group.toLowerCase().includes(activeGroup.toLowerCase()));

      // Search Query Filter
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        (item.Activity && item.Activity.toLowerCase().includes(q)) ||
        (item.Group && item.Group.toLowerCase().includes(q));

      return matchGroup && matchSearch;
    });

    currentDisplayCount = PAGE_SIZE; // Nulstil visningsgrænse ved ny søgning/filter
    render();
  }

  // Rendering af tabellen
  function render() {
    if (!tbody) return;

    if (filteredData.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; padding: 2.5rem; color: #64748b;">
            ❌ Ingen aktiviteter fundet der matcher din søgning "<strong>${searchQuery}</strong>".
          </td>
        </tr>
      `;
      if (countEl) countEl.textContent = '0 aktiviteter fundet';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    const itemsToRender = filteredData.slice(0, currentDisplayCount);

    tbody.innerHTML = itemsToRender.map(item => `
      <tr>
        <td>
          <span class="mp-met-group-tag">${item.Group || 'Generelt'}</span>
        </td>
        <td>
          <strong style="color: #0f172a; font-weight: 700;">${item.Activity}</strong>
        </td>
        <td style="text-align: right;">
          <span class="mp-met-badge">${parseFloat(item.MET).toFixed(1)}</span>
        </td>
      </tr>
    `).join('');

    // Opdater status-tal
    if (countEl) {
      countEl.textContent = `Viser ${itemsToRender.length} af ${filteredData.length} aktiviteter`;
    }

    // Håndter "Vis Flere" knap
    if (loadMoreBtn) {
      if (currentDisplayCount < filteredData.length) {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.textContent = `Vis flere (${filteredData.length - currentDisplayCount} tilbage) ⬇️`;
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  if (pillsContainer) {
    pillsContainer.addEventListener('click', (e) => {
      const pill = e.target.closest('.mp-met-pill');
      if (!pill) return;

      pillsContainer.querySelectorAll('.mp-met-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      activeGroup = pill.getAttribute('data-group') || 'all';
      
      if (filterLabelEl) {
        filterLabelEl.textContent = `Kategori: ${pill.textContent.trim()}`;
      }

      applyFilters();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentDisplayCount += PAGE_SIZE;
      render();
    });
  }

  // Opstart
  loadData();
}