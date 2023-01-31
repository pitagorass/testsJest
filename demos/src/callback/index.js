/* eslint-disable no-console */
/*
 Callback
 Es una funcion que se envia a otra funcion como argumento
 que posteriormente se invoca dentro de la funcion externa
 para completar algun tipo de rutina o accion.
 Esto en javascript se suele usar para continuar con la ejecucion
 del codigo despues de que se haya completado una operacion asyncrona.

 Se va a encargara la funcion principal de iniciar la ejecucion de cierto codigo
 regularmente siempre es asyncrono.

 Como metafora podemos ver los callback como las carreras de relevos
 donde como lo dice la definicion es una funcion que se envia a otra
 funcion como argumento.
 Supongamos que la funcion principal es un corredor y el callback es su compañero
 quien lo va a relevar dentro de la carrera.

 Nuestra funcion A inicia la carrera y una vez terminando su trayectoria hace el relevo
 la funcion B que en este caso seria nuestro callback, y sera quien se va a encargar de
 terminar la carrera (ejecucion)
 */

function soyUnCallback(data) {
  console.log('Soy el callback, ahora me toca a mi');
  console.log(data);
}

function haciendoUnaPeticionHTTP(callback) {
  console.log('Inicio Peticion HTTP Fake');
  console.log('Continua Peticion HTTP Fake ');
  const data = {
    id: 1,
    username: 'Santiago',
    age: 25,
  };
  callback(data);
}
// Corredor uno  ---->  Corredor Dos
haciendoUnaPeticionHTTP(soyUnCallback);

// Second Part
