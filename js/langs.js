import translationsPl from '../langs/polish.js';
import translationsEn from '../langs/english.js';

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const labelPL = document.getElementById("label-pl");
    const labelEN = document.getElementById("label-en");
    const langSlider = document.getElementById("lang-slider");
    let currentLang = localStorage.getItem("lang") == 'en' ? translationsEn : translationsPl;

    function updateLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            if (lang[key]) {
                el.textContent = lang[key];
            }
        });

        if (lang === translationsPl) {
            labelPL.classList.replace("text-gray-500", "text-blue-1900");
            labelEN.classList.replace("text-blue-1900", "text-gray-500");
            langSlider.style.background = "linear-gradient(to bottom, white 50%, red 50%)";
            slider.style.transform = "translateX(0)";
            slider.style.backgroundColor = "#4299e1";
        } else {
            labelPL.classList.replace("text-blue-1900", "text-gray-500");
            labelEN.classList.replace("text-gray-500", "text-blue-1900");
            langSlider.style.background = null;
            langSlider.style.backgroundColor = "#4299e1";
            slider.style.transform = "translateX(28px)";
            slider.style.backgroundColor = "white";
        }

        langToggle.checked = lang === translationsEn;
        localStorage.setItem("lang", lang === translationsEn ? 'en' : 'pl');
    }

    langToggle.addEventListener("change", function () {
        currentLang = langToggle.checked ? translationsEn : translationsPl;
        updateLanguage(currentLang);
    });

    updateLanguage(currentLang);
});