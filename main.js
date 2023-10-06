console.log("Script is running!");
function animateElements() {
  // Code to animate elements here
}

document.addEventListener('DOMContentLoaded', function() {
  animateElements();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const isInViewport = (elementTop, elementBottom, viewportTop, viewportBottom) => {
      return (elementTop <= viewportBottom) && (elementBottom >= viewportTop);
    };

    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    if (isInViewport(elementTop, elementBottom, viewportTop, viewportBottom)) {
      element.classList.add('fade-in-visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);

const sidebarMenu = document.querySelector('.sidebar-menu');
const sidebarToggleButton = document.querySelector('.sidebar-toggle-button');

sidebarToggleButton.addEventListener('click', () => {
  sidebarMenu.classList.toggle('expanded');
});

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form fields and display relevant error messages
  // ...

  // If form is valid, submit the form
  contactForm.submit();
});

function initialize() {
  // Initialization code here
}

document.addEventListener('DOMContentLoaded', initialize);