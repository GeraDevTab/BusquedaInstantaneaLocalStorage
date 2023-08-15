let texto = document.getElementById("informacion");

let inf = texto.textContent;
texto.addEventListener("keyup",imprimirdatos);

let botonCarga = document.getElementById("cargarJson");
botonCarga.addEventListener("click",cargarJsonProductos);


let productos = {nombre: "cemento",
    um: "bulto",
    descripcion: "cemento gris por kilo",
    precio: 222.00,
    stock: 50.00

}

function imprimirdatos(){
    let valor = document.getElementById("informacion").value;
    console.log(valor); 
}

function cargarJsonProductos(){
    fetch("./assets/data/productos_json.json")
    .then(response => response.json())
    .then(data => console.log(data));
}

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

console.log(inf);
console.log(texto);
console.log("hola");
console.log(typeof(productos));