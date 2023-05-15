draculaPreview.addEventListener("click", function() {
    draculaPopup.classList.add("show");
});
closePopup.addEventListener("click", function(e) {
    e.preventDefault();
    draculaPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == draculaPopup) {
        draculaPopup.classList.remove("show");
    }
});

frankensteinPreview.addEventListener("click", function() {
    frankensteinPopup.classList.add("show");
});
closePopupF.addEventListener("click", function(e) {
    e.preventDefault();
    frankensteinPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == frankensteinPopup) {
        frankensteinPopup.classList.remove("show");
    }
});

godfatherPreview.addEventListener("click", function() {
    godfatherPopup.classList.add("show");
});
closePopupG.addEventListener("click", function(e) {
    e.preventDefault();
    godfatherPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == godfatherPopup) {
        godfatherPopup.classList.remove("show");
    }
});
/* Could also have the book preview popups be an href
to a separate HTML file, rather than inline. Just something
to keep in mind.*/