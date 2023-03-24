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
  x.style.background="rgba(145,177,204)"; x.style.color="rgba(255,255,255,1)";
}

function bubbledown(x) {
  x.style.background="rgba(255,255,255,1)"; x.style.color="rgba(0,0,0,1)";
}

function MakeBig(x) {
 x.style.font-size="4.2vw"; 
}

function MakeLittle(x) {
   x.style.font-size="4.0vw"; 
}
