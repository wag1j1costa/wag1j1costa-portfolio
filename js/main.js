//DECLARANDO VARIAVEIS
var btnContact = document.querySelector('.jl-btn-contact');

//Page preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Ativar toggle do botão de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');

    this.classList.toggle('jl-change-icon');
});

