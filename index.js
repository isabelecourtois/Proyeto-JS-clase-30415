// Cotización de eventos

/* // Iniciar sesión
let usuario;
let usuarioEnLS = localStorage.getItem("usuario");

// Recuperar

if (usuarioEnLS) {
    usuario = usuarioEnLS;
    alert ("Bienvenido" + usuario);
} else {
    let usuario = getElementById ("usuario");
    let boton = document.getElementById("btnIngresar")
    boton.onclick = () => {alert ("Bienvenido")} 
    localStorage.setItem("usuario" , usuario);
} */
 
// Constructor de Objetos para crear clientes  

 let formulario = document.getElementById("form");
formulario.addEventListener ("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    let form = e.target

let cuestionario = [];

    let nombre = form.children[0].value.toLowerCase();
    let evento = form.children[1].value.toLowerCase();
    let fecha = form.children[2].value.toLowerCase();
    let servicio = form.children[3].value.toLowerCase();
    let invitados = form.children[4].value.toLowerCase();

    function Cliente (nombre, evento, fecha, servicio, invitados){
        this.nombre= nombre;
        this.evento= evento;
        this.fecha= fecha;
        this.servicio= servicio;
        this.invitados= invitados;
    };
    const cliente1 = new Cliente (nombre, evento, fecha, servicio, invitados);
    cuestionario.push(cliente1);
    console.log(cuestionario); 



let boton = document.getElementById("btnCotizar")
boton.onclick = () => {alert ("Gracias por enviarno tu información")} 


// Catálogo de servicios


const servicios = [
    {servicio: "desayuno continental", precio: 150},
    {servicio: "desayuno buffet", precio: 200},
    {servicio: "comida corrida", precio: 200},
    {servicio: "comida buffet", precio: 300},
    {servicio: "cena ligera", precio: 100},
    {servicio: "cena buffet", precio: 200},
];

// Precio del servicio

let buscaServicio = servicios.find (elemento => elemento.servicio === servicio);
console.log(buscaServicio.precio);
let precioTotal = buscaServicio.precio * invitados;
alert ("El precio de tu evento sería " + precioTotal); 
}

// Condicionales para saber si quiere la reserva o no

/* let reserva= prompt ("¿Quieres continuar con tu reservación?").toLowerCase();
if (reserva == "si"){
    console.log ("Tu reserva está hecha");


} else {
    alert("vuelve pronto");
}
  */
