"use strict"

const axios = require("axios")

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/60";

axios
    .get(urlPokemon)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
// hacer una funcion que reciba una url, que recibe una promesa y retorna hasta que el then funciona