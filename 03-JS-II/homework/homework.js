// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x>=y){
    return x
  } else{
    return y
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad>=18){
    respuesta= "Allowed"
    return respuesta
  } else {
    respuesta= "Not allowed"
    return respuesta
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status==1){
    conection= "Online"
    return conection
  } else if(status==2){
    conection= "Away"
    return conection
  }else {
    conection= "Offline"
    return conection
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma=="aleman"){
    conection= "Guten Tag!"
    return conection
  } else if(idioma=="mandarin"){
    conection= "Ni Hao!"
    return conection
  } else if(idioma=="ingles"){
    conection= "Hello!"
    return conection
  }else {
    conection= "Hola!"
    return conection
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
    case "blue":
      mensaje= "This is blue"
      return mensaje
      break;
    case "red":
      mensaje= "This is red"
      return mensaje
      break;
    case "green":
      mensaje= "This is green"
      return mensaje
      break;
    case "orange":
      mensaje= "This is orange"
      return mensaje
      break;
    default:
      mensaje= "Color not found"
      return mensaje
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero==10 || numero==5){
    return true
  }else{
    return false
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero >20){
    return true
  }else {
    return false
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if(Number.isInteger(numero)){
    return true
  }else{
    return false
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero%3==0 && numero%5==0){
    mensaje= "fizzbuzz"
    return mensaje
  }else if(numero%3==0){
    mensaje= "fizz"
    return mensaje
  }else if(numero%5==0){
    mensaje= "buzz"
    return mensaje
  }else {
    mensaje= numero
    return mensaje
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if(num1==0 || num2==0 || num3==0){
    mensaje="Error"
    return mensaje
  }else{
    if(num1<0 || num2<0 || num3<0){
      mensaje="Hay negativos"
      return mensaje
    }else{
      if(num1>num2 && num1>num3){
        mensaje="Número 1 es mayor y positivo"
        return mensaje
      }else{
        if(num3>num1 && num3>num2){
          num3++
          return num3
        }else{
          return false
        }
      }
    }
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
 primo=[]
  for(i=0;i<=numero;i++){
    if(numero%i==0){
      primo.push(i)
    }

  }
  if(primo.length==2){
    return true
  }else{
    return false
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor==true){
    mensaje = "Soy verdadero"
    return mensaje
  }else if(valor==false){
    mensaje = "Soy falso"
    return mensaje
  }else{
   return
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  numero=[]
  for(i=0; i<=10; i++){
    multiplicar= 6*i
    numero.push(multiplicar)
  }
  return numero
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  cambio=numero.toString()
  cantidad=cambio.length
  if(cantidad==3){
    return true
  }else {
    return false
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  i=0
  do {
   numero=numero+5;
    i++;
  }
  while (i < 8);
  return numero
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
