const Menu = '.menu';
const divMenu = document.querySelector(Menu);
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', () => {
    setTimeout( () => {
        if (!divMenu.classList.contains('show')) {
            divMenu.classList.add('show');
            document.body.classList.add('menu-visible');
        }
    }, 200);
});

// close menu by clicking outside the menu
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(Menu);

    if(!isClosest && divMenu.classList.contains('show')){
        divMenu.classList.remove('show');
        document.body.classList.remove('menu-visible');
    }
})