function soma(casaDecimal, numeros) {
    var soma = 0
    for(var n = 0; n < numeros.length; n++){
        soma += numeros[n]
    }
   return soma.toFixed(casaDecimal)
}

function subtracao(casaDecimal, numeros) {
   var subtracao = numeros[0] // pega o primeiro valor como positivo
   for(var n = 0; n < numeros.length; n++){
    subtracao -= numeros[n] //subtrai primeiro valor com o próximo valor e iguala a variável com o valor da subtração.
   }
  return subtracao.toFixed(casaDecimal)
}

function retirarEDoNumero(numero) {
    return String(numero).replace('e', '')
}

function textoParaNumero(funcaoDeRetirarEDoNumber, numeros) {
    let newArray = []
    for (let index = 0; index < numeros.length; index++) {
        const numeroLimpo = funcaoDeRetirarEDoNumber(numeros[index])
        newArray.push(Number(numeroLimpo))
    }
    return newArray
}

function calculadora(tipo, casaDecimal, ...numeros) {
    switch(tipo) {
        case '+':
            return soma(casaDecimal, textoParaNumero(retirarEDoNumero, numeros))
        case '-':
            return subtracao(casaDecimal, textoParaNumero(retirarEDoNumero, numeros))
        default:
            return 0
    }
}



console.log(calculadora('+', 2, '2', '3.202020201201111e','e',5,'6'))