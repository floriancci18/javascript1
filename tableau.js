/*let fruits = ['Pomme','banane','poire','fraises'];
console.log(`Nb élément du tableau${fruits.length}`);
//console.log(fruits[3]);
for(let indice=1; indice<=fruits.length; indice++){
    console.log(indice+' '+fruits[indice]);
    //console.log(indice);
}*/
let prenoms = ['Jimmy','Ilan','Thierry','Mélanie'];
for(let biloute of prenoms){
    //console.log(biloute);
}
let clients = [
    ['Stephane','Carpentier','DWWM'],
    ['Ilan','Senouci','Via'],
];
for(let client of clients){
    for(let info of client){
        
        console.log(info);
    }
    console.log('----');
    console.log(client[0]); // Pour afficher le prénom
}