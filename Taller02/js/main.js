//Ejercicio 1
function ejercicio1() {
    document.getElementById("enunciado").innerHTML = `
    <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio
    original y su total con descuento. El descuento lo hace en base a la clave,
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
    en del 20% (sólo existen dos claves).</p>
    
    <input type="button" value="Calcular Descuento" onclick="calcularDescuento()">
    `;

}

function calcularDescuento() {
    var producto, clave, precioOriginal;
    var descuento = 0, total;

    producto = prompt("Ingrese el nombre del producto:");
    clave = prompt("Ingrese la clave (01 o 02):");
    precioOriginal = Number(prompt("Ingrese el precio original:"));

    if (clave === "01") {
        descuento = precioOriginal * 0.10;
    } else if (clave === "02") {
        descuento = precioOriginal * 0.20;
    } else {
        alert("Clave inválida. Solo existen las claves 01 y 02.");
        return;
    }

    total = precioOriginal - descuento;

    document.getElementById("resultado").innerHTML =
        "Producto: " + producto +
        "<br>Clave: " + clave +
        "<br>Precio original: $" + precioOriginal +
        "<br>Descuento: $" + descuento +
        "<br>Total con descuento: $" + total;
}

//Ejercicio 2
function ejercicio2() {
    document.getElementById("enunciado").innerHTML = `
    <p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas,
    precio de las camisas 25000. Si se compran tres camisas o más se aplica
    un descuento del 20% sobre el total de la compra y si son menos de tres
    camisas un descuento del 10%</p>
    
    <input type="button" value="Calcular Total" onclick="calcularTotal()">
    `;
}

function calcularTotal() {
    var cantidad, precioCamisa, total, descuento;

    precioCamisa = 25000;
    cantidad = Number(prompt("Ingrese la cantidad de camisas a comprar: "));

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor a cero.");
        return;
    }

    total = cantidad * precioCamisa;

    if (cantidad >= 3) {
        descuento = total * 0.20;
    } else {
        descuento = total * 0.10;
    }

    document.getElementById("resultado").innerHTML =
        'Precio por camisa: $' + precioCamisa +
        '<br>Cantidad: ' + cantidad +
        '<br>Total: $' + total +
        '<br>Descuento aplicado: $' + descuento +
        '<br>Total a pagar: $' + (total - descuento);
}

// Ejercicio 3
function ejercicio3() {
    document.getElementById("enunciado").innerHTML = `
    <p>En un supermercado se hace una promoción, mediante la cual el cliente
    obtiene un descuento dependiendo de un número que se escoge al azar los
    numeros deben de estar entre 1 y 10. Si el número escogido es menor que
    10 el descuento es del 15% sobre el total de la compra, si es menor o igual
    a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</p>

    <input type="button" value="Calcular Descuento" onclick="calcularDescuentoSupermercado()">
    `;
}

function calcularDescuentoSupermercado() {
    var totalCompra, numAzar, descuento;
    totalCompra = Number(prompt("Ingrese el total de la compra: "));
    numAzar = Number(prompt("Ingrese un numero al azar entre 1 y 10: "));

    if (numAzar < 1 || numAzar > 10) {
        alert ("Numero invalido. Debe ser entre 1 y 10.");
        return;
    }

    if (numAzar < 5) {
        descuento = totalCompra * 0.20;
    } else if (numAzar < 10) {
        descuento = totalCompra * 0.15;
    } 
    document.getElementById("resultado").innerHTML =
        'Total de la compra: $' + totalCompra +
        '<br>Número al azar: ' + numAzar +
        '<br>Descuento de: ' + (numAzar < 5 ? '20%' : '15%') +
        '<br>Descuento aplicado: $' + descuento +
        '<br>Total a pagar: $' + (totalCompra - descuento);
}

