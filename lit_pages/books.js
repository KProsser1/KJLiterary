draculaPreview.addEventListener("click", function() {
    draculaPopup.classList.add("show");
});
closePopup.addEventListener("click", function() {
    draculaPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == draculaPopup) {
        draculaPopup.classList.remove("show");
    }
});