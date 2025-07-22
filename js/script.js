
let products = [];
let cart = [];

document.getElementById('add-product-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('product-name').value;
  const price = parseInt(document.getElementById('product-price').value);
  const image = document.getElementById('product-image').files[0];

  const reader = new FileReader();
  reader.onload = function() {
    const imgURL = reader.result;
    const product = { id: Date.now(), name, price, img: imgURL };
    products.push(product);
    displayProducts();
  }
  reader.readAsDataURL(image);
});

function displayProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.price} f</p>
      <button onclick="addToCart(${product.id})">Ajouter au panier</button>
      <button onclick="removeProduct(${product.id})">Supprimer</button>
    `;
    list.appendChild(div);
  });
}

function removeProduct(id) {
  products = products.filter(p => p.id !== id);
  displayProducts();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  const items = document.getElementById('cart-items');
  items.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.textContent = `${item.name} - ${item.price} f`;
    items.appendChild(li);
    total += item.price;
  });
  document.getElementById('total').textContent = total;
}
