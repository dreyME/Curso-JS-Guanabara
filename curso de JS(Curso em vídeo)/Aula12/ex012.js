var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)
if (hora < 7){
    console.log('Boa madrugada man, vá durmir')
} else if (hora < 12){
    console.log(`Bom dia vagabumdo`)

} else if(hora < 19){
    console.log(`Boa tarde man`)
} else{
    console.log(`Boa noite man`)
}



