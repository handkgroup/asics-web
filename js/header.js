"use strict"
        const burger = document.querySelector(".burger_menu");
        const offScreenMenu = document.querySelector(".off_screen-menu");

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        })

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            });
        });