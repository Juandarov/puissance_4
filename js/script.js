function genGrille() {
    var grille = document.getElementById('grille');

    var head = document.createElement("tr");
    grille.appendChild(head);

    for (var i = 0; i < 7; i++) {
        var th = document.createElement("th");
        head.appendChild(th);

        var button = document.createElement("button");
        button.addEventListener("click", function() {jouer(i)});
        th.appendChild(button);
    }

    for (var i = 0; i < 6; i++) {
        var ligne = document.createElement("tr");
        grille.appendChild(ligne);

        for (var j = 0; j < 7; j++) {
            var box = document.createElement("td");
            ligne.appendChild(box);
        }
    }
}

var tableau = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

function jouer(numCol) {

    var i = 0;
    while (i < 6 && tableau[i][numCol] == 0) {
        i++;
    }
    tableau[i-1][numCol-1] = 1;

    printTab();

    update();
}

function update() {
    var lignes = document.getElementsByTagName("tr");
    console.log("lignes : " + lignes.length);
    for (var i = 1; i < lignes.length; i++) {
        var boxes = lignes[i].getElementsByTagName("th");

        for (var j = 0; j < boxes.length; j++) {
            if (tableau[i][j] == 1) {
                var jeton = document.createElement("div");
                jeton.className = "pion";
                boxes[j].appendChild(jeton);
            }
        }
    }
}

function printTab() {
    for (var i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}
