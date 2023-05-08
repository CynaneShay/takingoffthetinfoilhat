
let mybutton = document.getElementById("myBtn");

filterSelection("fav")    

const menuIconContainer = document.querySelector(".nav-container .menu-icon-container");
const navContainer = document.querySelector(".nav-container");
    menuIconContainer.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    })


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
     x.style.fontWeight="bold"; 
    }

    function makelittle(x) {
       x.style.fontWeight="normal"; 
    }


    function carouselin(x) {
      x.querySelector('.fog').style.boxShadow= "0 0 0 200px rgba(255,255,255,.9) inset";
      x.querySelector('.fa-headphones').style.opacity= "1"; 
      x.querySelector('.podname').style.opacity= "1";
      x.querySelector('.podepisode').style.opacity= "1";
    }

    function carouselout(x) {
      x.querySelector('.fog').style.boxShadow= "none";
      x.querySelector('.fa-headphones').style.opacity= "0";
      x.querySelector('.podname').style.opacity= "0";
      x.querySelector('.podepisode').style.opacity= "0";
    }




function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("book");
  if (c == "all") c = "";
  // Add the "show" class (display:flex) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btns = document.getElementsByClassName("recbutton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("act");
    current[0].className = current[0].className.replace(" act", "");
    this.className += " act";
  });
}


let slider=tns({container: ".my-slider",
               "SlideBy": 1,
               "speed": 400,
               "nav": false,
               controlsContainer: "#controls",
               prevButton: ".previous",
               nextButton: ".next",
               responsive: {1600: {items: 4, gutter: 5},
                           1024: {items: 3, gutter: 5},
                           768: {items: 3, gutter: 5},
                           480: {items: 2, gutter: 5}}
               });
