//RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(4))
resulFatorial = fatorial(4)

console.log(` Seu resultado é de ${resulFatorial}`)

