const SpeechRecognition = window.SpeechRegonition ||
window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


const langTypesSpeech = {
    "Arabic":"ar-SA",
    "Bangla":"bn-BD",
    "Chinese (Simplified)":"zh-CN",
    "Chinese (Traditional)":"zh-TW",
    "Czech":"cs-CZ",
    "Danish":"da-DK",
    "Dutch":"nl-NL",
    "German":"de-DE",
    "Greek":"el-GR",
    "English":"en-US",
    "Finnish":"fi-FI",
    "French":"fr-FR",
    "Hebrew":"he-IL",
    "Hindi":"hi-IN",
    "Hungarian":"hu-HU",
    "Indonesian":"id-ID",
    "Italian":"it-IT",
    "Japanese":"ja-JP",
    "Korean":"ko-KR",
    "Norwegian":"no-NO",
    "Polish":"pl-PL",
    "Portugese":"pt-PT",
    "Romanian":"ro-RO",
    "Slovak":"sk-SK",
    "Spanish":"es-ES",
    "Swedish":"sv-SE",
    "Tamil":"ta-IN",
    "Thai":"th-TH",
    "Turkish":"tr-TR",
}

recognition.lang = "en-US";
recognition.interimResults = false;
recognition.continuous = true;


window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('mic-btn').addEventListener('click', () => {
        recognition.start();
    });

    let textContainer = document.getElementById('text-container');
    textContainer.innerHTML = "";
    
    recognition.addEventListener('result', (e) => {
        let last = e.results.length - 1;
        let text = e.results[last][0].transcript;
    
        console.log('Confidence: ' + e.results[0][0].confidence);
        let textContainer = document.getElementById('text-container');
        textContainer.innerHTML = text;
        
        document.getElementById('mute-btn').addEventListener('click', () => {
            recognition.abort();
            textContainer.innerHTML = "";
        });

        document.getElementById('lang-form').addEventListener('submit', e => {
            e.preventDefault();

            let dropdownVal = document.getElementById("lang-selection").value;
            recognition.lang = langTypesSpeech[dropdownVal];

            recognition.abort();
        });

    });
});


