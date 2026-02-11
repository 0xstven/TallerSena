function mostrar(dato){
    for (var i = 1; i <= 7; i++) {
        document.getElementById(`ejercicio${i}`).style.display = "none";
    }
    document.getElementById(`ejercicio${dato}`).style.display = "block";
}

//Ejercicio 1
function ejercicio1(){
    var numeros = [4, 8, 15, 16, 23];

    console.log(numeros);

    document.getElementById("resultado").innerHTML =
        `Valores del arreglo: ${numeros.join(", ")}`;
}

//Ejercicio 2
function ejercicio2(){
    var numeros = [10, 20, 30, 40, 50, 15, 25, 35, 45, 55];
    var suma = 0;

    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    var media = suma / numeros.length;

    document.getElementById("resultado").innerHTML =
        `La media del arreglo es: ${media}`;
}

//Ejercicio 3
function ejercicio3(){
    var tamanio = Number(prompt("Ingrese el tamaño del arreglo:"));
    var numero = Number(prompt("Ingrese el número para los múltiplos:"));

    var arreglo = [];
    llenarMultiplo(arreglo, tamanio, numero);
    mostrarArreglo(arreglo);
}

function llenarMultiplo(arr, tamanio, numero){
    for (var i = 0; i < tamanio; i++) {
        arr[i] = numero * (i + 1);
    }
}

function mostrarArreglo(arr){
    document.getElementById("resultado").innerHTML =
        `Arreglo generado: ${arr.join(", ")}`;
}

//Ejercicio 4
function ejercicio4(){
    var numeros = [5, 8, 3, 8, 10, 2, 8, 7, 1, 8];
    var buscar = Number(prompt("Ingrese el número a buscar:"));
    var posiciones = "";

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] === buscar) {
            posiciones += i + " ";
        }
    }

    document.getElementById("resultado").innerHTML =
        posiciones === ""
        ? `El número no se encuentra en el arreglo.`
        : `El número ${buscar} se encuentra en las posiciones: ${posiciones}`;
}

//Ejercicio 5
function ejercicio5(){
    var N = Number(prompt("Ingrese un número impar:"));

    if (N % 2 === 0) {
        document.getElementById("resultado").innerHTML =
            `El número debe ser impar.`;
        return;
    }

    var numeros = [];

    for (var i = 0; i < N; i++) {
        numeros[i] = Math.floor(Math.random() * 100) + 1;
    }

    var centro = Math.floor(N / 2);

    document.getElementById("resultado").innerHTML =
        `Arreglo: ${numeros.join(", ")}
         <br>Valor central: ${numeros[centro]}`;
}

//Ejercicio 6
function ejercicio6(){
    var matriz = [
        [3, 5, 0],
        [4, 4, 0],
        [6, 2, 0],
        [7, 1, 0]
    ];

    var texto = "";

    for (var i = 0; i < matriz.length; i++) {
        matriz[i][2] = matriz[i][0] + matriz[i][1];
        texto += `${matriz[i][0]} + ${matriz[i][1]} = ${matriz[i][2]}<br>`;
    }

    document.getElementById("resultado").innerHTML = texto;
}

//Ejercicio 7
function ejercicio7(){
    var texto = "";

    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            texto += `${i} x ${j} = ${i * j}<br>`;
        }
        texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}
