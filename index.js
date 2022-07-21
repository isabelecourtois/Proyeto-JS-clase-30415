// Cotización de eventos
 
// Constructor de Objetos para crear clientes  

    let cuestionario = [];

    let nombre = document.getElementById("nombre");
    let evento = document.getElementById("evento");
    let fecha = document.getElementById("fecha");
    let servicio = document.getElementById("servicio");
    let invitados = document.getElementById("invitados");

    function Cliente (nombre, evento, fecha, servicio, invitados){
        this.nombre= nombre;
        this.evento= evento;
        this.fecha= fecha;
        this.servicio= servicio;
        this.invitados= invitados;

    };

    let formulario = document.getElementById("form");
    formulario.addEventListener ("submit", validarFormulario);
    
    function validarFormulario (e){
        e.preventDefault();


    const cliente1 = new Cliente (nombre.value, evento.value, fecha.value, servicio.value, invitados.value);
    cuestionario.push(cliente1);
    console.log(cuestionario); 

   

// Catálogo de servicios


const servicios = [
    {servicio: "Desayuno Continental", precio: 150},
    {servicio: "Desayuno Buffet", precio: 200},
    {servicio: "Comida Corrida", precio: 200},
    {servicio: "Comida Buffet", precio: 300},
    {servicio: "Cena Ligera", precio: 100},
    {servicio: "Cena Buffet", precio: 200},
];

// Precio del servicio

let buscaServicio = servicios.find (elemento => elemento.servicio === servicio.value);
let precioTotal = buscaServicio.precio * invitados.value;
console.log(precioTotal);


// Cotización en el HTML
const hacerCotizacion = () => {
    cotizacion.innerHTML = `<div class="cotizacionFinal">
                                <h2>HOLA: ${nombre.value}</h2>
                                <p>Tu cotización para tu ${evento.value} sería $ ${precioTotal} </p>

                            </div>`
};


let boton = document.getElementById("btnCotizar")
boton.onclick = () => hacerCotizacion()


// Ver Cotizaciones Pasadas

// Guardas en el localStorage

localStorage.setItem("cuestionario",JSON.stringify (cuestionario));    
let cotisPasadas =JSON.parse(localStorage.getItem("cuestionario")) || [];
console.log(cotisPasadas);


// Cotizaciones pasadas en el HTML
const verCotizacion = () => {
    cotisPasadas.innerHTML = `<div class="cotizacionFinal">
                                <h2>HOLA: ${nombre.value}</h2>
                                <p>Tu cotización para tu ${evento.value} sería $ ${precioTotal} </p>

                            </div>`
};


//No agarra el botón, no sé por qué
let boton2 = document.getElementById("btnCotisPasadas")
boton2.onclick = (e) => {
    e.preventDefault();
    verCotizacion ()
};
}