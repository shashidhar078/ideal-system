const products = [
  // Mobiles
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 129999,
    originalPrice: 139999,
    category: "mobiles",
    image: "https://via.placeholder.com/180x180?text=iPhone+14+Pro",
    rating: 4.3,
    reviews: 1250,
    discount: 7
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 74999,
    originalPrice: 84999,
    category: "mobiles",
    image: "https://via.placeholder.com/180x180?text=Samsung+S23",
    rating: 4.5,
    reviews: 890,
    discount: 12
  },
  {
    id: 3,
    name: "Vivo T5 Pro 5G",
    price: 21999,
    originalPrice: 29999,
    category: "mobiles",
    image: "https://via.placeholder.com/180x180?text=Vivo+T5+Pro",
    rating: 4.2,
    reviews: 1540,
    discount: 27
  },
  
  // Electronics
  {
    id: 4,
    name: "ASUS Expertbook",
    price: 65999,
    originalPrice: 79999,
    category: "electronics",
    image: "https://via.placeholder.com/180x180?text=ASUS+Expertbook",
    rating: 4.6,
    reviews: 420,
    discount: 18
  },
  {
    id: 5,
    name: "Dell Inspiron 15",
    price: 48999,
    originalPrice: 59999,
    category: "electronics",
    image: "https://via.placeholder.com/180x180?text=Dell+Laptop",
    rating: 4.4,
    reviews: 670,
    discount: 18
  },
  
  // Fashion
  {
    id: 6,
    name: "Kurta Sets for Women",
    price: 799,
    originalPrice: 1299,
    category: "fashion",
    image: "https://via.placeholder.com/180x180?text=Kurta+Sets",
    rating: 4.1,
    reviews: 2300,
    discount: 38
  },
  {
    id: 7,
    name: "Men's Formal Shirt",
    price: 599,
    originalPrice: 999,
    category: "fashion",
    image: "https://via.placeholder.com/180x180?text=Formal+Shirt",
    rating: 4.0,
    reviews: 1850,
    discount: 40
  },
  
  // Home
  {
    id: 8,
    name: "Smart Home Security",
    price: 3999,
    originalPrice: 5999,
    category: "home",
    image: "https://via.placeholder.com/180x180?text=Security+System",
    rating: 4.3,
    reviews: 540,
    discount: 33
  },
  {
    id: 9,
    name: "Air Purifier",
    price: 8999,
    originalPrice: 14999,
    category: "home",
    image: "https://via.placeholder.com/180x180?text=Air+Purifier",
    rating: 4.5,
    reviews: 780,
    discount: 40
  },
  
  // Beauty
  {
    id: 10,
    name: "Skincare Kit",
    price: 1999,
    originalPrice: 3499,
    category: "beauty",
    image: "https://via.placeholder.com/180x180?text=Skincare+Kit",
    rating: 4.2,
    reviews: 2100,
    discount: 43
  },
  {
    id: 11,
    name: "Hair Care Set",
    price: 899,
    originalPrice: 1499,
    category: "beauty",
    image: "https://via.placeholder.com/180x180?text=Hair+Care",
    rating: 3.9,
    reviews: 1200,
    discount: 40
  },
  
  // For You - Mix
  {
    id: 12,
    name: "Wireless Headphones",
    price: 2999,
    originalPrice: 4999,
    category: "for-you",
    image: "https://via.placeholder.com/180x180?text=Headphones",
    rating: 4.4,
    reviews: 950,
    discount: 40
  },
  {
    id: 13,
    name: "Sports Shoes",
    price: 3499,
    originalPrice: 5999,
    category: "for-you",
    image: "https://via.placeholder.com/180x180?text=Sports+Shoes",
    rating: 4.3,
    reviews: 1680,
    discount: 42
  }
];

let cartCount = 0;
let currentCategory = 'for-you';

function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 40px; grid-column: 1/-1;">No products found</p>';
    return;
  }

  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}"/>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="price">
            <span class="current">₹${product.price.toLocaleString()}</span>
            <span class="original">₹${product.originalPrice.toLocaleString()}</span>
            <span class="discount">${product.discount}% off</span>
          </div>
          <div class="rating">
            ★ ${product.rating} (${product.reviews} reviews)
          </div>
          <button onclick="addToCart('${product.name}')">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  
  // Show feedback
  alert(`${productName} added to cart! Total items: ${cartCount}`);
}

function filterCategory(category) {
  currentCategory = category;
  
  // Update active category button
  document.querySelectorAll('.category-item').forEach(item => {
    item.classList.remove('active');
  });
  event.target.closest('.category-item').classList.add('active');
  
  // Filter products
  if (category === 'for-you') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Search functionality
document.getElementById("search").addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchProduct();
  }
});

function searchProduct() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}

// Initial load
displayProducts(products);
