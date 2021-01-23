function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if(fano.Value.length==0 || Number (fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    else {
        var fsex = document.getElementsByName("radsex") 
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
        else if (fsex[1].checked) {
            gênero = 'Mulher'
        }  
    
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos  ${gênero} com ${idade} anos.'
        }
    }       
    }
}