var tableau = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var joueur = 1;

function update() {
    var lignes = document.getElementsByTagName("tr");

    for (var i = 1; i < lignes.length; i++) {
        var boxes = lignes[i].getElementsByTagName("td");

        for (var j = 0; j < boxes.length; j++) {
            if (tableau[i-1][j] == 1 && boxes[j].innerHTML == '') {
                var jeton = document.createElement("div");

                if (joueur == 1) {
                    jeton.className = "pionRed";
                } else {
                    jeton.className = "pionYellow";
                }


                boxes[j].appendChild(jeton);

                if (joueur == 1) {
                    joueur = 2;
                } else {
                    joueur = 1;
                }
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

function reset() {
    var tds = document.getElementsByTagName('td');
    for (var i=0; i<tds.length; i++) {
        tds[i].innerHTML = "";
    }
    tableau = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
}

// DEBUG

function printTab() {
    for (var i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}
