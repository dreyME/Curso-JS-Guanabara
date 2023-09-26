console.log('Programa de verificação de nomes de pessoas.')
let nomes = ['Andrey', 'MariaLucia', 'Arthur', 'Junior', 'TiaDora', 'TiaCorrinha']
nomes[5] = 'Andreia'
nomes.sort()//ordena os valores em ordem alfabética ou numérica, do A ao Z e do menor ao maior, quando se trata de numéricos
nomes.push('tuti') //Joga o valor para o ultimo valor do array

if(nomes[5] == 'TiaCorrinha'){
    console.log(`PARABÉNS ${nomes[5]}, FELIZ ANIVERSÁRIO!!!`)
 } else{
    for(let posi in nomes){
        console.log(`O cliente ${nomes[posi]} está na posição ${posi} `)
    } 
}

console.log(nomes)