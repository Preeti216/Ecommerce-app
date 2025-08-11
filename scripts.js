const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$499",
    category: "Electronics",
    image: "assets/phone.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    category: "Electronics",
    image: "assets/laptop.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: "$89",
    category: "Electronics",
    image: "assets/headphones.jpg"
  },
  {
    id: 4,
    name: "T-Shirt",
    price: "$19",
    category: "Fashion",
    image: "assets/tshirt.jpg"
  },
  {
    id: 5,
    name: "Shoes",
    price: "$49",
    category: "Fashion",
    image: "assets/shoes.jpg"
  },
  {
    id: 6,
    name: "Jacket",
    price: "$79",
    category: "Fashion",
    image: "assets/jacket.jpg"
  }
];

function filterProducts(category) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  const filtered = category === 'All' ? products : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" width="150" height="150">
      <p><strong>${p.name}</strong></p>
      <p>${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="addToWishlist(${p.id})">Add to Wishlist</button>
    `;

    container.appendChild(div);
  });
}

// Initial load
window.onload = () => filterProducts('All');

// Dummy functions for cart/wishlist (you can implement real logic later)
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added to cart: " + id);
  } else {
    alert("Item already in cart.");
  }
}

function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert("Added to wishlist: " + id);
  } else {
    alert("Item already in wishlist.");
  }
}


