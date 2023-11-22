/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
      // var primerElmento = array.shift();
      //    return primerElmento;
   return array[0];
   }

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // var ultimoElemento = array.pop();
   //    return ultimoElemento;
   return array.pop("");
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
      return  array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   // for (let i = 0; i < array.length; i++) {
   //    array[i] +=1;
   // }
   //    return array;

      return array.map(num => {return num +1});
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let agregarAlFinal = array.push(elemento);
      return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let agregarAlInicio = array.unshift(elemento);
      return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
      return palabras.join(" ");
   }

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   //   // return array.includes(elemento);
   //   let estaElElemento = false;

   //   for (let i = 0; i < array.length; i++) {
   //      if (array[i] === elemento) {
   //       estaElElemento = true;
   //      }
   //    }
   //    return estaElElemento;
      const incluyeElemento = array.includes(elemento);
      if (incluyeElemento != 0) {return true} else return false;
}
   

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
      var numeros = 0;
   
      for (let i = 0; i < arrayOfNums.length; i++) {
         numeros += arrayOfNums[i];         
      }
      return numeros;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var numeros = 0;
   
      for (let i = 0; i < resultadosTest.length; i++) {
         numeros += resultadosTest[i];         
      }
      return numeros / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      // let numeroMasGrande = 0;

      // for (let i = 0; i < arrayOfNums.length; i++) {
      //    if (arrayOfNums[i] > numeroMasGrande) {
      //       numeroMasGrande = arrayOfNums[i]
      //    }
      // }
      // return numeroMasGrande;
      return Math.max(...arrayOfNums)
   }

   //**Debo reforzar mas este tipo de ejercicios. No me quedo claro */


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   } else {
   let resultado = 1;
      for (let i = 0; i < arguments.length; i++) {
         resultado = resultado * arguments[i];
      }
      return resultado;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  var contador = 0;

  for (let i = 0; i < array.length; i++) {
   if (18 < array[i]) {
      // contador = contador + 1;
      // contador+=1;
      contador++
      } 
   }
   return contador;

   // let arr = [];

   // for (let i = 0; i < array.length; i++) {
   //    if (18 < array[i]) {
   //       arr = array.push(array[i]);
   //    }
   // } 
   // return arr;
   /*
   const arrayMayorA18 = array.filter((i) => >18);
   
   return arrayMayorA18.length; 
   */
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
         if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
         return "Es dia laboral";
      // switch (numeroDeDia) {
      //    case 1:
      //    case 7:
      //       return "Es fin de semana";
      //    case 2:
      //    case 3:
      //    case 4:
      //    case 5:
      //    case 6:
      //       return "Es dia laboral";
      //    default: return "numero invalid"
      }


function empiezaConNueve(num) { 
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // let empiezaConNueve = num.toString();
   // if (empiezaConNueve.charAt(0) === '9') return true;
   // return false;
   /*  let strNum = num.toString();
   return strNum[0] === "9?";*/

   return num.toString()[0] === '9' ? true : false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
    return array.every(elem => elem === array[0]);
       
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
      const mesesPerdidos = ["Enero", "Marzo", "Noviembre"];
      const mesesEncontrados = array.filter((mes => mesesPerdidos.includes(mes)));

      if (mesesEncontrados.length === mesesPerdidos.length) return mesesEncontrados;
      return "No se encontraron los meses pedidos";
      }


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   // ESTO ES SOLO PARA MI: es como hacer una tabla de cualquier numero y hasta cualquier limite
   // function generarTabla(multiplicando, limite) {
   //    const tabla =[];
   //    for (let multiplicador = 0; multiplicador <= limite; multiplicador++) {
   //       tabla.push(multiplicando * multiplicador;
   //    } return tabla;
   // }
   var tabla = [];
     for (let i = 0; i <= 10; i++) {
      tabla.push(6 * i);
   } return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
      return array.filter(valor => valor > 100);
      /* 
      let mayorACien = [];
      for (i = 0; i < array.length; i++) {
         if (array[i] > 100) mayorACien.push(array[i]);
         return mayorACien;
      }*/
   }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   let almacen = [];
           
         for (let i = 0; i < 10; i++) {
            (num = num + 2); 
            almacen.push(num);
                          
            if (i === num) {
              return ("Se interrumpió la ejecución");
               break;
            }
         }  
         return (almacen);
  }



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
      let arr = [];
   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         continue;
        } 
      num += 2;
      arr.push(num);
   }
   return arr;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
}
