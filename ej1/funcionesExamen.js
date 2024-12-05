const curiosos = [];
let numero = 1;

while (curiosos.length < 5) {
    if (esCurioso(numero)) {
        curiosos.push(numero);
    }
    numero++;
}

function esCurioso(n) {
    let sumaCubos = 0;
    let digitos = n.toString().split("");

    for (let digito of digitos) {
        sumaCubos = sumaCubos + Math.pow(parseInt(digito), 3);
    }

    return n == sumaCubos;
}

alert("Los 5 primeros numeros curiosos son: " + curiosos)

