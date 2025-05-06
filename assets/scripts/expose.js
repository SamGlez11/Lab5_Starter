// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornAudio.src = `assets/audio/${selected}.mp3`;
  });

  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100; // Convert 0–100 to 0–1 range
  
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", () => {
    hornAudio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}