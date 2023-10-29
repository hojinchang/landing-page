const introBannerText = document.querySelectorAll(".intro-banner p");

// This function animates the intro banner and creates a delay between the text elements showing
function displayIntroBanner(idx) {
    let delay;
    idx === 0 ? delay=1000 : delay=2000;

    // resursive
    if (idx < introBannerText.length) {
        setTimeout(() => {
            introBannerText[idx].style.opacity = "1";
            // introBannerText[idx].style.scale = "1";
            displayIntroBanner(idx + 1);
        }, delay);
    }
}
displayIntroBanner(0);