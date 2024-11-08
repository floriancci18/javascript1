// Méthode avec une boucle
function calculerSomme(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
// Méthode avec reduce()
function calculerSomme(tableau) {
    // Utilisation de reduce pour additionner les éléments du tableau
    let somme = tableau.reduce((acc, valeur) => acc + valeur, 0);
    return somme;
}
// Exemple d'utilisation :
let tableau1 = [1, 2, 3, 4, 5];
let resultatSomme = calculerSomme(tableau1);
console.log('Somme des éléments du tableau :', resultatSomme); // Affiche la somme des éléments du tableau