"use strict"

const d = document

const galleryContainer = d.getElementById('gallery-container')

const url = "https://picsum.photos/v2/list"

const printGallery = () => {
    const div = d.createElement('div')
    div.classList.add("grid-item")
    
    galleryContainer.appendChild(div)
}

const getImages = async() => {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data);

    data.forEach(element => {
        printGallery()
        console.log(element.download_url);
    });
}

getImages()