const burger = document.getElementById('burger');

const showMenu = () => {
    const $menu = document.getElementById('navbarContent')
    burger.classList.toggle('is-active');
    $menu.classList.toggle('is-active');
}

burger.addEventListener('click', showMenu);