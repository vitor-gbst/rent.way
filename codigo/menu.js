window.addEventListener("scroll", function() {
    let nav = document.querySelector ('#nav');
    let logo = document.querySelector ('#logo');

    let logopreta = "../imagens/rent_way_preto.png";
    let logobranca = "../imagens/rent.way_branco.png";

    if (window.scrollY > 100) {
        nav.classList.add('roll-nav');
        logo.src = logopreta;
    } else {
        nav.classList.remove('roll-nav');
        logo.src = logobranca;
    }
});