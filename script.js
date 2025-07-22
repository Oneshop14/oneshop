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

// Ajouter des événements sur les boutons
document.addEventListener("DOMContentLoaded", () => {
  const boutons = document.querySelectorAll("button");

  boutons[0].addEventListener("click", () => ajouterAuPanier("Produit 1", 10));
  boutons[1].addEventListener("click", () => ajouterAuPanier("Produit 2", 15));
});
