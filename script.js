// Данные учебника
const textbook = {
    languages: [
        { name: 'Python', id: 'python' },
        { name: 'JavaScript', id: 'javascript' },
        { name: 'Java', id: 'java' }
    ],
    chapters: {
        python: [
            { 
                title: 'Основы Python', 
                content: 'Python — простой и мощный язык, идеален для начинающих. Установите его с python.org и напишите первую программу.<br><br>Синтаксис включает переменные, условия и циклы.<br><br>Пример кода:<pre><code>print("Привет, мир!")</code></pre>' 
            },
            { 
                title: 'Функции в Python', 
                content: 'Функции создаются с def, принимают параметры и возвращают значения.<br><br>Используйте их для повторного кода.<br><br>Пример кода:<pre><code>def summa(a, b):<br>    return a + b<br>print(summa(5, 3))  # 8</code></pre>' 
            }
        ],
        javascript: [
            { 
                title: 'Введение в JavaScript', 
                content: 'JavaScript делает веб-страницы интерактивными. Работает в браузере.<br><br>Начните с console.log.<br><br>Пример кода:<pre><code>console.log("Привет, мир!");</code></pre>' 
            },
            { 
                title: 'Основы JavaScript', 
                content: 'Переменные: let, const. Типы: числа, строки.<br><br>Условия и циклы для логики.<br><br>Пример кода:<pre><code>let x = 10;<br>console.log(x + 5);  // 15</code></pre>' 
            }
        ],
        java: [
            { 
                title: 'Введение в Java', 
                content: 'Java — платформо-независимый язык. Установите JDK.<br><br>Первая программа с main.<br><br>Пример кода:<pre><code>public class HelloWorld {<br>    public static void main(String[] args) {<br>        System.out.println("Привет, мир!");<br>    }<br>}</code></pre>' 
            },
            { 
                title: 'Основы Java', 
                content: 'Переменные: int, String. Условия: if-else.<br><br>Циклы: for, while.<br><br>Пример кода:<pre><code>int x = 10;<br>System.out.println(x);</code></pre>' 
            }
        ]
    }
};

// Элементы DOM
const contentDiv = document.getElementById('chapter-content');
const welcomeText = document.getElementById('welcome-text');
const avatarImg = document.getElementById('avatar');
const menuDiv = document.getElementById('menu');

// Функции для рендеринга
function showLanguages() {
    contentDiv.innerHTML = '<ul class="language-list"></ul>';
    const ul = contentDiv.querySelector('ul');
    textbook.languages.forEach(lang => {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = lang.name;
        li.onclick = () => showChapters(lang.id);
        ul.appendChild(li);
    });
}

function showChapters(langId) {
    contentDiv.innerHTML = '<button class="back-button" onclick="showLanguages()">Назад к языкам</button><ul class="chapter-list"></ul>';
    const ul = contentDiv.querySelector('ul');
    textbook.chapters[langId].forEach(chapter => {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = chapter.title;
        li.onclick = () => showChapterContent(langId, chapter.title, chapter.content);
        ul.appendChild(li);
    });
}

function showChapterContent(langId, title, content) {
    contentDiv.innerHTML = `
        <button class="back-button" onclick="showChapters('${langId}')">Назад к главам</button>
        <div class="chapter-content">
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    `;
}

