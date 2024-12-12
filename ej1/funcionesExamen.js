const curiosos = [];
let numero = 1;

do{
    if (esCurioso(numero)) {
        curiosos.push(numero);
    }
    numero++;
}while (curiosos.length < 5);

function esCurioso(n) {
    let sumaCubos = 0;
    let digitos = n.toString();

    for (let i = 0; i < digitos.length; i++) {
        let digito = parseInt(digitos[i]);
        sumaCubos += Math.pow(digito, 3);
    }

    return n == sumaCubos;
}


alert("Los 5 primeros numeros curiosos son: " + curiosos)

