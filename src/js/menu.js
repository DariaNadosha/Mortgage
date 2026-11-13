document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".menu__close");
    const promo = document.querySelector(".promo");

    if (menu && hamburger && closeBtn) {
        hamburger.addEventListener("click", () => {
            menu.classList.add("menu--active");
            hamburger.classList.add("hamburger--hidden");
            if (promo) promo.classList.add("promo--overlay");
        });

        closeBtn.addEventListener("click", () => {
            menu.classList.remove("menu--active");
            hamburger.classList.remove("hamburger--hidden");
            if (promo) promo.classList.remove("promo--overlay");
        });

        document.addEventListener("click", (e) => {
            if (
                menu.classList.contains("menu--active") &&
                !menu.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                menu.classList.remove("menu--active");
                hamburger.classList.remove("hamburger--hidden");
                if (promo) promo.classList.remove("promo--overlay");
            }
        });
    }
});
