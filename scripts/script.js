"use-strict";

// window.addEventListener("beforeunload", () => {
//     window.scrollTo(0, 0);
// })

// const introBannerAnimation = (() => {
//     const introBannerElements = document.querySelectorAll(".intro-banner > *");
//     const navigationLinks = document.querySelectorAll(".nav-menu a");

//     const _disableNavigation = (e) => {
//         e.preventDefault();
//     }

//     // Disables the navigation links
//     const _disableNavLinks = () => {
//         navigationLinks.forEach(nav => {
//             nav.addEventListener("click", _disableNavigation)
//         })
//     }

//     // Enables the navigation links
//     const _enableNavLinks = () => {
//         navigationLinks.forEach(nav => {
//             nav.removeEventListener("click", _disableNavigation);
//         })
//     }

//     // This function animates the intro banner and creates a delay between the text elements showing
//     const _displayIntroBanner = (idx) => {
//         let delay;
//         idx === 0 ? delay=400 : delay=1500;  // Make the delay for the first animation shorter than the rest

//         // resursive
//         if (idx < introBannerElements.length) {
//             setTimeout(() => {
//                 introBannerElements[idx].style.opacity = "1";
//                 _displayIntroBanner(idx + 1);

//                 if (idx === (introBannerElements.length - 1)) {
//                     // Enable scrolling and navigation links after the last animation is finsihed
//                     document.body.style.overflow = "auto";
//                     _enableNavLinks();
//                 }
//             }, delay);
//         }
//     }

//     // Make website unscrollable while animation is playing
//     document.body.style.overflow = "hidden";
//     _disableNavLinks();
//     _displayIntroBanner(0);

// })();

// Scroll to About Me section if clicked
const navDownBtn = document.querySelector(".nav-down-btn");
navDownBtn.addEventListener("click", () => {
    window.scrollTo();
})

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

    // Activate and display the project container
    const _activateProject = (e, project) => {
        if (!_active(e)) {
            _setActive(e);
            project.style.display = "flex";
        }
    }
    
    let previousBtnIdx = 0;  // Initial position of the projects container 
    const _swoopDirection = (e) => {
        const selectedBtn = e.target;

        // Determine the index of the selected project selector
        const selectedBtnIdx = Array.from(projectSelectorBtns).findIndex(btn => btn === selectedBtn);
        // Select the corresponding project container
        const selectedProjectContainer = projectContainers[selectedBtnIdx];

        // Remove the swoop direction state classes
        projectContainers.forEach(project => {
            project.classList.remove("swoop-right", "swoop-left");
        })

        // If the selected project selector idx is greater than the previously selected project, 
        // make the project container swoop in from the right.
        // Else, make it swoop from the left.
        selectedBtnIdx > previousBtnIdx ? 
            selectedProjectContainer.classList.add("swoop-right") : 
            selectedProjectContainer.classList.add("swoop-left");

        previousBtnIdx = selectedBtnIdx;
    }

    htmlCssBtn.addEventListener("click", (e) => {
        _swoopDirection(e);
        _activateProject(e, htmlCssProjects);
    })

    javascriptBtn.addEventListener("click", (e) => {
        _swoopDirection(e);
        _activateProject(e, javascriptProjects);
    })

    wordpressBtn.addEventListener("click", (e) => {
        _swoopDirection(e);
        _activateProject(e, wordpressProjects);
    })

    onlinestoreBtn.addEventListener("click", (e) => {
        _swoopDirection(e);
        _activateProject(e, onlineStoresProjects);
    })

})();




