let amigo = {nome:"jose",
sexo:'m',
peso:"50",
engordar(p=0){
    console.log(`engordou`)
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo} peso ${amigo.peso}Kg`)