//Ejercicio 4
function ejercicio4() {
    document.getElementById("enunciado").innerHTML = `
    <p>Calcular el número de pulsaciones que debe tener una persona por cada 10
    segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es
    femenino es:
    
    <br>num. pulsaciones ← (220 - edad)/10
    y si el sexo es masculino:
    <br>num. pulsaciones ← (210 - edad)/10
    </p>

    <input type="button" value="Calcular Pulsaciones" onclick="calcularPulsaciones()">
    `;
}

function calcularPulsaciones() {
    var edad, sexo, pulsaciones;
    edad = Number(prompt("Ingrese su edad: "));
    sexo = prompt("Ingrese su sexo (M/F): ").toUpperCase();

    if (sexo === "F") {
        pulsaciones = (220 - edad) / 10;
    } else if (sexo === "M") {
        pulsaciones = (210 -edad) / 10;
    } else {
        alert("Sexo inválido. Ingrese 'M' para masculino o 'F' para femenino.");
        return;
    }

    document.getElementById("resultado").innerHTML = 
        'Edad: ' + edad +
        '<br>Sexo: ' + sexo +
        '<br>Pulsaciones: ' + pulsaciones;
}

//Ejercicio 5
function ejercicio5() {
    document.getElementById("enunciado").innerHTML = `
    <p>Elabore un algoritmo que lea un número negativo e imprima el número y el
    positivo del mismo.</p>

    <input type="button" value="Calcular Positivo" onclick="calcularPositivo()">
    `;
}

function calcularPositivo() {
    var numero, positivo;
    numero = Number(prompt("Ingrese un numero negativo: "));

    if (numero >= 0) {
        alert("El numero ingresado no es negativo. Por favor ingrese un numero negativo.");
        return;
    }
    positivo = Math.abs(numero);

    document.getElementById("resultado").innerHTML =
        'Numero ingresado: ' + numero +
        '<br>Numero positivo: ' + positivo;
}

//Ejercicio 6
function ejercicio6() {
    document.getElementById("enunciado").innerHTML = `
    <p> Hacer un algoritmo que permita pasar de kilogramos a gramos y toneladas.</p>

    <input type="button" value="Convertir Unidades" onclick="convertirUnidades()">
    `;
}

function convertirUnidades() {
    var kilogramos, gramos, toneladas;
    kilogramos = Number(prompt("Ingrese el peso en kilogramos:"));

    gramos = kilogramos * 1000;
    toneladas = kilogramos / 1000;

    document.getElementById("resultado").innerHTML =
        'Peso en kilogramos: ' + kilogramos +
        '<br>Peso en gramos: ' + gramos +
        '<br>Peso en toneladas: ' + toneladas;
}

//Ejercicio 7
function ejercicio7() {
    document.getElementById("enunciado").innerHTML = `
    <p>Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto
    cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener
    la respuesta.</p>

    <input type="button" value="Calcular Costo" onclick="calcularCostoGalletas()">
    `;
}

function calcularCostoGalletas() {
    var cantidadGalletas, costoPorGalleta, totalCosto;
    cantidadGalletas = Number(prompt("Ingrese la cantidad de galletas: "));
    costoPorGalleta = 3500 / 15;

    totalCosto = cantidadGalletas * costoPorGalleta;

    document.getElementById("resultado").innerHTML =
        'Cantidad de galletas: ' + cantidadGalletas +
        '<br>Costo por galleta: $' + costoPorGalleta.toFixed(2) +
        '<br>Total a pagar: $' + totalCosto.toFixed(2);
}

//Ejercicio 8
function ejercicio8() {
    document.getElementById("enunciado").innerHTML = `
    <p>Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de
    cuadernos?. Elabore un algoritmo para hallar la respuesta correcta.</p>

    <input type="button" value="Calcular Costo" onclick="calcularCostoCuadernos()">
    `;
}

