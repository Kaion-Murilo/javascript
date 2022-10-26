function verificar(){

   // window.alert("funcionol")
    var data= new Date()
    var ano= data.getFullYear()
    var fano = document.getElementById("txtano")//"txtano"
    var res = document.querySelector("div#res")
    // res.innerHTML = `detectamos que  ${fano} com ${ano} anos.`
        if (fano.value.length == 0 || Number(fano.value) > ano){//
            window.alert(`[error] verifique os dados e tente novamente`)
        } else{
            // window.alert("funcionol   1")
            var fsex = document.getElementsByName("radsex")
            var idade = ano - Number(fano.value)//
            var genero= '' 
            var img= document.createElement('img')
            img.setAttribute("id",`foto`)
            // res.innerHTML = `detectamos que  ${genero} com ${idade} anos.`
            if (fsex[0].checked){
                genero="homem"
                if (idade>=0 && idade <10){
                    //crianca
                    img.setAttribute(`src`,`foto-bebe-m.png`)
                }else if ( idade<21){
                    //jovem
                    img.setAttribute(`src`,`foto-jovem-m.png`)
                }else if (idade<50){
                    //adulto
                    img.setAttribute(`src`,`foto-adulto-m.png`)
                }else{
                    //idoso
                    img.setAttribute(`src`,`foto-idoso-m.png`)
                }
                
            } else if (fsex[1].checked){
                genero="mulher"
                if (idade>=0 && idade <10){
                    //crianca
                    img.setAttribute(`src`,`foto-bebe-f.png`)
                }else if ( idade<21){
                    //jovem
                    img.setAttribute(`src`,`foto-jovem-f.png`)
                }else if (idade<50){
                    //adulto
                    img.setAttribute(`src`,`foto-adulto-f.png`)
                }else{
                    //idoso
                    img.setAttribute(`src`,`foto-idoso-f.png`)
                }
            }
            res.style.textAlign= 'center'
            res.innerHTML = `detectamos que  ${genero} com ${idade} anos.`  
            res.appendChild(img)     
        }

        
}