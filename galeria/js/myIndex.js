"use strict"
// api de fotos

const url = 'https://picsum.photos/400'
const urlLista = 'https://picsum.photos/v2/list'
let arr = []

console.log(urlLista);

const galleryContainer = document.getElementById('gallery-container')
console.log(galleryContainer);

const getData = () => {
    fetch(urlLista)
        .then(response => response.json())
        .then(data => {
            arr = data;
            console.log(arr);
            // console.log(arr.download_url);
            
            arr.forEach(element => {
                console.log(element.download_url)
                // galleryContainer.innerHTML = `<div class='grid-item'> <img src='${element.download_url}' alt=''> </div>`    
            });
        })
        .catch(error => console.error(error));
};

getData()

console.log(arr);

