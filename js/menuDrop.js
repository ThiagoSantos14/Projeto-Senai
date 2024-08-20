const navbar =  document.querySelector('.navbar');
const iconHamb =  document.querySelector('#iconHamb');
const iconClose =  document.querySelector('#iconClose');
const textHome =  document.querySelector('.text-central');

function exibir() {
    navbar.classList = 'displayNavOn';
    iconHamb.style.display = 'none';
    iconClose.style.display = 'inline';
    textHome.classList = 'displayTextCenterOn';
};

function ocultar() {
    navbar.classList = 'displayNavOff';
    iconHamb.style.display = 'inline';
    iconClose.style.display = 'none';
    textHome.classList = 'displayTextCenterOff';
};
 
