/*Aliyah Falgueyrettes */

function demo_ex1(){
    var n1 = prompt("Saisir nombre 1");
    var n2 = prompt("Saisir nombre 2");
    var n3 = prompt("Saisir nombre 3");

    var somme = Number(n1) + Number(n2) + Number(n3);
    var moyenne = somme/3;

    var fenetre = window.open();
    
    fenetre.document.write("Voici la somme : " + somme + "<br>");
    fenetre.document.write("Voici la moyenne : " + moyenne + "<br>");
}

function solution() {
    /*Cette fonction récupère l'état CSS du div et le passe dans l'état inverse.*/
}