// Control the random selection of musical note SVGs and their colours
const musicNoteConfetti = (() => {
    const _musicalNoteOptions = {
        quarterNote: '<svg id="quarter-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 102.31 299.11">\
                            <title></title>\
                            <path id="quarter-note-2" data-name="quarter-note" class="cls-1" d="m17.32,295.23c5.18,2.33,11.91,3.83,20.63,3.88,39.78-.44,62.52-32,64.37-52.67V0h-10v220.96s-11.63-8.74-27.41-8.67c-15.78.07-60.89,10.59-64.85,54.26,0,0-1.93,20.04,17.26,28.68"/>\
                        </svg>',

        dottedQuarterNote: '<svg id="dotted-quarter-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 129.62 321.93">\
                                <title></title>\
                                <g id="dotted-quarter-note-2" data-name="dotted-quarter-note">\
                                <path class="cls-1" d="m91.71,269.57V0h-7.09v250.17s-8.63-12.81-35.37-8.3S4.14,270.91,1.02,284.83s0,31.56,21.48,36.3c27.15,5.11,66.48-14.44,69.2-51.56Z"/>\
                                <circle class="cls-1" cx="119.99" cy="286.46" r="9.63"/>\
                                </g>\
                            </svg>',

        halfNote: '<svg id="half-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 114.71 314.01">\
                        <title></title>\
                        <path id="half-note-2" data-name="half-note" class="cls-1" d="m114.69,261.52V0h-13.37v242.37s-7.76-7.33-28.43-6.83C52.22,236.04,1.39,248.48.06,285.81c0,0-4,34.22,54.52,27.26,54.96-8.89,60.59-42.07,60.11-51.56Zm-16.04,1.41c-16.81,28.22-82.15,52.22-87.48,30.96-5.48-18.89,57.33-49.85,81.41-45.41,11.93,3.26,6.07,14.44,6.07,14.44Z"/>\
                    </svg>',

        wholeNote: '<svg id="whole-note" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 377.45 274.51">\
                        <title></title>\
                        <path id="whole-note-2" data-name="whole-note" class="cls-1" d="m354.67,71.16s-23.78-32.89-73.56-53.11c0,0-36.44-17.78-102.52-17.93,0,0-76.22-4.37-132.81,39.19C0,73.16.45,112.27,0,131.6c0,0-.89,39.11,26,73.33,26.89,34.22,86.85,71.44,176.72,69.5,89.87-1.94,128.61-37.94,154.83-72.39s27.78-89.78-2.89-130.89Zm-100,158.22c-26,39.11-76.89,22.44-76.89,22.44-51.11-19.33-65.7-90.89-65.7-90.89,0,0-8.22-32.74-5.56-72.15,5.04-41.48,24.44-70.81,66.67-69.41s61.04,31.11,77.26,63.33c16.22,32.22,30.22,107.56,4.22,146.67Z"/>\
                    </svg>',

        eighthNote: '<svg id="eighth-note" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 188.13 284.83">\
                        <title></title>\
                        <path id="eighth-note-2" data-name="eighth-note" class="cls-1" d="m162.75,186.09h5.61c39.33-64.44,9-101.67,2-111.33s-25.89-25.22-34.22-32-15.67-15.67-15.67-15.67C110.14,14.31,110.57,0,110.57,0l-18.07.02.19,205.82s-7.49-5.33-25.15-5.43-35.1,7.81-41.99,12.7S-3.88,234.81.58,257.47c4.46,22.66,26.25,25.87,36.25,27.08,19.15,2.43,71.43-10.73,73.84-50.33l-.15-166.8s53.85-2.45,63.85,51.77c0,0,7.22,24.67-11.61,66.89Z"/>\
                    </svg>',

        doubleEighthNote: '<svg id="double-eighth-note" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 351.11 388.97">\
                                <title></title>\
                                <path id="double-eighth-note-2" data-name="double-eighth-note" class="cls-1" d="m351.11,266V0L110.19,52.72v241.13s-11.67-8.3-34.33-7.41S.59,307.63,0,353.7c0,0-.74,35.85,47.56,35.26,36.74-.52,78.52-28.74,78.89-69.78V109.19l208.44-45.78v177.11s-11.48-8.15-29.78-7.78c0,0-54.15-1.19-77.26,48.48,0,0-16.67,37.44,23.11,51,42.67,11.56,99.19-16.22,100.15-66.22Z"/>\
                            </svg>',

        sixteenthNote: '<svg id="sixteenth-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 217.56 401.8">\
                            <title></title>\
                            <path id="sixteenth-note-2" data-name="sixteenth-note" class="cls-1" d="m114.51,166.37v173.81c-.59,5.19-1.72,17.93-19.28,36.48s-51.89,27.33-67.33,24.67S.45,386.07.16,374.67s-1.63-21.04,14.22-41.78,42.3-31.72,62.07-31.56,28.67,7.41,28.67,7.41V0h11.33s2.67,22.96,17.63,36.44,29.93,26.07,49.04,48.59,26.96,51.26,31.11,81.48v35.7h-8.59v-26.96s-6.22-42.81-34.81-69.93c0,0-25.48-23.26-51.11-26.96l-2.81.3s-.15,25.48,35.11,62.52,48.44,48.37,62,85.04c0,0,14.44,41.78-14.89,93.33,0,0-7.78.67-9.11-5.33,0,0,16.89-28.89,15.33-56.89s-5.33-38.96-24.89-56.59c0,0-30.11-30.96-65.94-34.37Z"/>\
                        </svg>',

        quarterRestNote: '<svg id="quarter-rest-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 116 318.23">\
                            <title></title>\
                            <path id="quarter-rest-note-2" data-name="quarter-rest-note" class="cls-1" d="m40.06,0s23.91,17.94,60.39,64.94c0,0,6.7,8.48,8.93,19.44.74,13.04-18.37,27.7-26.37,37.63,0,0-11,16.37-14,25.81s-3.44,22.33,2.89,36.11,12.22,24.78,23.22,40.78,20.89,32.22,20.89,32.22c0,0-9.33-2.22-15.33-3.33s-40.04-5.37-52.48,10.04c-12.44,15.41-10.3,30.67-2.44,43.04,0,0,7.7,10.22,8.67,11.48s-28.74-15.33-35.63-22S0,278.83,0,257.83s9.52-37.44,58.56-40.11l-15.85-26.22s-16.89-23.85-21.33-30.81-14.07-22.81-1.33-42.96c0,0,5.33-9.04,24.15-33.63,0,0,12-18.07,10.37-36.44-.44-18.52-11.07-37.37-14.5-47.65Z"/>\
                        </svg>',

        trebleClef: '<svg id="treble-clef" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 194.54 470.27">\
                        <title></title>\
                        <path id="treble-clef-2" data-name="treble-clef" class="cls-1" d="m191.7,269.52c-22.74-52.59-78.81-44.44-78.81-44.44l-10.67-45.19c1.63-1.63,8.74-6.37,20.3-18.22,11.56-11.85,19.41-25.78,19.41-25.78,18.37-36.44,14.52-70.52,3.41-104.37C134.22-2.33,118.56.04,118.56.04c-19.44,3.04-36.78,27.85-41.22,62.3-7.33,38.89,6.22,84.96,6.22,84.96-17.93,14.52-52,41.19-70.07,70.52-18.07,29.33-24.15,78.74,21.78,119.26,47.11,38.37,99.56,19.56,99.56,19.56,0,0,6.81,27.41,9.93,39.41,3.11,12,2.81,20.74,2.81,20.74-1.78,37.48-30.22,42.44-49.22,43-19,.56-24.22-11.56-24.22-11.56,17.11,3.22,24.44-6.44,24.44-6.44,16.44-17.33,4.56-48.44-26.11-46.56-30.67,1.89-29.67,30.44-29.67,30.44.56,37.67,44.22,45.33,58,44.56,13.78-.78,27.33-.33,44.89-17.56s10-49.56,10-49.56l-11.67-49.89c68-25.63,47.7-83.7,47.7-83.7ZM93.33,72.18c10.07-27.41,25.19-31.26,32.44-31.26s16.3,4.89,16.44,15.85c.15,10.96.3,20.89-14.67,43.41,0,0-7.7,14.7-34.96,38.37,0,0-9.33-38.96.74-66.37Zm-14.96,275.56c-58.7-18.74-61.04-55.56-49.04-88.44,10.22-32.59,65.44-72.96,65.44-72.96l10.33,41c-9.44.89-46.89,20.11-44.22,56.11,2.67,36,34.07,45.19,36.89,45.63s8.3.44,7.85-3.26c-.44-3.7-4.89-5.04-4.89-5.04-15.56-2.52-28.15-24.89-17.33-41.78,10.81-16.89,29.19-19.41,29.19-19.41l20.15,88.89c-27.56,7.85-54.37-.74-54.37-.74Zm62.81-2.81l-20.74-86.81c26.22-1.78,50.22,14.96,51.11,44,.15,29.93-30.37,42.81-30.37,42.81Z"/>\
                    </svg>',

        bassClef: '<svg id="bass-clef" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 399.78 461.27">\
                        <title></title>\
                        <g id="bass-clef-2" data-name="bass-clef">\
                        <path class="cls-1" d="m30.45,97.12s11.74-45.74,58-65.22,105.89.56,128.44,63.28c0,0,18.41,49.09-1.52,118.28s-80.81,138.37-112.3,167.93-66.22,55.63-99.04,68.52c0,0-8.04,5.33,7.63,10.44,0,0,20.67,8.44,86.78-25.67s121.89-95.96,142.78-124.44,47.56-73.22,51.33-111.22,1.19-73.85-5.85-96.59-20.37-59.04-71.26-86.22S86.78-4.32,42.34,39.01c0,0-44.89,35.78-42.22,99.56s55.78,59.78,55.78,59.78c0,0,48.44.22,52.22-53.33-2.44-53.78-55.11-61.11-77.67-47.89Z"/>\
                        <circle class="cls-1" cx="371" cy="75.79" r="28.78"/>\
                        <circle class="cls-1" cx="371" cy="213.68" r="28.78"/>\
                        </g>\
                    </svg>',
    }

    // Randomly select from the 2 colours
    const _selectColour = () => {
        const colours = ["#CD2E3A", "#0047A0"] // Korean flag red and blue hex codes
        return colours[Math.floor(Math.random() * colours.length)];
    }

    // Randomly select from the musical note options
    const _selectRandomNote = () => {
        const keys = Object.keys(_musicalNoteOptions);
        return _musicalNoteOptions[keys[Math.floor(Math.random() * keys.length)]];
    }

    // select a random musical note and random colour
    const _changeMusicalNotes = (e) => {
        const randomMusicNote = _selectRandomNote();
        const colour = _selectColour();
        e.target.innerHTML = randomMusicNote;
        e.target.style.fill = colour;
    }

    // Every animation iteration, a new set of musical notes with random colours are randomly selected
    const musicalNotesContainer = document.querySelectorAll(".musical-note");
    musicalNotesContainer.forEach(container => {
        container.addEventListener("animationiteration", _changeMusicalNotes);
    })

})();