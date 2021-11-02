//desestructuracion de objetos

// asignacion desustructurante
const persona = {
    nombre: "toby",
    edad: 12,
    clave: "Aeroman"
};
console.log(persona.nombre + persona.edad + persona.clave);

// para no escribir persona.nombre
//aqui escribo lo que quiero substraer de peresona
const {
    nombre,
    edad
} = persona;
console.log(nombre + edad);


// se puede hacer la desestructuracion dentro del pasajes de parametros
const quierouser = ({ nombre, rango = "nivelDios" }) => {
        // console.log(nombre + "  " + rango);
        return {
            nombrec: nombre,
            rangor: rango,
            latylo: {
                long: 1234,
                lat: -124
            }
        }
    }
    // hago de nuevo la desestructuracion
    // const { nombrec, rangor, latylo } = quierouser(persona);

// console.log(rangor + " " + nombrec);

// console.log(latylo);

// si queremos la longitud y latitud por separado
// lo podemos hacer asi
// nota: latylo ya no estara disponible

const {
    nombrec,
    rangor,
    latylo: {
        lat,
        long,
    }
} = quierouser(persona);

console.log(rangor + " " + nombrec);

console.log(lat + "  " + long);