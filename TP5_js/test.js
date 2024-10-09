function test_age(){
    let age= prompt('Quel est votre âge ?');
    if (age<18){
        document.write('Attention : accès refusé, vous êtes mineur.')
        document.body.style.backgroundColor = 'red';
    }
    else {
        document.write('Accès autorisé, vous êtes majeur.')
        document.body.style.backgroundColor = 'green';
    }
}

function test_couleur(){
    let couleur = prompt("Donnez une couleur");
    if (couleur=='rouge'){
        document.body.style.backgroundColor = 'red';
    }
    else if (couleur=='bleu'){
        document.body.style.backgroundColor = 'blue';
    }
    else if (couleur=='vert'){
        document.body.style.backgroundColor = 'green';
    }
    else {
        alert('Couleur non comprise');
        test_couleur()
    }
}

function affichage(){
    let prenom = prompt('Saisir votre prénom');
    let nom = prompt('Saisir votre nom');
    document.write("<div style='border:5px solid blue; width:400px; height:300px; margin: auto; font-size: 2em'>");
    document.write("bonjour "+ prenom + "  "+nom);
    document.write("</div>");
}

function calcul_moyenne(){
    var n1 = prompt("Saisir note 1");
    var n2 = prompt("Saisir note 2");
    var n3 = prompt("Saisir note 3");

    var somme = Number(n1) + Number(n2) + Number(n3);
    
    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");
    
    if (moyenne<10) {
        document.write('Non admis');
    
    
    }

    else if (moyenne<12) {
        document.write('Admis sans mention');
    }

    else if (moyenne<14) {
        document.write('Admis mention passable');
    }

    else {
        document.write('Admis mention bien');

    }
}