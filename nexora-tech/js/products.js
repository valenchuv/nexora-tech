// ==========================================================================
// NEXORA TECH - LOGICA DEL CATÁLOGO DE PRODUCTOS
// ==========================================================================

let activeFilters = {
  category: null,
  brand: null,
  search: null,
  minPrice: null,
  maxPrice: null,
  sortBy: "featured",
  isDeal: false
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("cat")) activeFilters.category = params.get("cat");
  if (params.get("search")) activeFilters.search = params.get("search");
  if (params.get("filter") === "deals") activeFilters.isDeal = true;

  renderFiltersSidebar();

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeFilters.sortBy = e.target.value;
      applyAllFilters();
    });
  }

  applyAllFilters();
});

function renderFiltersSidebar() {
  const catList = document.getElementById("categoryFilterList");
  if (catList) {
    catList.innerHTML = CATEGORIES_DATA.map(c => `
      <li class="filter-item">
        <label>
          <input type="radio" name="catFilter" value="${c.name}" ${activeFilters.category === c.name ? "checked" : ""} onchange="setFilter('category', '${c.name}')">
          ${c.name}
        </label>
      </li>
    `).join("");
  }

  const brandList = document.getElementById("brandFilterList");
  if (brandList) {
    brandList.innerHTML = BRANDS_DATA.map(b => `
      <li class="filter-item">
        <label>
          <input type="radio" name="brandFilter" value="${b}" ${activeFilters.brand === b ? "checked" : ""} onchange="setFilter('brand', '${b}')">
          ${b}
        </label>
      </li>
    `).join("");
  }
}

function setFilter(type, value) {
  activeFilters[type] = value;
  applyAllFilters();
}

function resetFilter(type) {
  activeFilters[type] = null;
  const radios = document.querySelectorAll(`input[name="${type === 'category' ? 'catFilter' : 'brandFilter'}"]`);
  radios.forEach(r => r.checked = false);
  applyAllFilters();
}

function applyPriceFilter() {
  const min = parseFloat(document.getElementById("minPrice").value);
  const max = parseFloat(document.getElementById("maxPrice").value);
  activeFilters.minPrice = isNaN(min) ? null : min;
  activeFilters.maxPrice = isNaN(max) ? null : max;
  applyAllFilters();
}

function applyAllFilters() {
  let filtered = [...PRODUCTS_DATA];

  if (activeFilters.category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === activeFilters.category.toLowerCase());
  }

  if (activeFilters.brand) {
    filtered = filtered.filter(p => p.brand.toLowerCase() === activeFilters.brand.toLowerCase());
  }

  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (activeFilters.isDeal) {
    filtered = filtered.filter(p => p.isDeal);
  }

  if (activeFilters.minPrice !== null) {
    filtered = filtered.filter(p => (p.price * 1200) >= activeFilters.minPrice);
  }
  if (activeFilters.maxPrice !== null) {
    filtered = filtered.filter(p => (p.price * 1200) <= activeFilters.maxPrice);
  }

  switch (activeFilters.sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  renderCatalog(filtered);
}

function renderCatalog(products) {
  const container = document.getElementById("catalogGrid");
  const countElement = document.getElementById("resultsCount");
  const wishlist = getWishlist();

  if (countElement) {
    countElement.textContent = `Mostrando ${products.length} productos`;
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>No encontramos productos para tu búsqueda</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Probá ajustando los términos de búsqueda o limpiá los filtros activos.</p>
        <button class="btn btn-primary" onclick="window.location.href='productos.html'">Ver todo el catálogo</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(prod => `
    <div class="product-card">
      <div class="product-badge-group">
        ${prod.discount ? `<span class="product-badge badge-discount">-${prod.discount}%</span>` : ""}
        ${prod.featured ? `<span class="product-badge badge-featured">Destacado</span>` : ""}
      </div>
      <button class="btn-wishlist ${wishlist.includes(prod.id) ? 'active' : ''}" onclick="handleWishlistClick('${prod.id}', this)" aria-label="Favorito">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${wishlist.includes(prod.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <div class="product-image-wrap">
        <a href="producto.html?id=${prod.id}">
          <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
        </a>
      </div>
      <div class="product-details">
        <div class="product-category-brand">${prod.brand} &bull; ${prod.category}</div>
        <h3 class="product-name"><a href="producto.html?id=${prod.id}">${prod.name}</a></h3>
        <div class="product-rating">
          &#9733; <strong>${prod.rating}</strong>
          <span class="rating-count">(${prod.reviewsCount})</span>
        </div>
        <div class="product-price-box">
          ${prod.oldPrice ? `<div class="old-price">${formatPrice(prod.oldPrice)}</div>` : ""}
          <div class="current-price">${formatPrice(prod.price)}</div>
          <div class="installments-text">Hasta 12 cuotas fijas</div>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="addToCart('${prod.id}')">Agregar</button>
          <a href="producto.html?id=${prod.id}" class="btn btn-secondary btn-sm">Detalles</a>
        </div>
      </div>
    </div>
  `).join("");
}

function handleWishlistClick(id, btn) {
  const isFav = toggleWishlist(id);
  btn.classList.toggle("active", isFav);
  const icon = btn.querySelector("svg");
  if (icon) {
    icon.setAttribute("fill", isFav ? "currentColor" : "none");
  }
}
