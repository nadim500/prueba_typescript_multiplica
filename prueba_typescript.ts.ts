/* 1: Uso de Let y Const
var nombre = "César Tapia";
var edad = 32;
var PERSONAJE = {
nombre: nombre,
edad: edad
}; */

let nombre: string = 'Cesar Tapia';
let edad: number = 32;

const PERSONAJE: any = {
  nombre: nombre,
  edad: edad
}

/* 2: Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
nombre: "Bruno Díaz",
artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
} */

interface Batman {
  nombre: string;
  artesMarciales: string[]
}

let batman: Batman = {
  nombre: 'Bruno Diaz',
  artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
}

/*3: Convertir esta función a una función de flecha
function resultadoDoble( a, b ){
return (a + b) * 2
} */

let resultadoDoble = ((a, b) => (a + b) * 2);
