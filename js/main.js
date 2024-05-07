let num1 = parseInt(prompt("ingresa el primer numero"));
let num2 = parseInt(prompt("ingresa el segundo numero"));
let operacion = parseInt(prompt("Selecciona una operacion: \n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division"))

function calcular(numero1, numero2, operacionMatematica){
    switch (operacionMatematica) {
        case 1:
            return numero1 + numero2;
        case 2:
            return numero1 - numero2;
        case 3:
            return numero1 * numero2;
        case 4:
            if (numero2 === 0) {
                return "No se puede dividir por cero"
            }else {
                return numero1 / numero2;
            }
            default:
                return "Opcion invalida";
    }
}

let resultado = calcular(num1, num2, operacion);
alert("El resultado de la operacion es: " + resultado);