let num = document.querySelector('input#fnum')
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let v = []
function isNumero(n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return  true
    }else{
        return false
    }
}
function adicionar(){
    if (isNumero(num.value)&& !inLista(num.value,v)){
       v.push(Number(num.value))
       let item = document.createElement(`option`)
        item.text = `valor adicionado foi ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ``        
    } else{
        window.alert(`valor invalidor`)
    }
    num.value= ""
    num.focus()
}

function finalizar(){
    if(v.length == 0 ) {
        window.alert(`adicione valores antes de finalizar!`)
    }else{
        let tot = v.length
        let maior = v[0]
        let menor = v[0]
        let soma = 0
        let media = 0

        for(let pos in v){
            soma += v[pos]
            if(v[pos]>maior)
                maior= v[pos]
            if (v[pos]<menor)
                menor = v[pos]
        }
        media = soma/ tot
        res.innerHTML=``
        res.innerHTML+=`<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores ,temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}</p>`
    
    }

}