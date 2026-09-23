// ===============================
// SHOPZONE SETTINGS
// Change this number to your WhatsApp number.
// Use international format WITHOUT +, spaces or brackets.
// Example for India: 919876543210
// ===============================
const WHATSAPP_NUMBER = "918590159179";

const products = [
  {
    name: "AirPods 4",
    price: "₹499",
    image: "images/airpods4-1.png",
    description: "Premium wireless earbuds with a stylish design and comfortable everyday listening."
  }
];
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function renderProducts(){
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map((p,i)=>`
    <article class="product">
      <div class="product-img">
  <img src="${p.image}" alt="${p.name}">
</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price">${p.price}</div>
        <button class="btn order" onclick="orderOnWhatsApp(products[${i}])">Order on WhatsApp</button>
      </div>
    </article>
  `).join("");
}

function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("open");
}

document.getElementById("contactWhatsApp").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello SHOPZONE! I have a question.")}`;

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
