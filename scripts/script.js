window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
})

const introBannerAnimation = (() => {
    const introBannerElements = document.querySelectorAll(".intro-banner > *");
    const navigationLinks = document.querySelectorAll(".header-menu a");

    // Disables the navigation links
    const _disableNavLinks = () => {
        const _disableNavigation = (e) => {
            e.preventDefault();
        }

        navigationLinks.forEach(nav => {
            nav.addEventListener("click", _disableNavigation)
        })
    }

    // Enables the navigation links
    const _enableNavLinks = () => {
        navigationLinks.forEach(nav => {
            nav.removeEventListener("click", _disableNavLinks);
        })
    }

    // This function animates the intro banner and creates a delay between the text elements showing
    const _displayIntroBanner = (idx) => {
        let delay;
        idx === 0 ? delay=1000 : delay=2000;  // Make the delay for the first animation shorter than the rest

        // resursive
        if (idx < introBannerElements.length) {
            setTimeout(() => {
                introBannerElements[idx].style.opacity = "1";
                _displayIntroBanner(idx + 1);

                if (idx === introBannerElements.length-1) {
                    // Enable scrolling and navigation links after the last animation is finsihed
                    document.body.style.overflow = "auto";
                    _enableNavLinks();
                }
            }, delay);
        }
    }

    // Make website unscrollable while animation is playing
    document.body.style.overflow = "hidden";
    _disableNavLinks();
    _displayIntroBanner(0);
})();


const projectSelection = (() => {
    const htmlCssBtn = document.getElementById("html-css");
    const javascriptBtn = document.getElementById("javascript");
    const wordpressBtn = document.getElementById("wordpress");
    const onlinestoreBtn = document.getElementById("online-store");

    const projectSelectorBtns = document.querySelectorAll(".project-selector-btn");

    const projectContainers = document.querySelectorAll(".projects-container");
    const htmlCssProjects = document.querySelector(".html-css-projects");
    const javascriptProjects = document.querySelector(".javascript-projects");
    const wordpressProjects = document.querySelector(".wordpress-projects");
    const onlineStoresProjects = document.querySelector(".online-stores");
    
    // Checks if the project selection is active
    const _active = (e) => {
        return e.target.classList.contains("active");
    }

    // Sets the selected project to active mode (display mode)
    const _setActive = (e) => {
        projectSelectorBtns.forEach(button => {
            button.classList.remove("active");
        })

        projectContainers.forEach(container => {
            container.style.display = "none";
        })

        e.target.classList.add("active");
    }

    const _activateProject = (e, project) => {
        if (!_active(e)) {
            _setActive(e);
            project.style.display = "flex";
        }
    }

    htmlCssBtn.addEventListener("click", (e) => {
        _activateProject(e, htmlCssProjects);
    })

    javascriptBtn.addEventListener("click", (e) => {
        _activateProject(e, javascriptProjects);
    })

    wordpressBtn.addEventListener("click", (e) => {
       _activateProject(e, wordpressProjects);
    })

    onlinestoreBtn.addEventListener("click", (e) => {
       _activateProject(e, onlineStoresProjects);
    })
})();


const navDownBtn = document.querySelector(".nav-down-btn");
navDownBtn.addEventListener("click", () => {
    window.scrollTo();
})