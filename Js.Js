// Constantes no puedo cambiar el valor una vez asignado

//const foo = 19;

// Ambas son reasignables, la diferencia es el alcance/scope 
// Let es alcance de bloque

//let bar = 60;

// var es alcance global

//var baz = 41;

//---------------------------------------------------//

//Numero par impar o 0

const dato = parseInt(prompt("Ingrese un numero"));

if(dato == 0){
    alert("El numero es cero");
}
else if(dato % 2 == 0){
    alert("El numerto es par");
}
else{
    alert("El numero es impar")
}

