function toggleDarkMode() {
  const darkStylesheet = document.getElementById("dark-stylesheet");
  const darkModeBtn = document.getElementById("darkModeSwitch");

  if (darkStylesheet.disabled) {
    console.log(darkStylesheet);
    darkModeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    darkModeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }

  darkStylesheet.disabled = !darkStylesheet.disabled;
}

// Code to add active class to anchor tag 
// Get the current page URL
var currentPage = window.location.href;

var menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
  // Check if the href attribute matches the current page URL
  if (link.href === currentPage) {
    link.classList.add("current");
  }
});
