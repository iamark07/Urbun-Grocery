// menu bar slider functionality
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("!left-0");
  menuBtn.innerHTML = mobileMenu.classList.contains("!left-0")
    ? '<i class="ri-close-line text-[#1ea51e]"></i>'
    : '<i class="ri-menu-line text-[#1ea51e]"></i>';
});

function close_menu() {
  mobileMenu.classList.remove("!left-0");
  menuBtn.innerHTML = mobileMenu.classList.contains("!left-0")
    ? '<i class="ri-close-line text-[#1ea51e]"></i>'
    : '<i class="ri-menu-line text-[#1ea51e]"></i>';
}

// franchise form validations

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("successMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("successMessage").classList.add("hidden");
    document.getElementById("franchiseForm").reset();
  }, 5000);
}
