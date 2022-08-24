// sirve para poder hacer que una funcion sincrona, pueda 
// acceder a los valores de una funcion asincrona

const url_base = 'https://jsonplaceholder.typicode.com/users'

const getData = async(url) => { 
    try {
        const response = await fetch(url)
        const data = await response.json()
        return console.log(data);
    } catch (error) {
        console.error(error);
        return error;
    }  
}

const showData = async(url) => {
    const finalData = await getData(url)
    return console.log(finalData);
}

showData(url_base)

// console.log(showData());

// getData(url_base)

// const getData = () => {
//     return fetch(url_base)
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => console.log(error))
// }

// const showData = () => {
//     const finalData = getData()
//     return finalData
// }

// console.log(showData());

