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


function goToNewPage() {
    var url = document.getElementById('list').value;
    if(url != 'none') {
        window.location = url;
    }
}