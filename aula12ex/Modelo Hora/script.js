function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`  

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "imagens/fotomanha.png"
        document.body.style.background = 'rgb(50,100,190)'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE
        img.src = "imagens/fototarde.png"
        document.body.style.background = 'grey'
    } else {
        //BOA NOITE
        img.src = "imagens/fotonoite.png"
        document.body.style.background = 'rgb(130,150,190)'
    }    
}    
    
