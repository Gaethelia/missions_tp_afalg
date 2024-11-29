/*Aliyah Falgueyrettes */

/// Defaut principal : fichier utilise plusieurs fois fonction similaire.
/// Fonctionnel mais laid et moins performant.

function solution1(){
    /*Cette fonction récupère l'état CSS du div et le passe dans l'état inverse.*/
    let div = document.getElementById('solution1'); 

    if (div.style.display === 'none'){
        div.style.display = 'block';
    }

    else {
        div.style.display = 'none';
    }
}

function demo_ex1(){
    let n1 = prompt("Saisir nombre 1");
    let n2 = prompt("Saisir nombre 2");
    let n3 = prompt("Saisir nombre 3");

    let somme = Number(n1) + Number(n2) + Number(n3);
    let moyenne = somme/3;

    let fenetre = window.open();
    
    fenetre.document.write("Voici la somme : " + somme + "<br>");
    fenetre.document.write("Voici la moyenne : " + moyenne + "<br>");
}

function solution2(){
    let div = document.getElementById('solution2');

    if (div.style.display === 'none'){
        div.style.display = 'block';
    }

    else {
        div.style.display = 'none';
    }
}

function demo_ex2(){
    let couleur = prompt('Entrer rouge, bleu ou vert en minuscules');
    if (couleur=='rouge'){
        document.body.style.backgroundColor = 'red';}
    else if (couleur=='bleu'){
        document.body.style.backgroundColor = 'blue';}
    else if(couleur=='vert'){
        document.body.style.backgroundColor = 'green';}
    else {
        document.body.style.backgroundColor = 'beige';}
}

///exercice types selon prompt

function solution3(){
    let div = document.getElementById('solution3');

    if (div.style.display === 'none'){
        div.style.display = 'block';
    }

    else {
        div.style.display = 'none';
    }
}


function demo_ex3(){
    let aleatoire = Math.floor(Math.random() * 101);
    let reponse = prompt("Tapez END pour mettre fin au jeu. Quel est le nombre aléatoire entre 0 et 100 choisi par l'ordinateur ?");
    while(reponse!=aleatoire){
        if (reponse>aleatoire){
            reponse = prompt('Trop grand ! Réessayez :');
        }
        else if (reponse<aleatoire){
            reponse = prompt('Trop petit ! Réessayez :');}
        else if (reponse=='END'){
            break;
        }
        else{
            reponse = prompt("Ce n'est pas un nombre ! Tapez END pour mettre fin au jeu. Quel est le nombre aléatoire entre 0 et 100 choisi par l'ordinateur ?");
        }
    }
    alert("Le nombre était "+aleatoire+" :D")}


function solution4(){
    let div = document.getElementById('solution4');

    if (div.style.display === 'none'){
        div.style.display = 'block';
    }

    else {
        div.style.display = 'none';
    }
}
function demo_ex4(){
    let hola = window.open()
    let tf = hola.confirm('Quitter la page ?')
    if (tf==true){
        hola.window.close()
    }
    }

