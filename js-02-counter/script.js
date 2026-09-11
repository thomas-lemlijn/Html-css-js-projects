const minus = document.querySelector('.container-minus');
const value = document.querySelector('.container-value');
const plus = document.querySelector('.container-plus');

let number = 1;

minus.onclick = function() {
    number--;
    value.innerHTML = number;
}
plus.onclick = function() {
    number++;
    value.innerHTML = number;
}