// Cotización de eventos

// Catálogo de servicios

const servicios = [
    {servicio: "desayuno continental", precio: 150},
    {servicio: "desayuno buffet", precio: 200},
    {servicio: "comida corrida", precio: 200},
    {servicio: "comida buffet", precio: 300},
    {servicio: "cena ligera", precio: 100},
    {servicio: "cena buffet", precio: 200},
];

// Constructor de Objetos para crear clientes

let cuestionario = [];

let nombre = prompt ("¿Cuál es tu nombre?").toLowerCase()
let apellido = prompt ("¿Cuál es tu apellido?").toLowerCase()
let evento = prompt ("¿Qué tipo de evento quieres cotizar?").toLowerCase()
let fecha = prompt ("¿Cuándo deseas que sea tu evento? (dd/mm/aa").toLowerCase()
let servicio = prompt ("Qué servicio quieres para tu evento").toLowerCase()
let invitados = prompt ("¿Cuántos invitados habrá?").toLowerCase()

    function Cliente (nombre, apellido, evento, fecha, servicio, invitados){
        this.nombre= nombre;
        this.apellido= apellido;
        this.evento= evento;
        this.fecha= fecha;
        this.servicio= servicio;
        this.invitados= invitados;
    };

const cliente1 = new Cliente (nombre, apellido, evento, fecha, servicio, invitados);
cuestionario.push(cliente1);
console.log(cuestionario); 


// Precio del servicio

let buscaServicio = servicios.find (elemento => elemento.servicio === servicio);
let precioTotal = buscaServicio.precio * invitados;
alert ("El precio de tu evento sería " + precioTotal);


// Condicionales para saber si quiere la reserva o no

let reserva= prompt ("¿Quieres continuar con tu reservación?").toLowerCase();
if (reserva == "si"){
    console.log ("Tu reserva está hecha");


} else {
    alert("vuelve pronto");
}



