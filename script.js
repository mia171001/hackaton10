function contrasenaValida(contrasena) {
    // "2Fj(jjbFsuj"
    // "eoZiugBf&g9"
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
        return true
    }
    return false
}

// FORMA 1
function calcEx1() {
    const ex1InputConstrasena = document.getElementById("ex1-input-contrasena")
    const result = contrasenaValida(ex1InputConstrasena.value)
    alert(result)
    limpiarCamposDeEntrada();
}

// FORMA 2

// const ex1ButtonVerificar = document.getElementById("ex1-button-verificar")
// ex1ButtonVerificar.addEventListener("click", function(){
//     const ex1InputConstrasena =  document.getElementById("ex1-input-contrasena")
//     const result = contrasenaValida(ex1InputConstrasena.value)
//     alert(result)
// })

function calcularImpuestos(edad, ingreso) {

    if (edad >= 18 && ingreso >= 1000) {
        return (ingreso * 0.4)
    } else {
        return 0
    }
}

function calcEx2() {
    const ex2edad = document.getElementById("ex2-input-edad");
    const ex2ingreso = document.getElementById("ex2-input-ingreso");
    const result2 = calcularImpuestos(ex2edad.value, ex2ingreso.value)
    alert(result2)
    limpiarCamposDeEntrada();
}

function bmi(peso, altura) {
    let mc = peso / (altura * altura);
    if (mc < 18.5) {
        return "Bajo de peso"
    }
    if (mc > 18.5 && mc < 24.9) {
        return "Normal"
    }
    if (mc > 25 && mc < 29.9) {
        return "Sobrepeso"
    }
    if (mc >= 30) {
        return "Obeso"
    }
}

function calcEx3() {
    const ex3peso = document.getElementById("ex3-input-peso");
    const ex3altura = document.getElementById("ex3-input-altura");
    const result3 = bmi(ex3peso.value, ex3altura.value)
    alert(result3)
    limpiarCamposDeEntrada();
}

function imprimirArreglo(arr) {
    let resultado = "";
    arr.forEach(element => {
        resultado += element + "\n";
    });
    return resultado;
}

function calcEx4() {
    const miArregloInput = document.getElementById("ex4-input-arreglo").value;
    const miArreglo = miArregloInput.split(',');
    const result4 = imprimirArreglo(miArreglo);
    alert(result4);
    limpiarCamposDeEntrada();
}

function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero < 1000000) {
        return Math.floor(numero / 1000) + "K";
    } else {
        return Math.floor(numero / 1000000) + "M";
    }
}

function calcEx5() {
    const minumber = document.getElementById("ex5-input-like").value;
    const result5 = likes(minumber);
    alert(result5);
    limpiarCamposDeEntrada();
}

function fizzBuzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        return "fizzbuzz"
    } else {
        if (numero % 3 == 0) {
            return "fizz"
        } else {
            if (numero % 5 == 0) {
                return "buzz"
            } else {
                return numero
            }
        }
    }

}

function calcEx6() {
    const n = document.getElementById("ex6-input-mult").value;
    const result6 = fizzBuzz(n);
    alert(result6);
    limpiarCamposDeEntrada();
}

function contarRango(numero1, numero2) {
    let contador = 0;
    for (let i = numero1 + 1; i < numero2; i++) {
        contador++;
    }
    return contador;
}

function calcEx7() {
    const n1 = +(document.getElementById("ex7-input-1").value);
    const n2 = +(document.getElementById("ex7-input-2").value);
    const result7 = contarRango(n1, n2);
    alert(result7);
    limpiarCamposDeEntrada();
}

function sumarRango(numero1, numero2) {
    if (numero1 === numero2) {
        return 0
    }
    let contador = 0;
    for (let i = numero1; i <= numero2; i++) {
        contador += i;
    }
    return contador;
}

function calcEx8() {
    const n1 = +(document.getElementById("ex8-input-1").value);
    const n2 = +(document.getElementById("ex8-input-2").value);
    const result8 = sumarRango(n1, n2);
    alert(result8);
    limpiarCamposDeEntrada();
}

