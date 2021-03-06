//DECLARANDO VARIAVEIS
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

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

//Abrindo e fechando o modal de orçamento

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
}

//Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
}
)

//PORTFOLIO SLIDER

//Declarando variaveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinamicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

//Fazendo animação do slider onClick
