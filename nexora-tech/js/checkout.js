// ==========================================================================
// NEXORA TECH - LOGICA DEL CHECKOUT Y FINANCIACIÓN
// ==========================================================================

const FINANCING_RATES = {
  1: 0.00,
  3: 0.10,
  6: 0.18,
  9: 0.27,
  12: 0.35
};

let currentPaymentMethod = "credit";
let checkoutTotals = { subtotal: 0, discount: 0, shipping: 0, total: 0 };
let currentInstallments = 1;
let currentInterestAmount = 0;
let currentFinalTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
  const storedTotals = sessionStorage.getItem("nexora_checkout_totals");
  const cart = getCart();

  if (!storedTotals || cart.length === 0) {
    window.location.href = "carrito.html";
    return;
  }

  checkoutTotals = JSON.parse(storedTotals);
  renderCheckoutSummary();
  calculateInstallments();
});

function updatePaymentMethod(method) {
  currentPaymentMethod = method;
  const panel = document.getElementById("creditFinancingPanel");
  panel.style.display = method === "credit" ? "block" : "none";
  calculateInstallments();
}

function calculateInstallments() {
  const select = document.getElementById("installmentSelect");
  const calcBox = document.getElementById("financingCalculations");
  
  if (currentPaymentMethod !== "credit") {
    currentInterestAmount = 0;
    currentFinalTotal = checkoutTotals.total;
    if (calcBox) calcBox.innerHTML = "";
    updateSummaryFinalTotal();
    return;
  }

  currentInstallments = parseInt(select.value);
  const rate = FINANCING_RATES[currentInstallments] || 0;
  
  currentInterestAmount = checkoutTotals.total * rate;
  currentFinalTotal = checkoutTotals.total + currentInterestAmount;
  const perInstallment = currentFinalTotal / currentInstallments;

  const fmt = (v) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(v);

  calcBox.innerHTML = `
    <div style="display: flex; justify-content: space-between;"><span>Precio base financiable:</span> <strong>${fmt(checkoutTotals.total)}</strong></div>
    <div style="display: flex; justify-content: space-between;"><span>Interés (${rate * 100}%):</span> <strong>${fmt(currentInterestAmount)}</strong></div>
    <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--color-border); padding-top: 4px; margin-top: 4px;">
      <span>Total financiado:</span> <strong>${fmt(currentFinalTotal)}</strong>
    </div>
    <div style="color: var(--color-primary-blue); font-weight: 800; font-size: 1rem; margin-top: 6px;">
      ${currentInstallments} cuota${currentInstallments > 1 ? 's' : ''} de ${fmt(perInstallment)}
    </div>
  `;

  updateSummaryFinalTotal();
}

function updateSummaryFinalTotal() {
  const finalEl = document.getElementById("summaryFinalTotal");
  if (finalEl) {
    finalEl.textContent = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(currentFinalTotal);
  }
}

function renderCheckoutSummary() {
  const box = document.getElementById("checkoutSummaryBox");
  const cart = getCart();
  const fmt = (v) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(v);

  box.innerHTML = `
    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--color-primary-dark);">Detalle del Pedido</h3>
    <div style="max-height: 220px; overflow-y: auto; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">
      ${cart.map(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (!prod) return "";
        return `
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.5rem;">
            <span>${prod.name} x${item.quantity}</span>
            <strong>${fmt(prod.price * 1200 * item.quantity)}</strong>
          </div>
        `;
      }).join("")}
    </div>

    <div class="summary-line"><span>Subtotal:</span> <strong>${fmt(checkoutTotals.subtotal)}</strong></div>
    <div class="summary-line"><span>Envío:</span> <strong>${checkoutTotals.shipping === 0 ? 'Gratis' : fmt(checkoutTotals.shipping)}</strong></div>
    ${checkoutTotals.discount > 0 ? `<div class="summary-line" style="color: var(--color-success);"><span>Descuento:</span> <strong>-${fmt(checkoutTotals.discount)}</strong></div>` : ""}

    <div class="summary-line summary-total">
      <span>Total a Pagar:</span>
      <span id="summaryFinalTotal">${fmt(checkoutTotals.total)}</span>
    </div>

    <button type="submit" form="checkoutForm" class="btn btn-primary btn-block" style="margin-top: 1.5rem;">
      Confirmar Orden DEMO
    </button>
  `;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const customer = {
    firstName: document.getElementById("cNombre").value.trim(),
    lastName: document.getElementById("cApellido").value.trim(),
    email: document.getElementById("cEmail").value.trim(),
    phone: document.getElementById("cTelefono").value.trim(),
    address: document.getElementById("cDireccion").value.trim(),
    city: document.getElementById("cCiudad").value.trim(),
    postalCode: document.getElementById("cCP").value.trim()
  };

  const orderNumber = `NX-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  const orderData = {
    orderNumber: orderNumber,
    date: new Date().toISOString().split("T")[0],
    customer: customer,
    items: getCart(),
    payment: {
      method: currentPaymentMethod,
      installments: currentInstallments,
      interest: currentInterestAmount
    },
    totals: {
      subtotal: checkoutTotals.subtotal,
      discount: checkoutTotals.discount,
      shipping: checkoutTotals.shipping,
      total: currentFinalTotal
    },
    status: "Confirmado (Demostración)"
  };

  const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || "[]");
  existingOrders.unshift(orderData);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));

  saveCart([]);
  sessionStorage.removeItem("nexora_checkout_totals");

  window.location.href = `confirmacion.html?order=${orderNumber}`;
}
