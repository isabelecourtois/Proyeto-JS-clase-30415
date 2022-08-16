//Declaro mis variables
let botonCotizar = document.getElementById("btnCotizar");
let nombre = document.getElementById("nombre");
let evento = document.getElementById("evento");
let fecha = document.getElementById("fecha");
let servicio = document.getElementById("servicio");
let invitados = document.getElementById("invitados");

//Catálogo de servicios

const servicios = [
    { servicio: "Desayuno Continental", precio: 150 },
    { servicio: "Desayuno Buffet", precio: 200 },
    { servicio: "Comida Corrida", precio: 200 },
    { servicio: "Comida Buffet", precio: 300 },
    { servicio: "Cena Ligera", precio: 100 },
    { servicio: "Cena Buffet", precio: 200 },
];

// Constructor de Objetos para crear clientes  


const hacerCuestionario = () => {

    let cuestionario = [];

    
    function Cliente(nombre, evento, fecha, servicio, invitados) {
        this.nombre = nombre;
        this.evento = evento;
        this.fecha = fecha;
        this.servicio = servicio;
        this.invitados = invitados;

    };

    const cliente1 = new Cliente(nombre.value, evento.value, fecha.value, servicio.value, invitados.value);
    cuestionario.push(cliente1);
    console.log(cliente1);

    localStorage.setItem("cuestionario", JSON.stringify(cuestionario));
};


// Hacer Cotización

const hacerCotizacion = () => {

    // Precio del servicio
    let buscaServicio = servicios.find(elemento => elemento.servicio === servicio.value);
    let precioTotal = buscaServicio.precio * invitados.value;
    console.log(precioTotal);

    //Cotización en HTML

    cotizacion.innerHTML = `<div class="cotizacionFinal">
                                <h2>HOLA: ${nombre.value}</h2>
                                <p>Tu cotización para tu ${evento.value} es de $${precioTotal}  </p>

                            </div>`
};
const validarCampos = () => {
    let validacion = (nombre.value == "" || evento.value == "" || fecha.value == "" || servicio.value == "" || invitados.value == "") ? false : true;
    return validacion
};


botonCotizar.onclick = (e) => {
    e.preventDefault();
    hacerCuestionario();
    validarCampos() ? hacerCotizacion() : swal("Debe completar todos los campos.");
};

// Cotizaciones pasadas en el HTML

const verCotizacion = () => {
    let cotisPasadas = JSON.parse(localStorage.getItem("cuestionario")) || [];
    console.log(cotisPasadas);
    for (const producto of cotisPasadas) {
        console.log(producto.nombre);


        cotizacionesPasadas.innerHTML = `<div class="cotizacionesPasadasFinal">
                                <h2>Bienvenido de vuelta</h2>
                                <p>Tu última cotización es un ${producto.evento} para ${producto.invitados} personas el día ${producto.fecha}</p>

                            </div>`
    }
};


let boton2 = document.getElementById("btnCotisPasadas")
boton2.onclick = (e) => {
    e.preventDefault();
    verCotizacion()
};

const api = document.getElementById("api");

const getTiempo = async () => {
    let response = await axios("clima.JSON");
    console.log(response);

    let data = response.data.DailyForecasts;
    data.forEach(element => {
        console.log(element.Date)
        const item = document.createElement("div");

        item.innerHTML = `<div class="home-clima-dia">
                        <h3> ${element.Date}</h3>
                        <h3> Máxima: ${element.Temperature.Maximum.Value} ${element.Temperature.Maximum.Unit}</h3> 
                        <h3> Mínima: ${element.Temperature.Minimum.Value} ${element.Temperature.Maximum.Unit}</h3> 
                        </div>
            `;

        api.append(item);
    });
}

getTiempo();