function numeroDeAes(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a' || cadena[i] === 'A') {
            contador++;
        }
    }
    return contador;
}

function calcEx9() {
    const text = document.getElementById("ex9-input").value;
    const result9 = numeroDeAes(text);
    alert(result9);
    limpiarCamposDeEntrada();
}

function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

function calcEx10() {
    const text = document.getElementById("ex10-input-text").value;
    const c = document.getElementById("ex10-input-c").value;
    const result10 = numeroDeCaracteres(text, c);
    alert(result10);
    limpiarCamposDeEntrada();
}

function sumarreglo(arreglo) {
    let numeros = arreglo.split(',').map(Number);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

function calcEx11() {
    const na = document.getElementById("ex11-input-arreglo").value;
    const result11 = sumarreglo(na);
    alert(result11);
    limpiarCamposDeEntrada();
}

function multarreglo(arreglo) {
    let numeros = arreglo.split(',').map(Number);
    let mult = 1;
    for (let i = 0; i < numeros.length; i++) {
        mult *= numeros[i];
    }
    if (arreglo.length == 0) {
        return 1;
    }
    return mult;
}

function calcEx12() {
    const mul = document.getElementById("ex12-input-arreglo").value;
    const result12 = multarreglo(mul);
    alert(result12);
    limpiarCamposDeEntrada();
}

function removeArreglo(arreglo) {
    let numeros = arreglo.split(',').map(Number);
    return numeros.filter(numero => numero !== 0);
}

function calcEx13() {
    const remo = document.getElementById("ex13-input-arreglo").value;
    const result13 = removeArreglo(remo);
    alert(result13);
    limpiarCamposDeEntrada();
}

function sumarArreglo14(arreglo, posicionInicial, posicionFinal) {
    let arr = arreglo.split(',').map(Number);
    if (posicionInicial === posicionFinal) {
        return 0;
    }

    let suma = 0;
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        suma += arr[i];
    }
    return suma;
}

function calcEx14() {
    const arr = document.getElementById("ex14-input-arreglo").value;
    const n1 = document.getElementById("ex14-input-n1").value;
    const n2 = document.getElementById("ex14-input-n2").value;
    const result14 = sumarArreglo14(arr, n1, n2);
    alert(result14);
    limpiarCamposDeEntrada();
}

function transcribir(cadenaADN) {
    let complementoARN = '';
    for (let i = 0; i < cadenaADN.length; i++) {
        let nucleotido = cadenaADN[i];
        switch (nucleotido) {
            case 'G':
                complementoARN += 'C';
                break;
            case 'C':
                complementoARN += 'G';
                break;
            case 'T':
                complementoARN += 'A';
                break;
            case 'A':
                complementoARN += 'U';
                break;
            default:
                // Manejar nucleótidos no válidos
                break;
        }
    }
    return complementoARN;
}

function calcEx15() {
    const cadena = document.getElementById("ex15-input-trans").value;
    const result15 = transcribir(cadena);
    alert(result15);
    limpiarCamposDeEntrada();
}

function capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

function calcEx16() {
    const cad = document.getElementById("ex16-input").value;
    const result16 = capitalizar(cad);
    alert(result16);
    limpiarCamposDeEntrada();
}

function capitalizarpalabras(cadena) {
    // Dividir la cadena en palabras
    let palabras = cadena.split(' ');

    // Iterar sobre cada palabra y capitalizar la primera letra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Unir las palabras nuevamente en una cadena y devolver el resultado
    return palabras.join(' ');
}

function calcEx17() {
    const cadP = document.getElementById("ex17-input").value;
    const result17 = capitalizarpalabras(cadP);
    alert(result17);
    limpiarCamposDeEntrada();
}

