const themeButton = document.getElementById("toggle-theme");

// Check localStorage for saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme and save preference
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save theme to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
