// Cotización de eventos

let array = [];

let nombre = prompt ("¿Cuál es tu nombre?")
let apellido = prompt ("¿Cuál es tu apellido?")
let evento = prompt ("¿Qué tipo de evento quieres cotizar?")
let hora = prompt ("Desayuno, comida o cena")
let invitados = prompt ("¿Cuántos invitados habrá?")

    function Cliente (nombre, apellido, evento, hora, invitados){
        this.nombre= nombre;
        this.apellido= apellido;
        this.evento= evento;
        this.hora= hora;
        this.invitados= invitados;
    };

const cliente1 = new Cliente (nombre, apellido, evento, hora, invitados);
array.push(cliente1);
console.log(array);

let precioT 
let precioI

switch (hora){
    case desayuno:
        precioI=100;
        precioT= precioI*invitados;
        console.log("El precio de tu evento sería" + precioT);
        break;

    case comida:
        precioI=200;
        console.log("El precio de tu evento sería" + precioT);
        break;

    case cena:
        precioT=150;
        console.log("El precio de tu evento sería" + precioT);
        break;        
}




