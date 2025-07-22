let panier = [];
let total = 0;

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  const totalElement = document.getElementById("total");
  liste.innerHTML = "";

  panier.forEach(item => {
    const li = document.createElement("li");
    li.textContent = ${item.nom} - ${item.prix} €;
    liste.appendChild(li);
  });

  totalElement.textContent = ${total} €;
}
// Bloc 2 : Ajout dynamique de produit via le formulaire
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("productName").value;
      const price = parseFloat(document.getElementById("productPrice").value);
      const image = document.getElementById("productImage").value;

      const container = document.querySelector(".products");

      const newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>Prix : ${price} €</p>
        <button>Ajouter au panier</button>
      `;

      newProduct.querySelector("button").addEventListener("click", () => {
        ajouterAuPanier(name, price);
      });

      container.appendChild(newProduct);
    });
  }
});
// Ajouter des événements sur les boutons
document.addEventListener("DOMContentLoaded", () => {
  const boutons = document.querySelectorAll("button");

  boutons[0].addEventListener("click", () => ajouterAuPanier("Produit 1", 10));
  boutons[1].addEventListener("click", () => ajouterAuPanier("Produit 2", 15));
});
