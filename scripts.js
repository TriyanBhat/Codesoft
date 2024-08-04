document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 50, 
          behavior: 'smooth'
        });
      });
    });
  });
  
  window.addEventListener('load', function () {
    const greetingElement = document.querySelector('.intro-text h2');
    greetingElement.style.opacity = '1';
    greetingElement.style.transform = 'translateY(0)';
  });
  