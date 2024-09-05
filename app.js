    let speech = new SpeechSynthesisUtterance();
    let voices = [];
    let voiceElement = document.querySelector("#voiceSelect");
    
    
    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        
    
        voiceElement.innerHTML = '';
    
        
        voices.forEach((voice, i) => {
            let option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = i;
            voiceElement.appendChild(option);
        });
    
      
        if (voices.length > 0) {
            speech.voice = voices[0];
        }
    }
    
    
    window.speechSynthesis.onvoiceschanged = populateVoiceList;
    
  
    populateVoiceList();
    
    
    voiceElement.addEventListener("change", () => {
        speech.voice = voices[voiceElement.value];
    });
    
    function clickBtn() {
        speech.text = document.querySelector('#text').value;
        window.speechSynthesis.speak(speech);
    }
    