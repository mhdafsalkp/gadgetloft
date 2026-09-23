// ===============================
// SHOPZONE SETTINGS
// Change this number to your WhatsApp number.
// Use international format WITHOUT +, spaces or brackets.
// Example for India: 919876543210
// ===============================
const WHATSAPP_NUMBER = "918590159179";

const products = [
  {name:"Everyday Organizer", price:"₹499", icon:"🧺", description:"A practical organizer for home and everyday use."},
  {name:"Kitchen Essential", price:"₹699", icon:"🍳", description:"A useful kitchen product designed for convenience."},
  {name:"Smart Accessory", price:"₹399", icon:"🎧", description:"A handy accessory for modern everyday life."},
  {name:"Home Utility", price:"₹599", icon:"🏠", description:"Simple, useful and practical for your home."}
];

function orderOnWhatsApp(product){
  const message = `Hello SHOPZONE! I am interested in ordering: ${product.name} (${product.price}). Please share availability, delivery charges and payment details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function renderProducts(){
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map((p,i)=>`
    <article class="product">
      <div class="product-img" aria-label="${p.name}">${p.icon}</div>
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
