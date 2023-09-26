function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.lenght == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute(`id`, `foto`)
        img.setAttribute(`height`, `400px`)
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute(`src`, `bebe-homem.jpg`)
            } else if(idade < 21){
                //Jovem homem
                img.setAttribute(`src`, `jovem-homem.jpg`)
            } else  if(idade < 50){
                //Adulto
                img.setAttribute(`src`, `homem adulto.jpg`)
            } else{
                //Idoso
                img.setAttribute(`src`, `idoso.jpg`)
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute(`src`, `bebe-mulher.jpg`)
            } else if(idade < 21){
                //Jovem
                img.setAttribute(`src`, `jovem-mulher.jpg`)
            } else  if(idade < 50){
                //Adulto
                img.setAttribute(`src`, `mulher adulta.jpg`)
            } else{
                //Idoso
                img.setAttribute(`src`, `idosa.jpg`)
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}