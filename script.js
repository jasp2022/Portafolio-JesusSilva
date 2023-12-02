function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  function scrollToSection(contact) {
    var section = document.getElementById(contact);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}