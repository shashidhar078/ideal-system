const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 70000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Samsung TV",
    price: 40000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Laptop",
    price: 55000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Headphones",
    price: 2000,
    image: "https://via.placeholder.com/200"
  }
];

let cartCount = 0;

function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function searchProduct() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}

// Initial load
displayProducts(products);
