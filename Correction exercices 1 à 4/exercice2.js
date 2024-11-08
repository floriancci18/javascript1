function rechercherElement(tableau, elementRecherche) {
    // Débute une boucle qui parcourt chaque élément du tableau
    for (let i = 0; i < tableau.length; i++) {
        // Vérifie si l'élément actuel à l'index 'i' est égal à l'élément recherché
        if (tableau[i] === elementRecherche) {
            // Si l'élément est trouvé, retourne "Trouvé" et arrête la fonction
            return "Trouvé";
        }
    }
    // Si l'élément n'est pas trouvé après avoir parcouru tout le tableau, retourne "Non trouvé"
    return "Non trouvé";
}

// Exemple d'utilisation :
let tableau2 = ['pomme', 'orange', 'banane', 'fraise', 'raisin'];
let elementRecherche1 = 'banane';

// Appelle la fonction rechercherElement() avec le tableau2 et l'élémentRecherche1
let resultatRecherche = rechercherElement(tableau2, elementRecherche1);

// Affiche le résultat de la recherche dans la console
console.log(resultatRecherche); // Affiche "Trouvé" car 'banane' est présent dans le tableau