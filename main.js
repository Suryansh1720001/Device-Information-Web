const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const footerYear = document.querySelectorAll("[data-year]");

if (navToggle && navMenu) {
    const closeMenu = () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

footerYear.forEach((node) => {
    node.textContent = new Date().getFullYear();
});
