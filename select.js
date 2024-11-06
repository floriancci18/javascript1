function redirection(){
    let lien = document.getElementById('menu').value; // Pour récupérer le lien
    document.location.href = lien;
}
// Je vais sélectionner mon input
let couleur = document.getElementById('couleur');
document.addEventListener('mousemove',function(){
    //alert(couleur.value);
    console.log('coucou');
    document.body.style.backgroundColor = couleur.value;
});
// Pour créer une fonction qui stop pendant x secondes
function attendre(){
    return new Promise(resolve => setTimeout(resolve,50));
}
async function stroboscope(){
    // Changer le background une fois sur 2
let i2 = 0;
for(let i=0;i<20000;i++){
    if(i2 == 0){
        document.body.style.backgroundColor = 'blue';
    }
    else if(i2 == 1){
        document.body.style.backgroundColor = '#ffffff';
    }
    else if(i==2){
        document.body.style.backgroundColor = 'red';
    }
    else{
        document.body.style.backgroundColor = 'pink';
    }
    if(i2==3){
        i2=0;
    }
    else{
        i2++;
    }
        /*if(i%2){
            document.body.style.backgroundColor = '#000000'; // Si i est impair background black
        }
        else{
            document.body.style.backgroundColor = '#ffffff'; // on passe en blanc
        }*/
        await attendre(); // bloque l'itération de la boucle pendant 500ms
        console.log(i);
    }
}
