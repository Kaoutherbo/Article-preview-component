
const rightDiv = document.querySelector('.right');
const shareDiv = document.querySelector('.share');
const triangle = document.querySelector('.triangle');

let shareVisible = false;

rightDiv.addEventListener('click', () => {
  shareVisible = !shareVisible;
  if (shareVisible) {
    shareDiv.style.display = 'flex';
    triangle.style.display = 'block';
  } else {
    shareDiv.style.display = 'none';
    triangle.style.display = 'none';
  }
});

// Close the share section when clicking outside of it
window.addEventListener('click', (event) => {
  if (!rightDiv.contains(event.target) && !shareDiv.contains(event.target)) {
    shareDiv.style.display = 'none';
    triangle.style.display = 'none';
    shareVisible = false;
  }
});

