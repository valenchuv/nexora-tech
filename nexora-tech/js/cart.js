// ==========================================================================
// NEXORA TECH - LOGICA DEL CARRITO Y CUPONES
// ==========================================================================

let activeCoupon = null;

document.addEventListener("DOMContentLoaded", () => {
  renderCartView();
});

function renderCartView() {
  const container = document.getElementById("cartLayoutContainer");
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--color-text-light); margin-bottom: 1rem;">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <h3>Tu carrito está vacío</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Descubrí las últimas novedades en tecnología y hardware de rendimiento.</p>
        <a href="productos.html" class="btn btn-primary">Ir al catálogo</a>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  const itemsHtml = cart.map(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!prod) return "";
    const itemTotal = prod.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <div style="width: 80px; height: 80px; background: #F8FAFC; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <img src="${prod.images[0]}" alt="${prod.name}" style="max-height: 90%; max-width: 90%; object-fit: contain;">
        </div>
        <div>
          <h4 style="font-weight: 700; color: var(--color-text-main); font-size: 1rem;"><a href="producto.html?id=${prod.id}">${prod.name}</a></h4>
          <div style="font-size: 0.85rem; color: var(--color-text-muted);">${prod.brand}</div>
          <div style="font-weight: 700; color: var(--color-primary-dark); margin-top: 0.35rem;">${formatPrice(prod.price)} c/u</div>
        </div>
        <div style="display: flex; align-items: center; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: #fff;">
          <button style="padding: 0.3rem 0.6rem;" onclick="updateItemQuantity('${prod.id}', ${item.quantity - 1})">-</button>
          <span style="padding: 0.3rem 0.8rem; font-weight: bold; font-size: 0.9rem;">${item.quantity}</span>
          <button style="padding: 0.3rem 0.6rem;" onclick="updateItemQuantity('${prod.id}', ${item.quantity + 1})">+</button>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; font-size: 1.1rem; color: var(--color-primary-dark);">${formatPrice(itemTotal)}</div>
          <button onclick="removeItem('${prod.id}')" style="color: var(--color-danger); font-size: 0.8rem; margin-top: 0.35rem; display: inline-flex; align-items: center; gap: 2px;">
            Eliminar
          </button>
        </div>
      </div>
    `;
  }).join("");

  const convertedSubtotal = subtotal * 1200;
  let shippingCost = convertedSubtotal > 150000 ? 0 : 7500;

  let discountAmount = 0;
  if (activeCoupon) {
    if (activeCoupon.type === "percentage") {
      discountAmount = (convertedSubtotal * activeCoupon.value) / 100;
    } else if (activeCoupon.type === "shipping") {
      shippingCost = 0;
    }
  }

  const finalTotal = convertedSubtotal - discountAmount + shippingCost;

  sessionStorage.setItem("nexora_checkout_totals", JSON.stringify({
    subtotal: convertedSubtotal,
    discount: discountAmount,
    shipping: shippingCost,
    total: finalTotal,
    coupon: activeCoupon ? activeCoupon.code : null
  }));

  container.innerHTML = `
    <div class="cart-table-wrap">
      <div style="display: flex; justify-content: space-between; border-bottom: 2px solid var(--color-border); padding-bottom: 0.75rem; font-weight: 700;">
        <span>Producto</span>
        <span>Subtotal</span>
      </div>
      <div>${itemsHtml}</div>
      <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
        <button class="btn btn-secondary btn-sm" onclick="clearFullCart()">Vaciar Carrito</button>
      </div>
    </div>

    <div class="cart-summary">
      <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem;">Resumen de Compra</h3>
      
      <div class="summary-line">
        <span>Subtotal</span>
        <span style="font-weight: 600;">${new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(convertedSubtotal)}</span>
      </div>

      <div class="summary-line">
        <span>Envío</span>
        <span style="font-weight: 600; color: ${shippingCost === 0 ? 'var(--color-success)' : 'inherit'};">
          ${shippingCost === 0 ? '¡Gratis!' : new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(shippingCost)}
        </span>
      </div>

      ${discountAmount > 0 ? `
        <div class="summary-line" style="color: var(--color-success);">
          <span>Descuento aplicado (${activeCoupon.code})</span>
          <span>-${new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(discountAmount)}</span>
        </div>
      ` : ""}

      <div class="summary-line summary-total">
        <span>Total</span>
        <span>${new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(finalTotal)}</span>
      </div>

      <div style="margin: 1.5rem 0 1.25rem 0; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
        <label for="couponInput" style="font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 0.4rem;">¿Tenés un cupón de descuento?</label>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="couponInput" placeholder="Ej: NEXORA10" style="flex: 1; padding: 0.5rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); text-transform: uppercase;">
          <button class="btn btn-dark btn-sm" onclick="applyCouponCode()">Aplicar</button>
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.4rem;">Cupones demo: <strong>NEXORA10</strong> (10% OFF), <strong>ENVIOGRATIS</strong></div>
      </div>

      <a href="checkout.html" class="btn btn-primary btn-block">Iniciar Checkout</a>
    </div>
  `;
}

function updateItemQuantity(id, qty) {
  updateCartQuantity(id, qty);
  renderCartView();
}

function removeItem(id) {
  removeFromCart(id);
  renderCartView();
}

function clearFullCart() {
  saveCart([]);
  renderCartView();
}

function applyCouponCode() {
  const input = document.getElementById("couponInput");
  const code = input ? input.value.trim().toUpperCase() : "";

  if (!code) return;

  if (ACTIVE_COUPONS[code]) {
    activeCoupon = { ...ACTIVE_COUPONS[code], code: code };
    showToast(`Cupón "${code}" aplicado con éxito`, "success");
    renderCartView();
  } else {
    showToast("El cupón ingresado no es válido", "warning");
  }
}
