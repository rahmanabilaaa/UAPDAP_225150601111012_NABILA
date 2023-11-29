// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Home Section Start
let aboutButton = document.getElementById("aboutButton");

aboutButton.onclick = function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// About Section Start
let downloadCVButton = document.getElementById("downloadCVButton");

downloadCVButton.onclick = function() {
  console.log("Download CV button clicked");
}