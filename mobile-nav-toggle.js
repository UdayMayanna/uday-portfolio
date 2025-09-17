  const menu = document.getElementById('mobile-menu-list');
  const toggleOn = document.getElementById('mobile-toggle-on');
  const toggleOff = document.getElementById('mobile-toggle-off');

  toggleOn.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.classList.add('menu-open'); 
  });

  toggleOff.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

