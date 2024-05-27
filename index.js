import { Reloj } from "./Reloj.js";
import { Cronometro } from "./Cronometro.js";
import { Tiempo } from "./Tiempo.js";


let cambio = document.getElementById("checkbox");
let fondo=document.getElementById("pantalla-cel");
let reloj =document.getElementById("reloj");
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");
let milesima = document.getElementById("milesima");
//let pantalla=document.getElementById("pantalla-stopwatch")

cambio.addEventListener('change', function(){
    
    if(cambio.checked){
        //alert ("claro");    
        fondo.classList.remove('bg-black');
        fondo.classList.add('bg-white');
        reloj.classList.remove('text-white');
        reloj.classList.add('text-black');
        minuto.classList.add('text-black');
        segundo.classList.add('text-black');
        milesima.classList.add('text-black');
        //pantalla.classList.add('text-white');
        

    }else{
        //alert("oscuro")
        fondo.classList.remove('bg-white');
        fondo.classList.add('bg-black');
        reloj.classList.remove('text-black');
        reloj.classList.add('text-white');
        minuto.classList.remove('text-black');
        segundo.classList.remove('text-black');
        milesima.classList.remove('text-black');
        //pantalla.classList.remove('text-black');
        
    }
    //cambio.style.backgroundColor =;  
});



/* 
    Metodos para el manejo de tiempo en JavaScript.

    El objeto Date nos permite realizar operaciones de tiempo.
    
    Este objeto se puede instanciar con la palabra clave new, y posteriormente podemos utilizar metodos 
    para capturar partes especificas del tiempo.
*/

// Capturamos el elemento en el cual se mostrara la fecha.
let parrafoConFecha = document.getElementById("fecha");

// Instanciamos el objeto Date, y lo guardamos en una variable.
// Al realizar esta accion capturamos la hora exacta del momento en el que se carga el DOM.
let fecha = new Date();


// Extraemos la fecha actual del sistema.
// Para esto utilizamos el metodo localDateString().
// Este metodo devuelve una cadena de caracteres que representa la fecha actual.
let fechaActual = fecha.toLocaleDateString();



// Añadimos la fecha actual al parrafo.
parrafoConFecha.innerText = `La fecha actual es: ${fechaActual}`;

let tiempo =document.getElementById("tiempo");
let stopwatch =document.getElementById("stopwatch");




if(stopwatch.classList.contains("activo")){        
        tiempo.classList.remove("activo");
        console.log(tiempo)
}else{
    stopwatch.classList.remove("activo");
}


// Los metodos de la clase Date son:

// getFullYear(): Devuelve el año actual.
// getMonth(): Devuelve el mes actual.
// getDate(): Devuelve el dia actual.
// getDay(): Devuelve el dia de la semana actual.
// getHours(): Devuelve las horas actuales.
// getMinutes(): Devuelve los minutos actuales.
// getSeconds(): Devuelve los segundos actuales.
// getMilliseconds(): Devuelve los milisegundos actuales.
// getTime(): Devuelve el tiempo actual en milisegundos.
// toString(): Devuelve una cadena de caracteres que representa la fecha actual.
// toLocaleString(): Devuelve una cadena de caracteres que representa la fecha y la hora actual en el idioma del usuario.
// toLocaleDateString(): Devuelve una cadena de caracteres que representa la fecha actual en el idioma del usuario.
// toLTimeString(): Devuelve una cadena de caracteres que representa la hora actual.



// Utilizamos la funcion del reloj que importamos al principio del documento para actualizar el 
// contenido del parrafo cada segundo.
Reloj();


// Tambien utilizamos la funcion del cronometro que importamos al principio del documento para actualizar el 
// contenido del la pantalla del cronometro cada milisegundo.
Cronometro();

//Tiempo();