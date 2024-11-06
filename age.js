// Pour demander une info au visiteur
/*let age = prompt('Indiquez votre age');
console.log(age);
alert(age); // pour afficher une fenêtre déguelasse
// Si la personne à plus de 18 ans
if(age >= 18){
    // Alors il peut voir Kenza
    alert('Tu peux voir Kenza');
}
else{
    // Il faut rester sur Pokémon
    alert('Regarde Pokémon');
    document.location.href="https://www.free.fr"; // Pour rediriger l'utilisateur
}*/
// Pour déclarer une fonction
function verifierAge(){
    let age = document.getElementById('age').value;
    if(age >= 18){
        document.getElementById('resultat').innerText = 'Tu peux voir Kenza';
    }
    else{
        document.getElementById('resultat').innerText = 'Retourne voir Bambi';
    }
}