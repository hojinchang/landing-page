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
    const htmlCssProjects = document.getElementById("html-css");
    const javascriptProjects = document.getElementById("javascript");
    const wordpressProjects = document.getElementById("wordpress");
    const onlinestoreProjects = document.getElementById("online-store");

    const projectSelectorBtns = document.querySelectorAll(".project-selector-btn");
    

    const active = (e) => {
        return e.target.classList.contains("active");
    }

    const setActive = (e) => {
        projectSelectorBtns.forEach(button => {
            button.classList.remove("active");
        })

        e.target.classList.add("active");
    }

    htmlCssProjects.addEventListener("click", (e) => {
        if (!active(e)) {
            setActive(e);
        }
    })

    javascriptProjects.addEventListener("click", (e) => {
        if(!active(e)) {
            setActive(e);
        }
    })

    wordpressProjects.addEventListener("click", (e) => {
        if(!active(e)) {
            setActive(e);
        }
    })

    onlinestoreProjects.addEventListener("click", (e) => {
        if(!active(e)) {
            setActive(e);
        }
    })


})();