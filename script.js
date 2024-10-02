function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}


window.onclick = function(event) {
    const popups = document.getElementsByClassName("popup");
    for (let i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            popups[i].style.display = "none";
        }
    }
}

