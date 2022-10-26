let num = [5,4,3,2,1]
console.log(num)
num[5]=6//coloca nessa pssicção
num.push(7)//so coloca no vetor no final
num.length //quanto elementos tem so
num.sort()//organizar de forma crecente
console.log(num)
// console.log(`o vetor possui ${num.length} posicoes`)
 let valors = [8,3,6,4,1,44,6,7,9,3]
// for (let pos=0;pos< valors.length;pos++){
//     console.log(`a posicao ${pos} tem o valor ${valors[pos]}`)
// }
// for (let pos in valors){
//     console.log(`a posicao ${pos} tem o valor ${valors[pos]}`)}
let pos=[1,2,3,4,5,6,7]
let v = pos.indexOf(8) 
if ( v == -1 ){
    console.log(`nao foi encontrado `)
}else{

    console.log(`o valor estar na possiacao ${v} `)
}