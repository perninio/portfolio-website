    window.onscroll = function () { changeNavbar() };
    var navbar = document.getElementById("sticky-navbar");
    var movedownbtn = document.getElementById("move-down-btn");
    function changeNavbar() {
      if (window.pageYOffset >= 150) {
        navbar.classList.add("navbar-bg-color")
      } else {
        navbar.classList.remove("navbar-bg-color");
      }
    }
    function toggleRollDown(element) {
      if (document.getElementById(element + '-desc').className == "content-description" || document.getElementById(element + '-desc').className == "flex-container") { document.getElementById(element + "-desc").className += " active"; }
      else {
        if (document.getElementById(element + '-desc').className == "flex-container active") {
          document.getElementById(element + '-desc').className = "flex-container";
        }
        else
          document.getElementById(element + "-desc").className = "content-description";
      }
    }