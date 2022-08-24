"use strict";
// json-server ./crud/db.json
const { v4: uuidv4 } = require ('uuid');

const d = document;

// capturando los nodos de html con javascript
const input_todo = d.getElementById("input-todo");
const btn_add = d.getElementById("btn-add");
const content_w = d.getElementById("content-wrapper");

// url base para consumir APIA
const url = "http://localhost:3000/data";

// function que imprime elmenentos li y button en el DOM
const printTask = (task, id) => {
    let li = d.createElement("li");
    li.dataset.id = id
    li.textContent = task;

    const btn_1 = d.createElement("button");
    const btn_2 = d.createElement("button");
    btn_1.textContent = "Editar";
    btn_2.textContent = "Eliminar";

    btn_1.addEventListener("click", () => {
        putData()
    });

    btn_2.addEventListener("click", () => {
        console.log("Eliminando");
    });

    li.append(btn_1, btn_2);

    content_w.appendChild(li);
};

// function que obtiene datos de la API
const getData = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                printTask(element.task, element.id)
            });
        })
        .catch(error => console.error(error));
};

// function que envia datos a la API
const postData = (task) => {
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': uuidv4(),
                'task': task
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const putData = () => {
    return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'task': 'Hola, soy una tarea nueva'
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

getData()

btn_add.addEventListener('click', () => {
    return postData(input_todo.value)
})