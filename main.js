var anime = require('animejs');

// Create a new anime object
var typingAnimation = anime({
  targets: 'h1',
  text: 'Data Scientist',
  duration: 2000,
  easing: 'easeInOutCubic'
});

// Start the animation
typingAnimation.play();