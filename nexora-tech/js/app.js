// ==========================================================================
// NEXORA TECH - LOGICA GENERAL Y PERSISTENCIA LOCALSTORAGE
// ==========================================================================

const STORAGE_KEYS = {
  CART: "nexora_cart_v1",
  WISHLIST: "nexora_wishlist_v1",
  ORDERS: "nexora_orders_v1"
};

function getCart() {
  const cart = localStorage.getItem(STORAGE_KEYS.CART);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateHeaderBadges();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product) return;

  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      showToast(`Stock máximo disponible alcanzado (${product.stock} unidades)`, "warning");
      return;
    }
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }

  saveCart(cart);
  showToast(`"${product.name}" agregado al carrito`, "success");
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showToast("Producto eliminado del carrito", "info");
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (item && product) {
    if (quantity > product.stock) {
      showToast(`Solo disponemos de ${product.stock} unidades`, "warning");
      return;
    }
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    item.quantity = quantity;
    saveCart(cart);
  }
}

function getWishlist() {
  const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  return wishlist ? JSON.parse(wishlist) : [];
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Eliminado de favoritos`, "info");
  } else {
    wishlist.push(productId);
    showToast(`Guardado en tus favoritos`, "success");
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  updateHeaderBadges();
  return wishlist.includes(productId);
}

function updateHeaderBadges() {
  const cart = getCart();
  const wishlist = getWishlist();

  const cartBadge = document.getElementById("cartBadge");
  const wishlistBadge = document.getElementById("wishlistBadge");

  if (cartBadge) {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "flex" : "none";
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? "flex" : "none";
  }
}

function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function formatPrice(amount) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2
  }).format(amount * 1200);
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderBadges();

  const globalSearchForm = document.getElementById("globalSearchForm");
  if (globalSearchForm) {
    globalSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("globalSearchInput");
      const query = input ? input.value.trim() : "";
      if (query) {
        window.location.href = `productos.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
});
