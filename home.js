var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideLayout");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideLayout");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 7000); // Change image every 2 seconds
}

Email.addEventListener("click", function() {
  popup.classList.add("show");
});
closePopup.addEventListener("click", function(e) {
  e.preventDefault();
  popup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == popup) {
      popup.classList.remove("show");
  }
});

function goToNewPage() {
    var url = document.getElementById('list').value;
    if(url != 'none') {
        window.location = url;
    }
}