let input1 = document.getElementById("chiffre1");
let input2 = document.getElementById("chiffre2");
let resultat = 0;

function addition(){
    resultat = parseFloat(input1.value) + parseFloat(input2.value);
    alert('Le resultat est : ' + resultat);
}
function soustraction(){
    resultat = parseFloat(input1.value) - parseFloat(input2.value);
    alert('le nombre de chocolatine que doit ramener Florian est :' + resultat);

}
function multiplication(){
    resultat =parseFloat(input1.value)*parseFloat(input2.value);
    alert('Le resultat est : ' + resultat);

}
function division(){
    resultat =parseFloat(input1.value)/parseFloat(input2.value);
    
    if (parseFloat(input2.value) >= 1 && resultat >= 1){
        alert('Le super resultat est : ' + resultat);
    } 
    else {
        alert("Erreur");
    }
}