let balance = 0.00;
let cart = [];

const menuProducts = [
  { id: 1, name: "Coxinha de Frango", price: 6.00 },
  { id: 2, name: "Misto Quente", price: 7.50 },
  { id: 3, name: "Pão de Queijo", price: 4.00 },
  { id: 4, name: "Suco Natural 300ml", price: 5.00 },
  { id: 5, name: "Refrigerante Lata", price: 5.50 }
];

function navigateTo(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  
  // Reseta mensagens de erro ao transicionar de tela
  document.querySelectorAll('.error-msg').forEach(err => err.style.display = 'none');
}

function updateBalanceDisplay() {
  document.getElementById('user-balance').innerText = balance.toFixed(2).replace('.', ',');
}

function renderMenu() {
  const container = document.getElementById('menu-items-container');
  if (!container) return;
  container.innerHTML = '';
  
  menuProducts.forEach(product => {
    const itemInCart = cart.find(item => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;
    
    container.innerHTML += `
      <div class="snack-item">
        <div class="snack-info">
          <h4>${product.name}</h4>
          <span>R$ ${product.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${quantity > 0 ? `<button class="btn btn-gray" style="padding:4px 10px;" onclick="changeQuantity(${product.id}, -1)">-</button>` : ''}
          <span>${quantity > 0 ? quantity : ''}</span>
          <button class="btn btn-amber" style="padding:4px 10px;" onclick="changeQuantity(${product.id}, 1)">+</button>
        </div>
      </div>
    `;
  });
  
  updateCartTotal();
}

function changeQuantity(productId, change) {
  const product = menuProducts.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);
  
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
  } else if (change > 0) {
    cart.push({ ...product, quantity: 1 });
  }
  
  renderMenu();
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  return total;
}

function handleLogin() {
  const nif = document.getElementById('login-nif').value;
  const pass = document.getElementById('login-password').value;
  
  if (nif.trim() !== "" && pass.trim() !== "") {
    navigateTo('view-dashboard');
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
}

// Adicionar Crédito
function handlePayment() {
  const amountInput = document.getElementById('credit-amount');
  const amount = parseFloat(amountInput.value);
  
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalanceDisplay();
    amountInput.value = ''; 
    navigateTo('view-dashboard');
  }
}

function handleCheckout() {
  const total = updateCartTotal();
  
  if (total === 0) return;
  
  if (balance >= total) {
    balance -= total;
    updateBalanceDisplay();
    cart = []; 
    navigateTo('view-dashboard');
    simulateKitchenResponse();
  } else {
    document.getElementById('menu-error').style.display = 'block';
    setTimeout(() => {
      navigateTo('view-credits');
    }, 1500);
  }
}

function simulateKitchenResponse() {
  setTimeout(() => {
    const notification = document.getElementById('kitchen-notification');
    if (notification) {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 4000);
    }
  }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});