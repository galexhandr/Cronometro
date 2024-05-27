export function Reloj(){
    // Ejecutamos una funcion asincrona para capturar la hora actual cada segundo.
    setInterval(()=>{
        // Capturamos la hora actual.
        let horaActual = new Date();
        let tiempo = [
            horaActual.getHours(),
            horaActual.getMinutes(),
            horaActual.getSeconds(),
            horaActual.getMilliseconds(),
        ];
        // Añadimos la hora actual al parrafo.
        document.getElementById("reloj").innerText = `${horaActual.toLocaleTimeString()}`;
          //document.getElementById("reloj").innerText = `${horaActual.toTimeString()}`;
    },1000);
};