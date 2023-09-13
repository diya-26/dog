
const circle4 = document.getElementById('circle44');
const circle5 = document.getElementById('circle55');
const circle6 = document.getElementById('circle66');
const button = document.getElementById('songbut');

function resetCircleBackgrounds() {
  // Reset the background color of all circles
  circle4.style.backgroundColor = 'black';
  circle5.style.backgroundColor = 'black';
  circle6.style.backgroundColor = 'black';
}

circle4.addEventListener('click', function() {
  resetCircleBackgrounds(); // Reset all circles' background color
  this.style.backgroundColor = 'pink'; // Change the background color of the clicked circle
  button.dataset.link = 'https://open.spotify.com/playlist/1N4ueha3obierShmwxbXD9?si=1441ce51b6764be9';
});

circle5.addEventListener('click', function() {
  resetCircleBackgrounds(); // Reset all circles' background color
  this.style.backgroundColor = 'pink'; // Change the background color of the clicked circle
  button.dataset.link = 'https://open.spotify.com/playlist/563kGJVKfWup3KW2v53E4i?si=5b9cdeedcff24f79';
});

circle6.addEventListener('click', function() {
  resetCircleBackgrounds(); // Reset all circles' background color
  this.style.backgroundColor = 'pink'; // Change the background color of the clicked circle
  button.dataset.link = 'https://open.spotify.com/playlist/1MnQr9ST6SiEBJ4WTRatxb?si=c9bbf794fb0a46e7';
});

button.addEventListener('click', function() {
  const link = button.getAttribute('data-link');
  if (link) {
    window.location.href = link;
  }
});
