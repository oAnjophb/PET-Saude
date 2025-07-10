document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.getElementById("nav-list");

  if (menuIcon && navList) {
    menuIcon.addEventListener("click", function(e) {
      navList.classList.toggle("open");
      // Atualiza aria-expanded para acessibilidade
      const expanded = menuIcon.getAttribute("aria-expanded") === "true";
      menuIcon.setAttribute("aria-expanded", !expanded);
      e.stopPropagation();
    });

    // Fecha o menu se clicar fora
    document.addEventListener("click", function(e) {
      if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
        navList.classList.remove("open");
        menuIcon.setAttribute("aria-expanded", "false");
      }
    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        navList.classList.remove("open");
        menuIcon.setAttribute("aria-expanded", "false");
      }
    });
  }
});