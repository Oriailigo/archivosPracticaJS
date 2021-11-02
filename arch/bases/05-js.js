//FUNCIONES
//  crear una funcion

function saludar1(nom) {
    return `hola ${nom}`;
}
console.log(saludar1("goku"));

// crear una funcion constante
const saludar2 = function(nom) {
    return `hola ${nom}`;

}
console.log(saludar2("vegeta"));

// crear una funcion flecha
const saludar3 = (nom) => {
    return `hola ${nom}`;

}
console.log(saludar3("picoro"));

// crear otra funcion flecha
// esta funcion es mas ligera
// y facil de mantener

// nota: al ser un valor primitivo no se le agrega parentesis
const saludar4 = (nom) => `hola ${nom}`;

console.log(saludar4("Mr Satan"));

//funcion tipica del get
const getUser = () => {
    return {
        id: "1444443",
        username: "Loli43"
    }
}
const Varuser = getUser();
console.log(Varuser);


//funcion tipica del get pero sin el return
//nota: se le debe agregar parentesis al objeto

const getUser2 = () => ({
    id: "12443",
    username: "rodrigo43"
});

console.log(getUser2());

//tarea:
const getUserActivo = (nom) =>
    ({
        id: "345ABC",
        username: nom,
    });

const userAc = getUserActivo("FernandFlow");
console.log(userAc);