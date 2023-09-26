let amigo = {nome: 'José',
 sexo: 'M',
 peso:85.4,
engordar(p = 0){
        console.log('testando')
        this.peso += p
    }
   
}
amigo.engordar(2)//fez o amigo aumentar 2kg
console.log(typeof amigo)
console.log(amigo) 
