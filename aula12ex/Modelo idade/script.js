function verificar() {
   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length==0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex") 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src','fotohomemcrianca.png')
            } else if (idade <21) {
                //JOVEN
                img.setAttribute('src','fotohomemjovem.jpg')
            } else if (idade <50) {
                //ADULTO
                img.setAttribute('src','fotohomemjovem.jpg')
            } else if (idade >50) {
                //IDOSO
                img.setAttribute('src','fotohomemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src','fotomulhercrianca.jpg')
            } else if (idade <21) {
                //JOVEN
                img.setAttribute('src','fotomulherjovem.jpg')
            } else if (idade <50) {
                //ADULTO
                img.setAttribute('src','fotomulherjovem.jpg')
            } else if (idade >50){
                //IDOSO
                img.setAttribute('src','fotomulheridosa.jpg')
            }
        }  
      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`  
        res.appendChild(img)
        
        }

    }       
    
