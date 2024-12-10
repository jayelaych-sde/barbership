const video = document.getElementById("header__video");
const muteButton = document.getElementById("mute-button");
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
  video.muted = !video.muted;

  if (video.muted) {
    muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Muted icon
  } else {
    muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Unmuted icon
  }
}

if (isMobile) {
  const video = document.getElementById("myVideo");
  video.controls = false; // Disable controls on mobile
}

muteButton.addEventListener("click", toggleMute);
video.addEventListener("click", togglePlayPause);
