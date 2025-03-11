// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Логика для tasks.html
    if (document.getElementById('taskModal')) {
        const modal = document.getElementById('taskModal');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const cancelBtn = document.querySelector('.cancel-btn');
        const taskForm = document.querySelector('.task-form');
        const taskList = document.querySelector('.task-list');

        // Функция для загрузки задач из localStorage
        function loadTasks() {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach(task => {
                const taskCard = document.createElement('div');
                taskCard.classList.add('task-card');
                taskCard.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                `;
                taskList.appendChild(taskCard);
            });
        }

        // Загрузка задач при старте
        loadTasks();

        // Открытие модального окна
        addTaskBtn.addEventListener('click', () => {
            modal.showModal();
        });

        // Закрытие при нажатии "Отмена"
        cancelBtn.addEventListener('click', () => {
            modal.close();
        });

        // Закрытие при клике вне модального окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });

        // Добавление задачи при отправке формы
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Получаем данные из формы
            const title = taskForm.querySelector('input[name="title"]').value;
            const description = taskForm.querySelector('textarea[name="description"]').value;

            // Создаём новую карточку задачи
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;

            // Добавляем карточку в список
            taskList.appendChild(taskCard);

            // Сохраняем в localStorage
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push({ title, description });
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Очищаем форму
            taskForm.reset();

            // Закрываем модальное окно
            modal.close();
        });
    }

    // Логика для 404.html (видео со звуком)
    if (document.getElementById('errorVideo')) {
        const video = document.getElementById('errorVideo');
        document.addEventListener('click', function() {
            video.play();
        }, { once: true });
    }
});