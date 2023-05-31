/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

    datosPersona.nombre = prompt("Ingrese su nombre:");
    datosPersona.anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
    datosPersona.ciudad = prompt("Ingrese su ciudad:");
    datosPersona.interesPorJs = confirm("¿Le interesa JavaScript?");

    let anioActual = 2023;
    datosPersona.edad = anioActual - datosPersona.anioNacimiento;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombreElement = document.getElementById("nombre");
  const edadElement = document.getElementById("edad");
  const ciudadElement = document.getElementById("ciudad");
  const interesaJavascriptElement = document.getElementById("javascript");
 
  nombreElement.textContent = datosPersona.nombre;
  edadElement.textContent = datosPersona.edad;
  ciudadElement.textContent = datosPersona.ciudad;
  interesaJavascriptElement.textContent = datosPersona.interesPorJs ? "Sí" : "No";
  
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  let contenedor = document.getElementById("fila") // hace referencia al contenedor 

  if (contenedor.childElementCount > 0) {  // verifica si las terjetas ya han sido renderizadas antes
    return;
  }

  for (let i = 0; i < listado.length; i++) { // recorre el listado de materias
    let materia = listado[i];

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('caja');

    const imagen = document.createElement('img');
    imagen.src = materia.imgUrl;
    imagen.alt = materia.lenguajes;
    tarjeta.appendChild(imagen);

    const lenguajes = document.createElement('p');
    lenguajes.classList.add('lenguajes');
    lenguajes.textContent = 'Lenguajes: ' + materia.lenguajes;
    tarjeta.appendChild(lenguajes);

    const bimestre = document.createElement('p');
    bimestre.classList.add('bimestre');
    bimestre.textContent = 'Bimestre: ' + materia.bimestre;
    tarjeta.appendChild(bimestre);

    contenedor.appendChild(tarjeta);
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let sobreMi = document.getElementById('sobre-mi');
document.addEventListener('keydown', function(event) {
  if (event.code === "KeyF") {
    sobreMi.classList.remove('oculto');
  }
});