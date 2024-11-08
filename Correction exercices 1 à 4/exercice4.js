function concatenerTableaux(tableauA, tableauB) {
    // Utilisation de la méthode concat pour fusionner les deux tableaux
    let tableauConcatene = tableauA.concat(tableauB);
    
    // Retourne le tableau résultant de la concaténation
    return tableauConcatene;
}

// Exemple d'utilisation :
let tableau4a = ['a', 'b', 'c'];
let tableau4b = [1, 2, 3];

// Appelle la fonction concatenerTableaux() avec les deux tableaux
let tableauConcatene = concatenerTableaux(tableau4a, tableau4b);

// Affiche le nouveau tableau résultant de la concaténation
console.log(tableauConcatene); // Affiche ['a', 'b', 'c', 1, 2, 3]