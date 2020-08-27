var watercolorGal=document.getElementById("watercolor-gallery");
var digitalGal=document.getElementById("digital-gallery");
var otherGal=document.getElementById("other-gallery");

var watercolorBtn=document.getElementById("watercolor-btn");
var digitalBtn=document.getElementById("digital-btn");
var otherBtn=document.getElementById("other-btn");

/* Navbar JS */
function expandHamburger() {
  var navLinks = document.getElementById("top-nav");
  var navbar = document.getElementById("navbar");
  if (navLinks.className === "nav-links") {
    navLinks.className += " responsive";
    navbar.className = "responsive";
  } else {
    navLinks.className = "nav-links";
    navbar.className = "";
  }
}

/* Artwork JS */
function showWatercolor() {
  watercolorBtn.className = "active-button";
  digitalBtn.className = "";
  otherBtn.className = "";

  watercolorGal.className = "gallery active-gallery";
  digitalGal.className = "gallery";
  otherGal.className = "gallery";
}
function showDigital() {
  watercolorBtn.className = "";
  digitalBtn.className = "active-button";
  otherBtn.className = "";

  watercolorGal.className = "gallery";
  digitalGal.className = "gallery active-gallery";
  otherGal.className = "gallery";
}
function showOther() {
  watercolorBtn.className = "";
  digitalBtn.className = "";
  otherBtn.className = "active-button";

  watercolorGal.className = "gallery";
  digitalGal.className = "gallery";
  otherGal.className = "gallery active-gallery";
}

try {
  window.onload=showWatercolor();
}
catch {
  console.log("Can't show watercolor if not artwork page.");
}

/* Modal JS */
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("galPic");
var modalImg = document.getElementById("modalImg");

for(var i=0;i< img.length;i++) {
    img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
}

try {
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
}
catch {
  console.log("Modal is only on artwork page.");
}