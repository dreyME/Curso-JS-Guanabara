function botaoClicar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpass')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido!! seu boxta. CONSIDERANDO PASSO COMO "1"')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`       
    }
    
}