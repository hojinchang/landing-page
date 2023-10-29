const introBannerAnimation = (() => {
    const introBannerText = document.querySelectorAll(".intro-banner p");

    // This function animates the intro banner and creates a delay between the text elements showing
    const displayIntroBanner = (idx) => {
        let delay;
        idx === 0 ? delay=1000 : delay=2000;

        // resursive
        if (idx < introBannerText.length) {
            setTimeout(() => {
                introBannerText[idx].style.opacity = "1";
                displayIntroBanner(idx + 1);
            }, delay);
        }
    }
    displayIntroBanner(0);
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