function calcularCostoCuadernos() {
    var cantidadCuadernos, costoPorCuaderno, totalCosto;
    cantidadCuadernos = Number(prompt("Ingrese la cantidad de cuadernos: "));
    costoPorCuaderno = 75000 / 15;

    totalCosto = cantidadCuadernos * costoPorCuaderno;

    document.getElementById("resultado").innerHTML =
        'Cantidad de cuadernos: ' + cantidadCuadernos +
        '<br>Costo por cuaderno: $' + costoPorCuaderno.toFixed(2) +
        '<br>Total a pagar: $' + totalCosto.toFixed(2);
}

//Ejercicio 9
function ejercicio9() {
    document.getElementById("enunciado").innerHTML = `
    <p>Realizar un programa que cuente de 1 a 200 e imprima en pantalla los
    números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva
    hasta 20 e imprima los divisibles por 8.</p>

    <input type="button" value="Contar Divisibles" onclick="contarDivisibles()">
    `;
}

function contarDivisibles() {
    var divisiblesPor6 = [];
    var divisiblesPor8 = [];

    for (var i  = 1; i <= 200; i++) {
        if (i % 6 === 0) {
            divisiblesPor6.push(i);
        }
    }

    for (var j = 200; j >= 20; j--) {
        if (j % 8 === 0) {
            divisiblesPor8.push(j);
        }
    }

    document.getElementById("resultado").innerHTML =
        'Numeros divisibles por 6 entre 1 y 200: ' + divisiblesPor6.join(', ') +
        '<br>Numeros divisibles por 8 entre 200 y 20: ' + divisiblesPor8.join(', ');
}

//Ejercicio 10
function ejercicio10() {
    document.getElementById("enunciado").innerHTML = `
    <p>Realizar un programa que capture el nombre de dos personas y las fechas
    de nacimiento con cada campo por separado día, mes y año y calcule la
    edad de dos personas diferentes y diga cuál de ellos es mayor.</p>

    <input type="button" value="Calcular Edad" onclick="calcularEdad()">
    `;
}

function calcularEdad() {
    var nombre1, nombre2, dia1, mes1, año1, dia2, mes2, año2;
    nombre1 = prompt("Ingrese el nombre de la primera persona: ");
    dia1 = Number(prompt("Ingrese el día de nacimiento de " + nombre1 + ": "));
    mes1 = Number(prompt("Ingrese el mes de nacimiento de " + nombre1 + ": "));
    año1 = Number(prompt("Ingrese el año de nacimiento de " + nombre1 + ": "));
    nombre2 = prompt("Ingrese el nombre de la segunda persona: ");
    dia2 = Number(prompt("Ingrese el día de nacimiento de " + nombre2 + ": "));
    mes2 = Number(prompt("Ingrese el mes de nacimiento de " + nombre2 + ": "));
    año2 = Number(prompt("Ingrese el año de nacimiento de " + nombre2 + ": "));

    var edad1 = calcularEdadPersona(dia1, mes1, año1);
    var edad2 = calcularEdadPersona(dia2, mes2, año2);

    var mayor = edad1 > edad2 ? nombre1 : nombre2;
    document.getElementById("resultado").innerHTML = 'La persona mayor es: ' + mayor;
}

//Ejercicio 21
function ejercicio21() {
    document.getElementById("enunciado").innerHTML = `
    <p>Determinar el promedio de una lista 20 de números positivos.</p>

    <input type="button" value="Calcular Promedio" onclick="calcularPromedio()">
    `;
}

function calcularPromedio() {
    var numInicial, suma, promedio;
    numInicial = Number(prompt("Ingrese un número inicial: "));

    document.getElementById("resultado").innerHTML = 'el numero inicial fue: ' + numInicial;

    con = 1;
    suma = 0;
    while (con <= 20) {
        suma = suma + numInicial;
        con++;
        numInicial++;
    }

    promedio = suma / 20;

    document.getElementById("resultado").innerHTML += '<br>el numero final fue: ' + numInicial;
    document.getElementById("resultado").innerHTML += '<br>el promedio es: ' + promedio;
}