// ==========================================================================
// NEXORA TECH - LOGICA DE DETALLE DE PRODUCTO
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    window.location.href = "productos.html";
    return;
  }

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) {
    document.getElementById("productDetailContainer").innerHTML = `
      <div class="empty-state" style="margin: 4rem 0;">
        <h3>Producto no encontrado</h3>
        <p>El código de producto no existe en nuestro catálogo actual.</p>
        <a href="productos.html" class="btn btn-primary" style="margin-top: 1rem;">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  renderProductDetail(product);
  renderRelated(product);
});

function renderProductDetail(p) {
  const container = document.getElementById("productDetailContainer");
  const wishlist = getWishlist();
  const isFav = wishlist.includes(p.id);

  container.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="main-img-box">
          <img id="mainImage" src="${p.images[0]}" alt="${p.name}">
        </div>
        <div class="thumb-strip">
          ${p.images.map((img, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="setMainImage('${img}', this)">
              <img src="${img}" alt="Miniatura ${idx + 1}">
            </div>
          `).join("")}
        </div>
      </div>

      <div class="detail-info">
        <div style="color: var(--color-text-muted); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">
          ${p.brand} &bull; SKU: NX-${p.id.toUpperCase()}
        </div>
        <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--color-primary-dark); margin: 0.4rem 0 0.85rem 0; line-height: 1.2;">
          ${p.name}
        </h1>
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
          <span style="color: var(--color-warning); font-size: 1.05rem;">&#9733; <strong>${p.rating}</strong></span>
          <span style="color: var(--color-text-muted); font-size: 0.88rem;">${p.reviewsCount} opiniones verificadas</span>
          <span style="color: var(--color-success); font-size: 0.88rem; font-weight: 600;">En Stock (${p.stock} disponibles)</span>
        </div>

        <div style="padding: 1.25rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); margin-bottom: 1.5rem;">
          ${p.oldPrice ? `<div style="text-decoration: line-through; color: var(--color-text-muted); font-size: 1rem;">${formatPrice(p.oldPrice)}</div>` : ""}
          <div style="font-size: 2.4rem; font-weight: 800; color: var(--color-primary-dark);">${formatPrice(p.price)}</div>
          <div style="color: var(--color-primary-blue); font-weight: 600; font-size: 0.95rem; margin-top: 0.25rem;">
            6 cuotas sin interés de ${formatPrice(p.price / 6)} con tarjetas bancarias
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; border: 1.5px solid var(--color-border); border-radius: var(--radius-md); background: #fff;">
            <button style="padding: 0.6rem 1rem; font-weight: bold;" onclick="changeQty(-1)">-</button>
            <input type="number" id="detailQty" value="1" min="1" max="${p.stock}" readonly style="width: 50px; text-align: center; border: none; font-weight: 700;">
            <button style="padding: 0.6rem 1rem; font-weight: bold;" onclick="changeQty(1)">+</button>
          </div>
          <button class="btn btn-primary" style="flex: 1;" onclick="addDetailToCart('${p.id}')">
            Agregar al Carrito
          </button>
          <button class="btn btn-secondary" onclick="toggleDetailWishlist('${p.id}', this)" title="Favorito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div style="background: #F8FAFC; border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.88rem; color: var(--color-text-main);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; font-weight: 600;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
            Envío gratis a todo el país en compras calificadas
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem; font-weight: 600;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Garantía oficial NEXORA de 12 meses
          </div>
        </div>
      </div>
    </div>

    <div class="tabs-nav">
      <div class="tab-btn active" onclick="switchTab('desc', this)">Descripción</div>
      <div class="tab-btn" onclick="switchTab('specs', this)">Especificaciones Técnicas</div>
      <div class="tab-btn" onclick="switchTab('reviews', this)">Opiniones (${p.reviews ? p.reviews.length : 0})</div>
    </div>

    <div id="tab-desc" class="tab-content active">
      <p style="font-size: 1.05rem; line-height: 1.8; color: #334155;">${p.description}</p>
    </div>

    <div id="tab-specs" class="tab-content">
      <table class="specs-table">
        ${Object.entries(p.specs || {}).map(([key, val]) => `
          <tr><td>${key}</td><td>${val}</td></tr>
        `).join("")}
      </table>
    </div>

    <div id="tab-reviews" class="tab-content">
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${(p.reviews || []).map(r => `
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
              <strong style="color: var(--color-primary-dark);">${r.user}</strong>
              <span style="font-size: 0.8rem; color: var(--color-text-muted);">${r.date}</span>
            </div>
            <div style="color: var(--color-warning); font-size: 0.9rem; margin-bottom: 0.5rem;">
              ${'&#9733;'.repeat(Math.round(r.rating))}
            </div>
            <p style="color: var(--color-text-main); font-size: 0.92rem;">${r.comment}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function setMainImage(src, element) {
  document.getElementById("mainImage").src = src;
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  element.classList.add("active");
}

function changeQty(delta) {
  const input = document.getElementById("detailQty");
  let val = parseInt(input.value) + delta;
  if (val >= 1 && val <= parseInt(input.max)) {
    input.value = val;
  }
}

function addDetailToCart(id) {
  const qty = parseInt(document.getElementById("detailQty").value);
  addToCart(id, qty);
}

function toggleDetailWishlist(id, btn) {
  const isFav = toggleWishlist(id);
  const icon = btn.querySelector("svg");
  if (icon) {
    icon.setAttribute("fill", isFav ? "currentColor" : "none");
  }
}

function switchTab(tabId, btn) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(`tab-${tabId}`).classList.add("active");
}

function renderRelated(product) {
  const container = document.getElementById("relatedProductsGrid");
  const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  if (related.length === 0) {
    container.parentElement.style.display = "none";
    return;
  }

  container.innerHTML = related.map(prod => `
    <div class="product-card">
      <div class="product-image-wrap">
        <a href="producto.html?id=${prod.id}">
          <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
        </a>
      </div>
      <div class="product-details">
        <div class="product-category-brand">${prod.brand}</div>
        <h3 class="product-name"><a href="producto.html?id=${prod.id}">${prod.name}</a></h3>
        <div class="product-price-box">
          <div class="current-price">${formatPrice(prod.price)}</div>
        </div>
        <button class="btn btn-primary btn-sm btn-block" onclick="addToCart('${prod.id}')">Agregar</button>
      </div>
    </div>
  `).join("");
}
