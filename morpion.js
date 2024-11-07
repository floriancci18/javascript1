// Je demande le nom des 2 joueurs
let joueur1 = prompt('Prénom du premier joueur');
let joueur2 = prompt('Prénom du joueur 2');
// On initialise le score
let score1 = 0;
let score2 = 0;
// On initialise la partie
let partie = 1;
// j'initialise le joueur courant
let joueur_courant = joueur1;
// J'initialise le caractère du premier joueur
let joueur = 'X';
// On initialise le variable jeu à true pour le démarrer
let jeu = true;
// J'initialise mon tableau javascript
let tableau = ["","","","","","","","",""];
// J'initialise la variable qui compte les coups
let compteur = 0;
// J'initialise une variable binaire pour savoir si c'est le joueur pair/impaire
let binaire = 0;
// Fonction pour afficher les scores
function afficherScore(){
    document.getElementById('joueur1').innerText = joueur1;
    document.getElementById('joueur2').innerText = joueur2;
    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;
    document.getElementById('partie').innerText = partie;
}
// Fonction pour afficher le joueur qui doit jouer
function afficherMessage(prenom){
    document.getElementById('message').innerHTML = "C'est au tour de "+prenom;
}
// On affiche le message
afficherMessage(joueur_courant);