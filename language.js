function changeLanguage(lang) {
    
    document.documentElement.lang = lang;
    
    localStorage.setItem('language', lang);
    
    updateContentByLanguage(lang);
}

function updateContentByLanguage(lang) {
    let langElement = document.querySelector('.lang');
    let settElement = document.querySelector('.sett');
    let titleElement = document.querySelector('.title');
    let themElement = document.querySelector('.them');
    let rankElement = document.querySelector('.rank');
    let taskElement = document.querySelector('.task');
    let friElement = document.querySelector('.fri');
    let lightElement = document.querySelector('#light');
    let darkElement = document.querySelector('#dark');
    
    if (lang === 'ru') {
        document.documentElement.lang = 'ru';
        
        if (langElement) langElement.textContent = 'Язык';
        if (settElement) settElement.textContent = 'Настройки';
        if (themElement) themElement.textContent = 'Тема';
        if (rankElement) rankElement.textContent = 'Рейтинг';
        if (taskElement) taskElement.textContent = 'Задания';
        if (friElement) friElement.textContent = 'Друзья';
        if (lightElement) lightElement.textContent = 'Светлая';
        if (darkElement) darkElement.textContent = 'Тёмная';


        
    } else if (lang === 'en') {
        document.documentElement.lang = 'en';
        
        if (langElement) langElement.textContent = 'Language';
        if (settElement) settElement.textContent = 'Settings';
        if (themElement) themElement.textContent = 'Theme';
        if (rankElement) rankElement.textContent = 'Ranking';
        if (taskElement) taskElement.textContent = 'Tasks';
        if (friElement) friElement.textContent = 'Friends';
        if (lightElement) lightElement.textContent = 'Light';
        if (darkElement) darkElement.textContent = 'Dark';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        updateContentByLanguage(savedLanguage);
    }
});
