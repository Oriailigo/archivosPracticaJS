// //objetos literales:
// {} estas llaves es un objeto

//propiedad
const persona={
    nom:'tony',
    ape:'rolando',
    dire:{
        ciudad:"calle falsa",
        tel:345,}
};



console.table(persona)

//quiero hacer un clon de persona
//creo un nuevo objeto con las copias de los atributos
//del otro objeto
const persona2= {...persona};
persona2.ape="Rosa";

console.log(persona);

console.log(persona2);