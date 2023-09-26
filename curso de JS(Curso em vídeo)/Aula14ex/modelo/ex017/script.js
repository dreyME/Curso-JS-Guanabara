function gerarTabu(){
    let nTabu = document.getElementById('nTabu')
    let selTab = document.getElementById('selTab')
    
    if(nTabu.value.length == 0){
        alert('[ERRO] Por favor, insira um número!')
    } else{
        num = Number(nTabu.value)
        let c = 1
        selTab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab ${c}`
            selTab.appendChild(item)
            c++
        }
    }


}