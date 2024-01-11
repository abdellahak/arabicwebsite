var navbar = document.getElementById('navcontainer')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};


function showlist() {
    var x = document.getElementById('listphone');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.document = "block";
    }
};

function showlink() {
    var x = document.getElementById("listphone");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}