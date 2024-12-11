const navItems = document.querySelectorAll(".nav-item");
const menu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger-menu");
const body = document.querySelector("body");
const mobItems = document.querySelectorAll(".mob-item");

navItems.forEach(item => {
    item.addEventListener("click", function () {
        const isOpen = this.classList.contains("open");
        navItems.forEach(i => i.classList.remove("open"));
        if (!isOpen) {
            this.classList.add("open");
        }
    });
});

burgerMenu.addEventListener("click", function () {
    menu.classList.toggle('menu-open');

    if (menu.classList.contains('menu-open')) {
        body.classList.add("overflow-hidden");
    } else {
        body.classList.remove("overflow-hidden");

    }
});

mobItems.forEach(link => {
    link.addEventListener("click", function () {
        menu.classList.remove("menu-open");
        body.classList.remove("overflow-hidden");
        // navItems.forEach(i => i.classList.remove("open"));
    })
})