const buttonContainerA = document.querySelector('.header-div-container-A');
const buttonContainerB = document.querySelector('.header-div-container-B');
const buttonContainerC = document.querySelector('.header-div-container-C');
const buttonContainerD = document.querySelector('.header-div-container-D');

const containerA = document.querySelector('.container-A');
const containerB = document.querySelector('.container-B');
const containerC = document.querySelector('.container-C');
const containerD = document.querySelector('.container-D');

const container = document.querySelector('.container-display');

buttonContainerA.onclick = function() {
    container.innerHTML = containerA;
}