function max(arreglo) {
    let numeros = arreglo.split(',').map(Number);
    // Verificar si el arreglo está vacío
    if (numeros.length === 0) {
        return undefined; // Si el arreglo está vacío, retornamos undefined
    }

    let maximo = numeros[0]; // Asignamos el primer elemento del arreglo como el máximo inicial

    // Iterar sobre cada elemento del arreglo
    for (let i = 1; i < numeros.length; i++) {
        // Si encontramos un número mayor que el máximo actual, lo actualizamos
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }

    return maximo; // Retornamos el máximo encontrado
}

function calcEx18() {
    const arr18 = document.getElementById("ex18-input").value;
    const result18 = max(arr18);
    alert(result18);
    limpiarCamposDeEntrada();
}

function min(arreglo) {
    let numeros = arreglo.split(',').map(Number);
    // Verificar si el arreglo está vacío
    if (numeros.length === 0) {
        return undefined; // Si el arreglo está vacío, retornamos undefined
    }

    let minimo = numeros[0]; // Asignamos el primer elemento del arreglo como el máximo inicial

    // Iterar sobre cada elemento del arreglo
    for (let i = 1; i < numeros.length; i++) {
        // Si encontramos un número mayor que el máximo actual, lo actualizamos
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }

    return minimo; // Retornamos el máximo encontrado
}

function calcEx19() {
    const arr19 = document.getElementById("ex19-input").value;
    const result19 = min(arr19);
    alert(result19);
    limpiarCamposDeEntrada();
}

function password(str) {
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    str = str.replace(/a/g, '4');
    str = str.replace(/e/g, '3');
    str = str.replace(/i/g, '1');
    str = str.replace(/o/g, '0');

    return str;
}

function calcEx20() {
    const text = document.getElementById("ex20-input").value;
    const result20 = password(text);
    alert(result20);
    limpiarCamposDeEntrada();
}

function pares(arreglo) {
    if (arreglo.length === 0) {
        return []; // Devolver un arreglo vacío si el arreglo de entrada es vacío
    }
    let numeros = arreglo.split(',').map(Number);
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

function calcEx21() {
    const arre = document.getElementById("ex21-input").value;
    const result21 = pares(arre);
    alert(result21);
    limpiarCamposDeEntrada();
}

function posiciones22(arreglo) {
    if (arreglo.length === 0) {
        return []; // Devolver un arreglo vacío si el arreglo de entrada es vacío
    }
    let posicionesPares = [];
    let numeros = arreglo.split(',').map(Number);
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            posicionesPares.push(i);
        }
    }
    return posicionesPares;
}

function calcEx22() {
    const arr22 = document.getElementById("ex22-input").value;
    const result22 = posiciones22(arr22);
    alert(result22);
    limpiarCamposDeEntrada();
}

function duplicar23(arreglo) {
    if (arreglo.length === 0) {
        return []; // Devolver un arreglo vacío si el arreglo de entrada es vacío
    }
    let arregloDuplicado = [];
    let numeros = arreglo.split(',').map(Number);
    for (let i = 0; i < numeros.length; i++) {
        arregloDuplicado.push(numeros[i] * 2);
    }
    return arregloDuplicado;
}

function calcEx23() {
    const arr23 = document.getElementById("ex23-input").value;
    const result23 = duplicar23(arr23);
    alert(result23);
    limpiarCamposDeEntrada();
}

function empiezanConA(arreglo) {
    if (arreglo.length === 0) {
        return []; // Devolver un arreglo vacío si el arreglo de entrada es vacío
    }
    let palabrasConA = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i][0].toLowerCase() === 'a') {
            palabrasConA.push(arreglo[i]);
        }
    }
    return palabrasConA;
}

function calcEx24() {
    const inputTexto = document.getElementById("ex24-input").value;
    const arreglo = inputTexto.split(',').map(item => item.trim());
    const resultado = empiezanConA(arreglo);
    alert(resultado);
    limpiarCamposDeEntrada();
}

