"use strict"

const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";
const url2 = "https://rickandmortyapi.com/api/character/479"

// Funcion es un bloque de codigo a ejectar y para retornar algo
// Si no se le agrega un return, retorna undefined
function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const pokemons = getData(url1);
pokemons
    .then((data) => {
        console.log("data ", data);
    })
    .catch((error) => {
        console.log("error: ", error);
    })

const ricks = getData(url2);
ricks
    .then((data) => {
        console.log("data ", data);
    })
    .catch((error) => {
        console.log("error: ", error);
    })