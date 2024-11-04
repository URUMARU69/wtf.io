document.addEventListener("DOMContentLoaded", () => {
    const lightButton = document.getElementById("light");
    const darkButton = document.getElementById("dark");

    // Проверка и установка темы при загрузке страницы
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }

    // Событие для кнопки светлой темы
    darkButton.addEventListener("click", () => {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    });

    // Событие для кнопки темной темы
    lightButton.addEventListener("click", () => {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    });
});
