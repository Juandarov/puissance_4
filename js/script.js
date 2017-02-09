var tableau = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

function update() {
    var lignes = document.getElementsByTagName("tr");

    for (var i = 1; i < lignes.length; i++) {
        var boxes = lignes[i].getElementsByTagName("td");

        for (var j = 0; j < boxes.length; j++) {
            if (tableau[i-1][j] == 1 && boxes[j].innerHTML == '') {
                var jeton = document.createElement("div");
                jeton.className = "pion";
                boxes[j].appendChild(jeton);
                console.log(boxes[j]);
            }
        }
    }
}

function jouer(element) {
    var i = 1;
    while (i < 6 && tableau[i][element.id] == 0) {
        i++;
    }
    tableau[i-1][element.id] = 1;

    printTab();
    update();
}

function genGrille() {
    var grille = document.getElementById('grille');

    var head = document.createElement("tr");
    grille.appendChild(head);

    for (var i = 0; i < 7; i++) {
        var th = document.createElement("th");
        head.appendChild(th);

        var button = document.createElement("button");
        button.id = i;
        button.addEventListener("click", function() {
            jouer(this);
        });
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


// DEBUG

function printTab() {
    for (var i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}
