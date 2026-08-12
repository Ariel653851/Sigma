// Menu data
const menuData = {
  entrees: [
    { name: "Bruschetta al pomodoro", desc: "Pain grillé, tomates fraîches, basilic, ail, huile d'olive extra-vierge", price: "8,50 €", badge: "Végétarien" },
    { name: "Carpaccio di manzo", desc: "Fines tranches de bœuf, roquette, parmesan, câpres et citronnette", price: "13,00 €", badge: "" },
    { name: "Burrata pugliese", desc: "Burrata crémeuse, tomates cerises, basilic frais, réduction balsamique", price: "11,00 €", badge: "Coup de ♥" },
    { name: "Supplì al telefono", desc: "Croquettes de riz à la viande et mozzarella filante, sauce tomate", price: "9,00 €", badge: "" },
  ],
  plats: [
    { name: "Spaghetti alla carbonara", desc: "Pâtes maison, guanciale, œuf, pecorino romano, poivre noir", price: "16,00 €", badge: "Maison" },
    { name: "Osso buco alla milanese", desc: "Jarret de veau braisé, gremolata, risotto safrané", price: "22,00 €", badge: "Spécialité" },
    { name: "Tagliatelle al ragù", desc: "Pâtes fraîches, ragù bolognaise mijoté 4 heures, parmesan affiné", price: "17,50 €", badge: "Maison" },
    { name: "Salmone al forno", desc: "Saumon rôti aux herbes, légumes grillés, sauce vierge au citron", price: "19,00 €", badge: "" },
    { name: "Risotto ai funghi", desc: "Risotto crémeux aux champignons sauvages, truffe noire, parmesan", price: "18,00 €", badge: "Végétarien" },
    { name: "Saltimbocca alla romana", desc: "Escalope de veau, prosciutto, sauge, beurre blanc au vin blanc", price: "21,00 €", badge: "" },
  ],
  pizzas: [
    { name: "Margherita D.O.C.", desc: "Sauce tomates San Marzano, mozzarella di bufala, basilic frais", price: "13,50 €", badge: "Classique" },
    { name: "Diavola", desc: "Sauce tomate, mozzarella, salami piquant, piment, huile au piment", price: "15,00 €", badge: "Épicée 🌶️" },
    { name: "Quattro formaggi", desc: "Mozzarella, gorgonzola, fontina, parmesan, miel de truffe", price: "16,00 €", badge: "" },
    { name: "Tartufo", desc: "Crème de truffe, mozzarella, champignons, huile de truffe, roquette", price: "18,50 €", badge: "Coup de ♥" },
    { name: "Prosciutto e rucola", desc: "Sauce tomate, mozzarella, jambon de Parme 24 mois, roquette, parmesan", price: "16,00 €", badge: "" },
  ],
  desserts: [
    { name: "Tiramisù della casa", desc: "Recette de la mamma d'Alberto, mascarpone, biscuits savoiardi, espresso", price: "8,00 €", badge: "Maison" },
    { name: "Panna cotta al caramello", desc: "Panna cotta vanille, caramel beurre salé, éclats de noisettes", price: "7,50 €", badge: "" },
    { name: "Cannoli siciliani", desc: "Tubes croustillants, ricotta sucrée, pépites de chocolat, pistaches", price: "7,00 €", badge: "" },
    { name: "Gelato artigianale", desc: "3 boules au choix : pistache, stracciatella, citron, fruits rouges", price: "6,50 €", badge: "Artisanal" },
  ],
};

// Render menu
function renderMenu(tab) {
  const grid = document.getElementById('menu-content');
  const items = menuData[tab];
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="menu-card-top">
        <h3>${item.name}</h3>
        <span class="menu-price">${item.price}</span>
      </div>
      <p class="menu-desc">${item.desc}</p>
      ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
    </div>
  `).join('');
}

// Tab switching
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});

// Initial render
renderMenu('entrees');

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reservation form
document.getElementById('reservation-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Demande envoyée !';
  btn.style.background = '#2D6B4A';
  btn.style.borderColor = '#2D6B4A';
  setTimeout(() => {
    btn.textContent = 'Confirmer la réservation';
    btn.style.background = '';
    btn.style.borderColor = '';
    e.target.reset();
  }, 3000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(26,26,26,0.98)';
  } else {
    nav.style.background = 'rgba(26,26,26,0.92)';
  }
});
