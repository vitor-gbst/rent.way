window.addEventListener("scroll", function() {
    let nav = document.querySelector ('#nav');
    let logo = document.querySelector ('#logo');

    let logopreta = "../imagens/rent_way_preto.png";
    let logobranca = "../imagens/rent.way_branco.png";


    /*Talvez coloque um icon de avatar
    let avatarBranco = "../imagens/user(1).png"
    let avatarPreto = "../imagens/user(2).png"
    */

    if (window.scrollY > 50) {
        nav.classList.add('roll-nav');
        logo.src = logopreta;
    } else {
        nav.classList.remove('roll-nav');
        logo.src = logobranca;
    }
});