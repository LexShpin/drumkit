// vars
const keys = document.querySelectorAll(".key");

// Event Listeners
window.addEventListener("keydown", playAudio);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Functions
function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
