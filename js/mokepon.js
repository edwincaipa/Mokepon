const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none";
const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota")


const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-Jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-Enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputSquirtle
let inputCubone
let inputCharmeleon
let inputWooper
let inputNumel
let mascotaJugador
let AtaquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let VidasJugador = 3;
let VidasEnemigo = 3;


class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = []
  }
}
let squirtle = new Mokepon('Squirtle', './images/squirtle.png', 5)
let cubone = new Mokepon('Cubone', './images/cubone.png', 5)
let charmeleon = new Mokepon('Charmeleon', './images/charmeleon.png', 5)
let wooper = new Mokepon('Wooper', './images/wooper.png', 5)
let numel = new Mokepon('Numel', './images/numel.png', 5)

squirtle.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🪐', id: 'boton-tierra' },
)
cubone.ataques.push(
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },

)
charmeleon.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🪐', id: 'boton-tierra' },
)
wooper.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🪐', id: 'boton-tierra' },
)
numel.ataques.push(
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '🪐', id: 'boton-tierra' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },

)
mokepones.push(squirtle, cubone, charmeleon, wooper, numel)

function iniciarJuego() {

  sectionSeleccionarAtaque.style.display = "none";


  mokepones.forEach((Mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${Mokepon.nombre} />
      <label class="boton-mokepon" for=${Mokepon.nombre}>
        <p>${Mokepon.nombre}</p>
        <img class="img-mokepon" src=${Mokepon.foto} alt=${Mokepon.nombre} />
      </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputSquirtle = document.getElementById("Squirtle")
    inputCubone = document.getElementById("Cubone")
    inputCharmeleon = document.getElementById("Charmeleon")
    inputWooper = document.getElementById("Wooper")
    inputNumel = document.getElementById("Numel")



  })


  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);


  botonReiniciar.addEventListener("click", ReiniciarJuego);
}

function seleccionarMascotaJugador() {

  sectionSeleccionarMascota.style.display = "none";

  sectionSeleccionarAtaque.style.display = "flex";

  if (inputSquirtle.checked) {
    spanMascotaJugador.innerHTML = inputSquirtle.id
    mascotaJugador = inputSquirtle.id
  } else if (inputCubone.checked) {
    spanMascotaJugador.innerHTML = inputCubone.id
    mascotaJugador = inputCubone.id
  } else if (inputCharmeleon.checked) {
    spanMascotaJugador.innerHTML = inputCharmeleon.id
    mascotaJugador = inputCharmeleon.id
  } else if (inputWooper.checked) {
    spanMascotaJugador.innerHTML = inputWooper.id
    mascotaJugador = inputWooper.id
  } else if (inputNumel.checked) {
    spanMascotaJugador.innerHTML = inputNumel.id
    mascotaJugador = inputNumel.id
  } else {
    alert("Debes elegir una mascota.");
  }

  extraerAtaques(mascotaJugador)
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    AtaquesMokepon = `
    <button class="boton-ataque BAtaque" id=${ataque.id}>${ataque.nombre}
    </button>
    `
    contenedorAtaques.innerHTML += AtaquesMokepon
  })

  botonFuego = document.getElementById("boton-fuego")
  botonAgua = document.getElementById("boton-agua")
  botonTierra = document.getElementById("boton-tierra")
  botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push("FUEGO")
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
      } else if (e.target.textContent === '💧') {
        ataqueJugador.push("AGUA")
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
      } else {
        ataqueJugador.push("TIERRA")
        console.log(ataqueJugador)
        boton.style.background = '#112f58'
      }
      ataqueAleatorioEnemigo()
    })
  })


}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
  secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {

  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO")
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA")
  } else {
    ataqueEnemigo.push("TIERRA")
  }
  console.log(ataqueEnemigo)
  iniciarPelea()
}
function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate()
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() {

  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE")
    } else if (ataqueJugador[index] === "FUEGO"&& ataqueEnemigo[index]==="TIERRA"){
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE")
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE")
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE")
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}
function revisarVidas() {
  if (victoriasJugador ===victoriasEnemigo) {
    crearMensajefinal("Esto fue un empate!!!");
  } else if (VidasJugador > victoriasEnemigo) {
    crearMensajefinal("FELICITACIONES ganaste: 🏆");
  } else {
    crearMensajefinal("Lo siento, Perdiste 😞");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p")
  let nuevoAtaqueDelEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajefinal(resultadofinal) {


  let parrafo = document.createElement("p")
  sectionMensajes.innerHTML = resultadofinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  sectionReiniciar.style.display = "block";
  botonReiniciar.addEventListener("click", ReiniciarJuego);
}
function ReiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego)
