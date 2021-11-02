// arreglos son dinamicos en js
// let arreglo=new Array(10);
let arreglo=[2,3,5]
arreglo.push(2)

// tener un arreglo comn los valores anteriores
//del otro arrreglo pero con un dato mas
let arreglo2=[...arreglo]
arreglo2.push(14)


// el map es un metodo para modificar los elementos 
// de un arreglo
const ar3=arreglo2.map(function(num){
    return num*2;
})
console.log(arreglo2)
console.log(arreglo)
console.log(ar3)