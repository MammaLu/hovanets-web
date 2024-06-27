function toggleMenu() {
    const navbarList = document.querySelector('.navbar-list');
    const burgerMenuIcon = document.querySelector('.burger-menu img');
    
    navbarList.classList.toggle('active');
  
    if (navbarList.classList.contains('active')) {
      burgerMenuIcon.src = 'images/burger-open.svg';
    } else {
      burgerMenuIcon.src = 'images/burger-closed.svg';
    }
  }