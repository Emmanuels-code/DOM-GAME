// Get the character and block elements
const character = document.getElementById('character');
const block = document.getElementById('block');

// Initialize score and counter
let score = 0;
let counter = 0;

// Function to make the character jump
function jump() {
  if (character.classList.contains('animate')) return;
  character.classList.add('animate');
  setTimeout(() => {
    character.classList.remove('animate');
  }, 300);
}

// Event listener for jump
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') { // Space bar to jump
    jump();
  }
});

// Check for collision and update score
setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = 'none';
    alert(`Game Over. Score: ${score}`);
    score = 0;
    block.style.animation = 'block 1s infinite linear';
  } else {
    counter++;
    score = Math.floor(counter / 100);
    document.getElementById('scoreSpan').innerHTML = score;
  }
}, 10);
