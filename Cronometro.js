export function Cronometro() {

  let start = document.getElementById("start");
  let start2 = document.getElementById("start2");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");
  let lap = document.getElementById("Lap");
  let resume = document.getElementById("resume");
  let cinti = document.getElementById("titulo");
  let pantalla_stopwatch = document.getElementById("pantalla_stopwatch");
  let pantalla_timer = document.getElementById("pantalla_timer");
  let timer1 = document.getElementById("timer1");
  let captura = document.getElementById("captura");
  let captura_tiempo = document.getElementById("captura_tiempo");
  let capturapantalla = document.getElementById("prueba");
  let vuelta = document.getElementById("captura");
  let scrollcontainer = document.getElementById("scrollcontainer");
  let timerh = document.getElementById("timerh");
  let timerm = document.getElementById("timerm");
  let timers = document.getElementById("timers");
  let titulo = document.getElementById("titulo");
  let prueba = document.getElementById("prueba");
  let dospuntos1 = document.getElementById("dospuntos1");
  let dospuntos2 = document.getElementById("dospuntos2");
  let pause = document.getElementById("pause");
  let delete1 = document.getElementById("delete1");
  let resume2 = document.getElementById("resume2");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let minuto = document.getElementById("minuto");
  let segundo = document.getElementById("segundo");
  let milesima = document.getElementById("milesima");
  let stopwatch = document.getElementById("stopwatch");

  let cambio = document.getElementById("checkbox");
  let fondo=document.getElementById("pantalla-cel");
  let reloj =document.getElementById("reloj");
  let alarma = document.getElementById("alarma");
  let world_clock= document.getElementById("world-clock");

  let span_1 = document.getElementById("span-1");
  let span_2 = document.getElementById("span-2");


  let segundo_timer;
  let minuto_timer;
  let hora_timer;

  segundo_timer = timers.value;
  minuto_timer = timerm.value;
  hora_timer = timerh.value;

  let contadorMil = 0;
  let contadorSeg = 0;
  let contadorMin = 0;

  let decremento;
  let incremento;
  let contador = 1;

  hours.classList.add("oculto");
  minutes.classList.add("oculto");
  seconds.classList.add("oculto");

  
  pantalla_timer;
  
  window.addEventListener('load', function(){

    cambio.checked=false;
      

  });

  stopwatch.addEventListener("click", () => {

    if (cambio.checked){
      //alert("fondo negro")
      timerh.classList.remove('bg-black');
      timerh.classList.add('bg-white');
      timerh.classList.remove('text-white');
      timerh.classList.add('text-black');
      timer1.classList.remove('text-white');
      timer1.classList.add('text-black');

  }else{
    //alert("fondo blanco");
    timerh.classList.remove('bg-black');
    timerh.classList.add('bg-white');
    timer1.classList.remove('text-white');
    timer1.classList.add('text-black');
    timer1.classList.remove('text-black');
    timer1.classList.add('text-white');
    

  };

    pantalla_stopwatch.classList.remove("oculto");
    minuto.classList.remove("oculto");
    segundo.classList.remove("oculto");
    milesima.classList.remove("oculto");
    hours.classList.add("oculto");
    minutes.classList.add("oculto");
    seconds.classList.add("oculto");
    timerh.classList.add("oculto");
    timerm.classList.add("oculto");
    timers.classList.add("oculto");
    dospuntos1.classList.add("oculto");
    dospuntos2.classList.add("oculto");
    start2.classList.replace("visible", "oculto");
    delete1.classList.replace("visible", "oculto");
    pause.classList.replace("visible", "oculto");
    timer1.removeAttribute("disabled","false"); //revisar
    start.classList.replace("oculto", "visible");
    start.removeAttribute("disabled");
    lap.setAttribute("disabled", "");
    lap.classList.replace("oculto", "visible");
  });

  start.addEventListener("click", () => {
    timer1.setAttribute("disabled", "true");
    pantalla_timer.classList.add("oculto");
    stopwatch.setAttribute("disabled", "true");
    //stopwatch.classList.add("activo");
    lap.removeAttribute("disabled");
    lap.classList.remove("oculto");
    // Ocultar boton de play y Reinicio
    start.classList.add("oculto");
    reset.classList.add("oculto");
    // Mostramos el boton de pausa
    stop.classList.remove("oculto");

    const conteo = () => {
      // Incremento de visible ocultoMilesima
      contadorMil++;
      //console.log(contadorMil);
      if (contadorMil < 100) {
        if (contadorMil < 10) {
          milesima.innerText = `0${contadorMil}`;
        } else {
          milesima.innerText = contadorMil;
        }
      } else {
        contadorMil = 0;
        // Incremento se Segundo
        contadorSeg++;
        if (contadorSeg < 60) {
          console.log(contadorSeg);
          if (contadorSeg < 10) {
            segundo.innerText = `0${contadorSeg}`;
          } else {
            segundo.innerText = contadorSeg;
          }
        } else {
          contadorSeg = 0;
          // Incremento de Minuto
          contadorMin++;
          if (contadorMin < 60) {
            if (contadorMin < 10) {
              minuto.innerText = `0${contadorMin}`;
            } else {
              minuto.innerText = contadorMin;
            }
          } else {
            contadorMin = 0;
          }
        }
      }
    };
    // Inicio de Conteo
    incremento = setInterval(conteo, 10);
  });

  
  lap.addEventListener("click", () => {
    let parrafo = document.createElement("p");

    titulo.classList.remove("oculto");
    console.log(titulo);

    parrafo.innerHTML = `<p id="captura">${contador}  :  ${minuto.innerText}  : ${segundo.innerText} . ${milesima.innerText}</p>`;
    vuelta.appendChild(parrafo);
    contador++;
  });

  // Pausar
  stop.addEventListener("click", () => {
    // Mostrar y ocultar botones

    // Mostrar los botones ocultos
    reset.classList.remove("oculto");
    start.innerText = "Resume";
    start.classList.remove("oculto");

    // Ocultar los botones visibles
    stop.classList.add("oculto");
    lap.classList.add("oculto");
    // Detener Conteo
    // clearInterval() es una funcion que detiene el la ejecucion de un setInterval.
    clearInterval(incremento);
  });

  //resume - continuar
  resume.addEventListener("click", () => {
    // Mostrar los botones ocultos
    lap.classList.remove("oculto");
    stop.classList.remove("oculto");
    // Ocultar los botones visibles
    reset.classList.add("oculto");
    resume.classList.add("oculto");
  });

  reset.addEventListener("click", () => {
    // Reiniciar Contadores

    //prueba.removeChild(parrafo);

    titulo.classList.add("oculto");
    vuelta.innerHTML = "";
    reset.classList.add("oculto");
    resume.classList.add("oculto");
    stop.classList.add("oculto");
    start.innerText = "Start";
    start.classList.remove("oculto");
    lap.classList.remove("oculto");
    timer1.removeAttribute("disabled", "false");
    //pantalla_stopwatch.classList.add("oculto");
    clearInterval(incremento);

    // Se limpian los contadores
    contadorMil = 0;
    contadorSeg = 0;
    contadorMin = 0;

    // Se limpian los elementos de pantalla_stopwatch
    milesima.innerText = "00";
    segundo.innerText = "00";
    minuto.innerText = "00";

    contador = 1;

    lap.setAttribute("disabled", "");

    //captura.classList.add("oculto");
    stopwatch.removeAttribute("disabled", "false");
  });

  start2.addEventListener("click", () => {
    let segundo_timer;
    let minuto_timer;
    let hora_timer;

    segundo_timer = timers.value;
    minuto_timer = timerm.value;
    hora_timer = timerh.value;
    let control = 0;
    if ((segundo_timer == "00" || segundo_timer == "0") && (minuto_timer == "00" || minuto_timer== "0") && (hora_timer == "00" || hora_timer=="0")) {
       //alert("termino");
       console.log("HOR",hora_timer,"MIN", minuto_timer,"SEG",segundo_timer);
       clearInterval(decremento);
       
    }else{

    start2.classList.replace("visible", "oculto");
    pause.classList.replace("oculto", "visible");
    delete1.classList.replace("oculto", "visible");
    stopwatch.setAttribute("disabled", true);
    timer1.setAttribute("disabled", true);
    timers.setAttribute("disabled", true);
    timerm.setAttribute("disabled", true);
    timerh.setAttribute("disabled", true);

    };
    
    const conteo_timer = () => {
      //console.log("HOR",hora_timer, "MIN",minuto_timer,"SEG",segundo_timer);
      
      if ((segundo_timer == "00" || segundo_timer == "0") && (minuto_timer == "00" || minuto_timer== "0") && (hora_timer == "00" || hora_timer=="0")) {
        console.log("HOR",hora_timer,"MIN", minuto_timer,"SEG",segundo_timer);
        clearInterval(decremento);
        
        //alert("Ingrese tiempo");
        pause.classList.replace("visible", "oculto");
        delete1.classList.replace("visible", "oculto");

        //pause.classList.replace("oculto", "visible");
        //delete1.classList.replace("oculto", "visible");

        start2.classList.replace("oculto", "visible");
        timer1.removeAttribute("disabled");
        stopwatch.removeAttribute("disabled");
        timers.removeAttribute("disabled");
        timerm.removeAttribute("disabled");
        timerh.removeAttribute("disabled");
      
      }else if ((segundo_timer != 0) && segundo_timer <= 10) {
        
        segundo_timer--;
        console.log("SEG 1 ", segundo_timer);
        timers.value = `0${segundo_timer}`;
        //clearInterval(decremento);
      } else if (segundo_timer != 0 && segundo_timer > 10) {
        
        segundo_timer--;
        console.log("SEG-2 ", segundo_timer);
        timers.value = segundo_timer;
        //clearInterval(decremento);
      } else if (
        minuto_timer != 0 &&
        minuto_timer <= 10 &&
        segundo_timer == 0
      ) {
        segundo_timer = 59;
        timers.value = segundo_timer;
        minuto_timer--;
        timerm.value = `0${minuto_timer}`;
      } else if (minuto_timer != 0 && minuto_timer > 10 && segundo_timer == 0) {
        
        segundo_timer = 59;
        timers.value = segundo_timer;
        minuto_timer--;
        timerm.value = minuto_timer;
      } else if (hora_timer != 0 && hora_timer <= 10 && minuto_timer == 0) {
        
        segundo_timer = 59;
        timers.value = segundo_timer;
        minuto_timer = 59;
        timerm.value = minuto_timer;
        hora_timer--;
        timerh.value = `0${hora_timer}`;
      } else if (hora_timer != 0 && hora_timer > 10 && minuto_timer == 0) {
        
        segundo_timer = 59;
        timers.value = segundo_timer;
        minuto_timer = 59;
        timerm.value = minuto_timer;
        hora_timer--;
        timerh.value = hora_timer;
      }else{
        clearInterval(decremento);
        alert("Tiempo cumplido");
      }
      
    };
      
    decremento = setInterval(conteo_timer, 1000);
      
  });
  
  pause.addEventListener ("click", () =>{

    clearInterval(decremento);
    //console.log("DEC",decremento);
    pause.classList.replace("visible","oculto");
    resume2.classList.replace("oculto","visible");
    

  }) 
  
  resume2.addEventListener("click", ()=>{

    start2.click();

    resume2.classList.replace("visible","oculto");
    

  })

  delete1.addEventListener("click",()=>{
    clearInterval(decremento);
    timerh.value = "00";
    timerm.value = "00";
    timers.value = "00";

    timers.removeAttribute("disabled");
    timerm.removeAttribute("disabled");
    timerh.removeAttribute("disabled");

   if (pantalla_stopwatch.classList == "") {
      pantalla_stopwatch.classList.add("oculto");
      //alert("la clase de pantalla_stopwatch es vacio");
   }
    pantalla_stopwatch.classList.replace("visible", "oculto");

    lap.classList.replace("visible", "oculto");
    start.classList.replace("visible", "oculto");
    start2.classList.replace("oculto", "visible");
    pantalla_timer.classList.replace("oculto", "visible");
    timerh.classList.replace("oculto", "visible");
    timerm.classList.replace("oculto", "visible");
    timers.classList.replace("oculto", "visible");
    dospuntos1.classList.replace("oculto", "visible");
    dospuntos2.classList.replace("oculto", "visible");
    resume2.classList.replace("visible","oculto");
    delete1.classList.replace("visible","oculto");
    pause.classList.replace("visible","oculto");
    stopwatch.removeAttribute("disabled");   
  });

  timer1.addEventListener("click", () => {
    timerh.value = "00";
    timerm.value = "00";
    timers.value = "00";

    timers.removeAttribute("disabled");
    timerm.removeAttribute("disabled");
    timerh.removeAttribute("disabled");

    hours.classList.remove("oculto");
    minutes.classList.remove("oculto");
    seconds.classList.remove("oculto");  

    timer1.classList.remove('text-black');
    timer1.classList.add('text-black');

    



    if (cambio.checked){
        //alert("fondo negro")
        timerh.classList.remove('bg-black');
        timerh.classList.add('bg-white');
        timerh.classList.remove('text-white');
        timerh.classList.add('text-black');
        
        timerm.classList.remove('bg-black');
        timerm.classList.add('bg-white');
        timerm.classList.remove('text-white');
        timerm.classList.add('text-black');

        timers.classList.remove('bg-black');
        timers.classList.add('bg-white');
        timers.classList.remove('text-white');
        timers.classList.add('text-black');
        timer1.classList.remove('text-white');
        timer1.classList.add('text-black');

    }else{
      //alert("fondo blanco");
      timerh.classList.remove('bg-white');
      timerh.classList.add('bg-black');
      timerh.classList.remove('text-black');
      timerh.classList.add('text-white');
      
      timerm.classList.remove('bg-white');
      timerm.classList.add('bg-black');
      timerm.classList.remove('text-black');
      timerm.classList.add('text-white');
      
      timers.classList.remove('bg-white');
      timers.classList.add('bg-black');
      timers.classList.remove('text-black');
      timers.classList.add('text-white');

      timer1.classList.remove('text-black');
      timer1.classList.add('text-white');
      
    };
    //timerh.classList.remove('bg-white');
    //timerh.classList.add('bg-black');

    if (pantalla_stopwatch.classList == "" || pantalla_stopwatch.classList=='text-white') {
      pantalla_stopwatch.classList.add("oculto");
      //alert("la clase de pantalla_stopwatch es vacio");
    }
    
    pantalla_stopwatch.classList.replace("visible", "oculto");
    lap.classList.replace("visible", "oculto");
    start.classList.replace("visible", "oculto");
    start2.classList.replace("oculto", "visible");
    pantalla_timer.classList.replace("oculto", "visible");
    timerh.classList.replace("oculto", "visible");
    timerm.classList.replace("oculto", "visible");
    timers.classList.replace("oculto", "visible");
    dospuntos1.classList.replace("oculto", "visible");
    dospuntos2.classList.replace("oculto", "visible");
  });

  cambio.addEventListener("change", ()=>{
    
    if(cambio.checked){
        //alert ("claro");    
        console.log(`ESTOS ES LO QUE SALIO ${cambio}`);
        fondo.classList.remove('bg-black');
        fondo.classList.add('bg-white');
        reloj.classList.remove('text-white');
        reloj.classList.add('text-black');
        minuto.classList.add('text-black');
        segundo.classList.add('text-black');
        milesima.classList.add('text-black');
        pantalla_stopwatch.classList.add('text-white');
        alarma.classList.add('text-black');
        world_clock.classList.add('text-black');
        stopwatch.classList.add('text-black');
        timer1.classList.add('text-black');
        hours.classList.add('text-black');
        minutes.classList.add('text-black');
        seconds.classList.add('text-black');
        captura.classList.add('text-black');
        captura.classList.remove('text-white');
        cinti.classList.add('text-black');
        cinti.classList.remove('text-white');
  
        dospuntos1.classList.add('text-black');
        dospuntos1.classList.remove('text-white');
        dospuntos2.classList.add('text-black');
        dospuntos2.classList.remove('text-white');
  
        span_1.classList.add('text-black');
        span_1.classList.remove('text-white');
        span_2.classList.add('text-black');
        span_2.classList.remove('text-white');
        
        timerh.classList.add('bg-white');
        timerh.classList.remove('bg-black');
        timerh.classList.remove('text-white');
        timerh.classList.add('text-black');
        
        timerm.classList.add('bg-white');
        timerm.classList.remove('bg-black');
        timerm.classList.remove('text-white');
        timerm.classList.add('text-black');
        
        timers.classList.add('bg-white');
        timers.classList.remove('bg-black');
        timers.classList.remove('text-white');
        timers.classList.add('text-black');
  
    }else{
        //alert("oscuro")
        console.log(cambio);
        fondo.classList.remove('bg-white');
        fondo.classList.add('bg-black');
        reloj.classList.remove('text-black');
        reloj.classList.add('text-white');
        minuto.classList.remove('text-black');
        segundo.classList.remove('text-black');
        milesima.classList.remove('text-black');
        pantalla_stopwatch.classList.remove('text-black');
        alarma.classList.remove('text-black');
        world_clock.classList.remove('text-black');
        stopwatch.classList.remove('text-black');
        timer1.classList.remove('text-black');
        timer1.classList.add('text-white');
        hours.classList.remove('text-black');
        minutes.classList.remove('text-black');
        seconds.classList.remove('text-black');
        cinti.classList.remove('text-black');
        cinti.classList.add('text-white');
        captura.classList.remove('text-black');
        captura.classList.add('text-white');
  
        dospuntos1.classList.add('text-white');
        dospuntos1.classList.remove('text-black');
        dospuntos2.classList.add('text-white');
        dospuntos2.classList.remove('text-black');
        
        span_1.classList.add('text-white');
        span_1.classList.remove('text-black');
        span_2.classList.add('text-white');
        span_2.classList.remove('text-black');
  
        timerh.classList.remove('text-black');
        timerh.classList.add('text-white');
        timerh.classList.remove('bg-white');
        timerh.classList.add('bg-black');
        
        timerm.classList.remove('text-black');
        timerm.classList.add('text-white');
        timerm.classList.remove('bg-white');
        timerm.classList.add('bg-black');
        
        timers.classList.remove('text-black');
        timers.classList.add('text-white');
        timers.classList.remove('bg-white');
        timers.classList.add('bg-black');
  
  
    }
    //cambio.style.backgroundColor =;  
  });

};


