// Fonction nommé
function addition(nombre1,nombre2){
    alert('Coucou');
    return nombre1+nombre2;
    
}
// Fonction anonyme
let addition2 = function(nombre1,nombre2){
    return nombre1+nombre2;
}
// Fonction fléchée
let addition3 = (nombre1,nombre2) => {
    return nombre1+nombre2;
}
addition(2,2);
addition(10,20);
addition2(2,2);
addition3(2,2);