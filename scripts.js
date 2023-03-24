let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function bubbleup(x) {
  x.style.background-color="#91b1cc"; x.style.color="white";
}

function bubbledown(x) {
  x.style.background="rgba(255,255,255,1)"; x.style.color="black";
}
