"use strict";
// Задача
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.
const dataAPI = `https://jsonplaceholder.typicode.com/users`;

async function getData(dataAPI) {
    const res = await fetch(dataAPI);
    const data = await res.json();
    return data;
}

try {
    const data = await getData(dataAPI);
    const root = document.querySelector('.root');
    data.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user__item');

        for (const key in user) {
            const el = document.createElement('p');
            el.classList.add('user__info');
            el.textContent = `${key}: ${user[key]}`;
            userItem.appendChild(el);
        }

        const btn = document.createElement('button');
        btn.textContent = 'Удалить';
        btn.addEventListener('click', function(e) {
            e.target.parentNode.remove();
        })
        userItem.appendChild(btn);

        root.appendChild(userItem);

    });
} catch (error) {
    console.log('no connect');
}
