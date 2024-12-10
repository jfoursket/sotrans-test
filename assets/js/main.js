const navItems = document.querySelectorAll(".nav-item");
const menu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger-menu");

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
});