function terminanConS(arreglo) {
    let palabrasConS = [];
    for (let palabra of arreglo) {
        // Verificar si la palabra termina con 's' o 'S'
        if (palabra.endsWith('s') || palabra.endsWith('S')) {
            palabrasConS.push(palabra);
        }
    }
    return palabrasConS;
}

function calcEx25() {
    const inputTexto = document.getElementById("ex25-input").value;
    const arreglo = inputTexto.split(',').map(item => item.trim());
    const resultado25 = empiezanConA(arreglo);
    alert(resultado25);
    limpiarCamposDeEntrada();
}

function imprimirMatriz(m1) {
    m1 = m1.split("'").join('"');
    m1 = JSON.parse(m1);
    console.log(m1);
    let asteriscos = "";
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            asteriscos += "\n" + m1[i][j];
        }
    }
    alert(asteriscos);
    limpiarCamposDeEntrada();
}

function calcEx26() {
    const m1 = document.getElementById("ex26-input-n1").value;
    imprimirMatriz(m1);
}

function numerosAPalabras(n1) {
    n1 = n1.split("'").join('"');
    n1 = JSON.parse(n1);
    const palabras = [
        "cero",
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
    ];
    const resultado = [];
    n1.forEach((numero) => {
        if (numero >= 0 && numero <= 9) {
            resultado.push(palabras[numero]);
        } else {
            resultado.push("Número inválido");
        }
    });
    alert(resultado);
    limpiarCamposDeEntrada();
}
function calcEx27() {
    const n1 = document.getElementById("ex27-input-n1").value;
    numerosAPalabras(n1);
}

function palabrasANumeros(n1) {
    n1 = n1.split("'").join('"');
    n1 = JSON.parse(n1);
    const numeros = {
        cero: 0,
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7,
        ocho: 8,
        nueve: 9,
    };
    const resultado = [];
    n1.forEach((palabra) => {
        if (palabra in numeros) {
            resultado.push(numeros[palabra]);
        } else {
            resultado.push(-1);
        }
    });
    alert(resultado);
    limpiarCamposDeEntrada();
}
function calcEx28() {
    const n1 = document.getElementById("ex28-input-n1").value;
    palabrasANumeros(n1);
}

function numAsteriscos29(arr1) {
    arr1 = arr1.split("'").join('"');
    arr1 = JSON.parse(arr1);
    let asteriscos = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "*") {
            asteriscos++;
        }
    }
    alert(asteriscos);
    limpiarCamposDeEntrada();
}

function calcEx29() {
    const arr1 = document.getElementById("ex29-input-n1").value;
    numAsteriscos29(arr1);
}

function numAsteriscos30(m1) {
    m1 = m1.split("'").join('"');
    m1 = JSON.parse(m1);

    let asteriscos = 0;
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            if (m1[i][j] === "*") {
                asteriscos++;
            }
        }
    }
    alert(asteriscos);
    limpiarCamposDeEntrada();
}

function calcEx30() {
    const m1 = document.getElementById("ex30-input-n1").value;
    numAsteriscos30(m1);
}

function distance(string1, string2) {
    let character = 0;
    let sizeString = 0;
    if (string1.length > string2.length) {
        sizeString = string2.length;
        character = string1.length - string2.length;
    } else {
        sizeString = string1.length;
        character = string2.length - string1.length;
    }
    for (let i = 0; i < sizeString; i++) {
        if (string1[i] != string2[i]) {
            character++;
        }
    }
    alert(character);
    limpiarCamposDeEntrada();
}
function calcEx31() {
    const n1 = document.getElementById("ex31-input-n1").value.trim();
    const n2 = document.getElementById("ex31-input-n2").value.trim();
    distance(n1, n2);
}

function limpiarCamposDeEntrada() {
    // Obtener todos los elementos de entrada
    const inputs = document.querySelectorAll("input");
    // Iterar sobre los elementos de entrada y limpiar sus valores
    inputs.forEach(input => {
        if (input.type === "text" || input.type === "number") {
            input.value = "";
        }
    });
}