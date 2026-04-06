//console.log("hola");

const titulo = document.getElementById("titulo");
const pensamiento = document.getElementById("pensamiento");

const listaTextos = ["Hello", "and welcome to", "the Los Pollos Hermanos", "me llamo Pepito", "see...", "...", "Adivina quien es mi fan numero 1", "eres tú", "porque sigues dandole click", "Te cuento un chiste?", "habia un niño que se llamaba PegaStick", "se cayo y se pego...", "xD"];
let estadoInicial =true;
let indice = 0;

titulo.addEventListener("click", () => {
   if (estadoInicial === true){
   titulo.innerText = "¡Buenos dìas!";
   titulo.style.color = "#f33a80";
   titulo.style.backgroundColor = "black";
} else {
    titulo.innerText="¡pan rollito a 500!";
    titulo.style.color = "#ffc155";
    titulo.style.backgroundColor = "transparent";
}
estadoInicial = !estadoInicial;
})

pensamiento.addEventListener("click", () => {
    if(indice < listaTextos.length){
    pensamiento.innerText = listaTextos [indice];
    indice = indice + 1;
} else {
    // indice = 0; // Si quiero que vuelva a empezar
    pensamiento.innerText="FIN"

}
})