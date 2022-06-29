// Cotización de eventos

// Constructor de Objetos para crear clientes

let cuestionario = [];

let nombre = prompt ("¿Cuál es tu nombre?").toLowerCase()
let apellido = prompt ("¿Cuál es tu apellido?").toLowerCase()
let evento = prompt ("¿Qué tipo de evento quieres cotizar?").toLowerCase()
let hora = prompt ("Desayuno, comida o cena").toLowerCase()
let invitados = prompt ("¿Cuántos invitados habrá?").toLowerCase()

    function Cliente (nombre, apellido, evento, hora, invitados){
        this.nombre= nombre;
        this.apellido= apellido;
        this.evento= evento;
        this.hora= hora;
        this.invitados= invitados;
    };

const cliente1 = new Cliente (nombre, apellido, evento, hora, invitados);
cuestionario.push(cliente1);
console.log(cuestionario);


// Switch case para hacer cotización

let precioT 
let precioI

switch (hora){
    case "desayuno":
        precioI=100;
        precioT= precioI*invitados;
        console.log("El precio de tu evento sería " + precioT);
        break;

    case "comida":
        precioI=200;
        precioT= precioI*invitados;
        console.log("El precio de tu evento sería " + precioT);
        break;

    case "cena":
        precioI=150;
        precioT= precioI*invitados;
        console.log("El precio de tu evento sería " + precioT);
        break;     
        
    default:
        console.log("Escríbenos a nuestro teléfono de contacto para darte más información sobre nuestros servicios");
        break;

} 

// Condicionales para saber si quiere la reserva o no

let reserva= prompt ("¿Quieres continuar con tu reservación?").toLowerCase();
if (reserva == "si"){
    prompt("¿Cuándo deseas que sea tu evento? (dd/mm/aa");
    console.log ("Tu reserva está hecha");

} else {
    alert("vuelve pronto");
}




