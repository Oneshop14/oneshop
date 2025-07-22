let panier = [];
let total = 0;

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  const totalElem = document.getElementById("total");
  liste.innerHTML = "";

  panier.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nom} - ${item.prix} €`;
    liste.appendChild(li);
  });

  totalElem.textContent = `Total : ${total} €`;
}
