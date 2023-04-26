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

    function makebig(x) {
     x.style.fontWeight="bold"; 
    }

    function makelittle(x) {
       x.style.fontWeight="normal"; 
    }

    const menuIconContainer = document.querySelector(".nav-container .menu-icon-container")
    const navContainer = document.querySelector(".nav-container")
    menuIconContainer.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    })
