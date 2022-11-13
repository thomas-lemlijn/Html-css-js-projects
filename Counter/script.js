var counter = document.querySelector('#counter-input');
var valeur = 1;

function add() {
    valeur++;
    counter.innerHTML(valeur);

}

function remove() {
    valeur--;
    counter.innerHTML(valeur);
}