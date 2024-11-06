let chiffre = parseInt(prompt('Saisir un chiffre'));
// Je fais une boucle qui va de 1 à 10
for(let i=1;i<=10;i++){
    console.log(chiffre+ 'x' +i+ '=' +chiffre*i);
    document.getElementById('tanguy').innerHTML+= chiffre+ 'x' +i+ '=' +chiffre*i+'<br>';
}
let ligneEtoile = "";
for(let i=0 ; i<5 ; i++){
    ligneEtoile = ligneEtoile+ '*';
    console.log(i+ ' : ' +ligneEtoile);
}