function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora <12){
    //BOM DIA!!
    img.src = 'manhã.jpg'
    document.body.style.background = 'blue'
} else if(hora >= 12 && hora < 18){
    //BOA TARDE
    img.src = 'Tarde.jpg'
    document.body.style.background = 'orange'
} else {
    //BOA NOITE!!
    img.src = 'Noite.jpg'
    document.body.style.background = 'black'
}

}