const video = document.getElementById("headerVideo");
const muteButton = document.getElementById("muteButton");
let muteButtonTimeout;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleMute() {
  console.log("Mutebutton clicked");
  video.muted = !video.muted;

  muteButton.innerHTML = video.muted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
}

// Function to show mute button on mobile
function showMuteButton() {
  muteButton.classList.add("visible");

  // Clear any existing timeout
  clearTimeout(muteButtonTimeout);

  // Auto-hide button after 3 seconds
  muteButtonTimeout = setTimeout(() => {
    muteButton.classList.remove("visible");
  }, 3000);
}

if (isMobile) {
  video.controls = false; // Disable controls on mobile

  video.addEventListener("click", showMuteButton);

  // Prevent hiding the button when it's clicked
  muteButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent video click event
    toggleMute();
  });
} else {
  // Desktop functionality
  muteButton.addEventListener("click", toggleMute);
  video.addEventListener("click", togglePlayPause);
}
