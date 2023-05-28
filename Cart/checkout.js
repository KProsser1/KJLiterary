
function goToNewPage() {
    var url = document.getElementById('list').value;
    if(url != 'none') {
        window.location = url;
    }
}

function validateForm() {
    let x = document.forms["cartForm"]["fname"].value;
    if (x == "") {
        alert(fname + "must be filled out")
        return false;
    }
}