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
  //x.style.background="rgba(145,177,204)"; x.style.color="rgba(255,255,255,1)"; 
  x.style.borderImage="linear-gradient(to top right, #ae8625 0%, #f6edab 20%, #c1ad52 70%, #f3c57a 100%) 30";
}

function bubbledown(x) {
  //x.style.background="rgba(255,255,255,1)"; x.style.color="rgba(0,0,0,1)";
  x.style.borderImage="linear-gradient(to top right, #FFFFFF 0%, #FFFFFF 100%) 30";
}  
  
function makebig(x) {
 x.style.width="4.7vw"; 
}

function makelittle(x) {
   x.style.width="4.5vw"; 
}
