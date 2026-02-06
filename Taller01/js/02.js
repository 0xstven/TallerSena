function verificarNumero(){

    let numero = parseInt(prompt("ingrese numero: "));

    let resultado = document.getElementById('resultado');

    if (numero > 0 ){
        resultado.innerHTML = `El numero ${numero} es mayor que 0`;
    } else {
         resultado.innerHTML = `El número ${numero} no es mayor que 0.`;
    }

    console.log(resultado);
}