function switchFrame(frameId) {
    document.querySelectorAll('.frame').forEach(frame => frame.classList.remove('active'));
    document.getElementById(`frame${frameId}`).classList.add('active');
    localStorage.setItem('activeFrame', frameId);
    document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.menu-button:nth-child(${frameId})`).classList.add('active');
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Создание меню с иконками
    menuDiv.innerHTML = `
        <button class="menu-button" onclick="switchFrame(1)">
            <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#F3F3F3"><path d="M240-200h147.69v-235.38h184.62V-200H720v-360L480-741.54 240-560v360Zm-40 40v-420l280-211.54L760-580v420H532.31v-235.38H427.69V-160H200Zm280-310.77Z"/></svg>
        </button>
        <button class="menu-button" onclick="switchFrame(2)" style="margin: 0 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#F3F3F3"><path d="M555.38-576.31v-37.23q32.24-16.31 69.04-24.46 36.81-8.15 75.58-8.15 22.15 0 42.54 2.84 20.38 2.85 42.08 8.08v36.31q-20.93-6.7-40.81-9.27-19.89-2.58-43.81-2.58-38.77 0-75.69 8.73-36.93 8.73-68.93 25.73Zm0 218.46v-38.77q30.7-16.3 68.66-24.46 37.96-8.15 75.96-8.15 22.15 0 42.54 2.85 20.38 2.84 42.08 8.07V-382q-20.93-6.69-40.81-9.27-19.89-2.58-43.81-2.58-38.77 0-75.69 9.39-36.93 9.38-68.93 26.61Zm0-108.46v-38.77q32.24-16.3 69.04-24.46 36.81-8.15 75.58-8.15 22.15 0 42.54 2.84 20.38 2.85 42.08 8.08v36.31q-20.93-6.69-40.81-9.27-19.89-2.58-43.81-2.58-38.77 0-75.69 9.5-36.93 9.5-68.93 26.5ZM260-318.46q52.38 0 101.88 12.04 49.5 12.04 98.12 39.19v-392.46q-43.31-30.93-95.46-46.39-52.16-15.46-104.54-15.46-36 0-63.04 4.31t-60.04 16q-9.23 3.08-13.07 8.85-3.85 5.76-3.85 12.69v360.61q0 10.77 7.69 15.77t16.93 1.16q21.92-7.39 50.65-11.85 28.73-4.46 64.73-4.46Zm240 51.23q48.62-27.15 98.12-39.19 49.5-12.04 101.88-12.04 36 0 64.73 4.46 28.73 4.46 50.65 11.85 9.24 3.84 16.93-1.16 7.69-5 7.69-15.77v-360.61q0-6.93-3.85-12.31-3.84-5.38-13.07-9.23-33-11.69-60.04-16-27.04-4.31-63.04-4.31-52.38 0-104.54 15.46-52.15 15.46-95.46 46.39v392.46Zm-20 58q-48.77-33.39-104.77-51.31-56-17.92-115.23-17.92-31.23 0-61.35 5.23Q168.54-268 140-256.46q-21.77 8.69-40.88-5.23Q80-275.61 80-300.15v-386.62q0-14.85 7.81-27.54T109.69-732q35.23-15.54 73.31-22.54 38.08-7 77-7 58.77 0 114.65 16.92 55.89 16.93 105.35 49.24 49.46-32.31 105.35-49.24 55.88-16.92 114.65-16.92 38.92 0 77 7T850.31-732q14.07 5 21.88 17.69 7.81 12.69 7.81 27.54v386.62q0 24.54-20.65 37.69-20.66 13.15-43.97 4.46-27.76-10.77-56.73-15.62-28.96-4.84-58.65-4.84-59.23 0-115.23 17.92-56 17.92-104.77 51.31ZM290-499.38Z"/></svg>
        </button>
        <button class="menu-button" onclick="switchFrame(3)">
            <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#F3F3F3"><path d="m405.38-120-14.46-115.69q-19.15-5.77-41.42-18.16-22.27-12.38-37.88-26.53L204.92-235l-74.61-130 92.23-69.54q-1.77-10.84-2.92-22.34-1.16-11.5-1.16-22.35 0-10.08 1.16-21.19 1.15-11.12 2.92-25.04L130.31-595l74.61-128.46 105.93 44.61q17.92-14.92 38.77-26.92 20.84-12 40.53-18.54L405.38-840h149.24l14.46 116.46q23 8.08 40.65 18.54 17.65 10.46 36.35 26.15l109-44.61L829.69-595l-95.31 71.85q3.31 12.38 3.7 22.73.38 10.34.38 20.42 0 9.31-.77 19.65-.77 10.35-3.54 25.04L827.92-365l-74.61 130-107.23-46.15q-18.7 15.69-37.62 26.92-18.92 11.23-39.38 17.77L554.62-120H405.38ZM440-160h78.23L533-268.31q30.23-8 54.42-21.96 24.2-13.96 49.27-38.27L736.46-286l39.77-68-87.54-65.77q5-17.08 6.62-31.42 1.61-14.35 1.61-28.81 0-15.23-1.61-28.81-1.62-13.57-6.62-29.88L777.77-606 738-674l-102.08 42.77q-18.15-19.92-47.73-37.35-29.57-17.42-55.96-23.11L520-800h-79.77l-12.46 107.54q-30.23 6.46-55.58 20.81-25.34 14.34-50.42 39.42L222-674l-39.77 68L269-541.23q-5 13.46-7 29.23t-2 32.77q0 15.23 2 30.23t6.23 29.23l-86 65.77L222-286l99-42q23.54 23.77 48.88 38.12 25.35 14.34 57.12 22.34L440-160Zm38.92-220q41.85 0 70.93-29.08 29.07-29.07 29.07-70.92t-29.07-70.92Q520.77-580 478.92-580q-42.07 0-71.04 29.08-28.96 29.07-28.96 70.92t28.96 70.92Q436.85-380 478.92-380ZM480-480Z"/></svg>
        </button>
    `;

    const savedFrame = localStorage.getItem('activeFrame') || 1;
    switchFrame(savedFrame);

    // Telegram WebApp интеграция
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
        const user = Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            welcomeText.textContent = `Привет, ${user.first_name}!`;
            if (user.photo_url) {
                avatarImg.src = user.photo_url;
            }
        }
    } else {
        welcomeText.textContent = 'Привет, Гость!';
    }

    // Инициализация фрейма 2
    showLanguages();
});

// Обработчики событий
window.showLanguages = showLanguages;
window.showChapters = function(langId) {
    showChapters(langId);
};
window.showChapterContent = function(langId, title, content) {
    showChapterContent(langId, title, content);
};