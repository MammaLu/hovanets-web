function toggleMenu() {
    const navbarList = document.querySelector('.navbar-list');
    const burgerMenuIcon = document.querySelector('.burger-menu img');
    const menuItems = document.querySelectorAll('.navbar-list ul li');

    navbarList.classList.toggle('active');
  
    if (navbarList.classList.contains('active')) {
      burgerMenuIcon.src = 'images/burger-open.svg';
      menuItems.forEach((item, index) => {
      item.style.animation = `slide-in 0.5s forwards ${index * 0.1}s`;
    });
    } else {
      burgerMenuIcon.src = 'images/burger-closed.svg';
      menuItems.forEach((item) => {
        item.style.animation = '';
    });
    }
  }