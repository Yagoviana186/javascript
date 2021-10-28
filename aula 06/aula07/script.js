function contar() {
     let ini = document.getElementById ('txti')
     let fim=  document.getElementById ('txtf')
     let passo = document.getElementById ('txtp')

     if (ini.nodeValue.length==0 && fim.nodeValue.length == 0 && passo.nodeValue.length == 0)
     window.alert('[ERRO] Faltam dados!')


}else {
    resizeBy.innerHTML - 'contador'
    let i =Number (ini.value)
    let f = Number (fim.value)
    let p  = Number (passo.value)

    for(let c = i; c <= f; c += p){
        resizeBy.innerHTML += '${c}'
    }
    


}
