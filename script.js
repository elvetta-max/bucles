/**
 * EJERCICIO 1
 */
console.log("=============== EJERCICIO 1 ===============");
function sumaNumeros() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i
    }
    console.log(`Suma de 1 a 100 = ${suma}`)
}

sumaNumeros();

/**
 * EJERCICIO 2
 */
console.log("=============== EJERCICIO 2 ===============");
function numerosPares() {
    for (let i = 1; i <= 50; i++) {
        i++;
        console.log(i);

    }
}
numerosPares();


/***
 * EJERCICIO 3
 */
console.log("=============== EJERCICIO 3 ===============");
function multiplicarNumero() {

    let numero = prompt(`Ingresa un numero para la multiplicacion`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

multiplicarNumero();

/**
 * EJERCICIO 4
 */
console.log("=============== EJERCICIO 4 ===============");
function cuentaRegresiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i)
    }
}
cuentaRegresiva();

/**
 * EJERCICIO 5
 */
console.log("=============== EJERCICIO 5 ===============");
function factorialNumero() {
    let numero = prompt(`Ingresa un numero para calcular el factorial`);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factrial de ${numero}! = ${factorial}`);
}

factorialNumero();