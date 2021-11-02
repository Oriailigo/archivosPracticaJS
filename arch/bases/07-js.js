//desestructuracion de arreglos:

// quiero a goku y los demas no.
const personajes = ["vegeta", "goku", "trunks"];
const [, p1] = personajes;
console.log(p1);


// retornemos un arreglo
const retornarArreglo = () => {
    return ["ABC", 1243];
}
const [letras, num] = retornarArreglo();
console.log(letras, num);


//tarea
// la desestructuracion del arreglo
// la pos 1 se llama nom
// la pos 2 se llama funcion
const userState = (nom) => {
    return [nom, () => {
        console.log("hola soy " + nom);
    }]
}

const [nom, funcion] = userState("Goten");

console.log(nom);
funcion();