let texto = document.getElementById("informacion");

let inf = texto.textContent;
texto.addEventListener("keyup",imprimirdatos);

function imprimirdatos(){
    let valor = document.getElementById("informacion").value;
    console.log(valor); 
}

console.log(inf);
console.log(texto);
console.log("hola");