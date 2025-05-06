// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button'); // Targeting the first button
  const textToSpeak = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img'); // Smiling face image

  let voices = [];

  // Browser support check
  if (!('speechSynthesis' in window)) {
    alert('Speech synthesis is not supported in this browser.');
    return;
  }

  // Populate voices
  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; // Clear any previous options

    // Add a placeholder option
    let defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select Voice';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    // Add voices to dropdown
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  // Reload voices when avialable
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  // Button click
  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);

    const selectedOption = voiceSelect.selectedOptions[0];
    const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : null;

    if (selectedVoiceName) {
      utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    }

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png'; // Change to open mouth
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png'; // Normal face
    };

    synth.speak(utterance);
  });
}