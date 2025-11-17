function verificarNivel() {

    let nombreEmpleado = prompt("Ingresa el nombre del empleado: ");
    let sueldo = parseFloat(prompt("Ingresa el sueldo del empleado: "));
    let añosEnEmpresa = parseInt(prompt("¿Cuántos años lleva en la empresa?"));

    let mensaje;

    console.log("Nombre del empleado:", nombreEmpleado);
    console.log("Sueldo:", sueldo);
    console.log("Años en la empresa:", añosEnEmpresa);

    if (añosEnEmpresa > 10) {
        mensaje = `
            <p>El empleado ${nombreEmpleado} está en el Nivel 3, lleva más de 10 años en la empresa.</p>
        `;
    } else if (añosEnEmpresa >= 5 && añosEnEmpresa <= 9 && sueldo < 2000) {
        mensaje = `
            <p>El empleado ${nombreEmpleado} está en el Nivel 4, lleva entre 5 y 9 años en la empresa y gana menos de 2000.</p>
        `;
    } else if (sueldo < 500 && añosEnEmpresa < 4) {
        mensaje = `
            <p>El empleado ${nombreEmpleado} está en el Nivel 1, gana menos de 500 y lleva menos de 4 años en la empresa.</p>
        `;
    } else if (sueldo >= 501 && sueldo <= 1000 && añosEnEmpresa < 4) {
        mensaje = `
            <p>El empleado ${nombreEmpleado} está en el Nivel 2, su sueldo está entre 501 y 1000 y lleva menos de 4 años en la empresa.</p>
        `;
    } else {
        mensaje = `
            <p>El empleado ${nombreEmpleado} está en el Nivel 0, no cumple con ninguna de las condiciones.</p>
        `;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje;
}