// main_script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Элементы страницы
    const textLine1 = document.querySelector('.line-1');
    const textLine2 = document.querySelector('.line-2');
    const textLine3 = document.querySelector('.line-3');
    const museumTitle1 = document.querySelector('.museum-title1');
    const museumTitle2 = document.querySelector('.museum-title2');
    const menuButton = document.querySelector('.museum-button');
    const langRuBtn = document.querySelector('.language-switcher1');
    const langEnBtn = document.querySelector('.language-switcher2');
    
    // Тексты на русском
    const ruTexts = {
        textLine1: 'Онлайн погружение',
        textLine2: 'в историю',
        textLine3: 'музыки',
        museumTitle1: 'Музей',
        museumTitle2: 'Музыки',
        menuButton: 'МЕНЮ',
        langRu: 'RUS/',
        langEn: 'EN'
    };
    
    // Тексты на английском (оригинальные)
    const enTexts = {
        textLine1: 'Online immersion',
        textLine2: 'in the history of',
        textLine3: 'music',
        museumTitle1: 'Music',
        museumTitle2: 'Museum',
        menuButton: 'MENU',
        langRu: 'RUS/',
        langEn: 'EN'
    };
    
    // Функция перевода на русский
    function translateToRussian() {
        if (textLine1) textLine1.textContent = ruTexts.textLine1;
        if (textLine2) textLine2.textContent = ruTexts.textLine2;
        if (textLine3) textLine3.textContent = ruTexts.textLine3;
        if (museumTitle1) museumTitle1.textContent = ruTexts.museumTitle1;
        if (museumTitle2) museumTitle2.textContent = ruTexts.museumTitle2;
        if (menuButton) menuButton.textContent = ruTexts.menuButton;
        if (langRuBtn) langRuBtn.textContent = ruTexts.langRu;
        if (langEnBtn) langEnBtn.textContent = ruTexts.langEn;
    }
    
    // Функция перевода на английский
    function translateToEnglish() {
        if (textLine1) textLine1.textContent = enTexts.textLine1;
        if (textLine2) textLine2.textContent = enTexts.textLine2;
        if (textLine3) textLine3.textContent = enTexts.textLine3;
        if (museumTitle1) museumTitle1.textContent = enTexts.museumTitle1;
        if (museumTitle2) museumTitle2.textContent = enTexts.museumTitle2;
        if (menuButton) menuButton.textContent = enTexts.menuButton;
        if (langRuBtn) langRuBtn.textContent = enTexts.langRu;
        if (langEnBtn) langEnBtn.textContent = enTexts.langEn;
    }
    
    // Обработчики кликов
    if (langRuBtn) {
        langRuBtn.addEventListener('click', function() {
            translateToRussian();
        });
    }
    
    if (langEnBtn) {
        langEnBtn.addEventListener('click', function() {
            translateToEnglish();
        });
    }
    
});