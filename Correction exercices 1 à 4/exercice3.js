function doublerElements(tableau) {
    // Crée un nouveau tableau vide pour stocker les éléments doublés
    let tableauDouble = [];

    // Parcourt chaque élément du tableau d'entrée
    for (let i = 0; i < tableau.length; i++) {
        // Double chaque élément et l'ajoute au tableauDouble
        tableauDouble.push(tableau[i] * 2);
    }

    // Retourne le tableau contenant les éléments doublés
    return tableauDouble;
}

// Exemple d'utilisation :
let tableau3 = [2, 4, 6, 8, 10];

// Appelle la fonction doublerElements() avec le tableau3
let tableauDouble = doublerElements(tableau3);

// Affiche le nouveau tableau contenant les éléments doublés
console.log(tableauDouble); // Affiche [4, 8, 12, 16, 20]