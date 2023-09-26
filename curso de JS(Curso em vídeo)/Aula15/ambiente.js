let num = [5, 8, 2, 9, 3]
num[5] = 10
num.push(7)
num.length
num.sort()
console.log(num + `\n`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é: ${num[0]} \n`)

for(var pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)

}

for(let pos in num){
    console.log(`Simplificado: A posição ${pos} tem o valor ${num[pos]}`)
}

   let posicao = num.indexOf(8)
   if(posicao == -1){
        console.log('o Valor não foi encontrado!')
   } else{
        console.log(`Na posição ${posicao} está o valor ${num[posicao]} \n`)
   }
