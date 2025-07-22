
var txt1 = document.getElementById('dia')
var txt2 = document.getElementById('mes')
var txt3 = document.getElementById('ano')
var img = document.getElementById('imagem')
var escrita = document.getElementById('escrita')
var caixaimage = document.getElementById('boximage')
var caixaescrita = document.getElementById('boxescrita')
var titulo = document.getElementById('titulo')
var dataHoje = new Date()

function search() {
    const dia1 = Number(txt1.value)
    const mes1 = Number(txt2.value)
    const ano1 = Number(txt3.value)
    const data = new Date().getFullYear()
    const aniversarioPessoa = new Date(ano1, mes1, dia1)
    const anoValido = data - ano1

    if(0 == dia1 || 0 == mes1 || 0 == ano1){
        alert('Escolha uma data válida')
        return
    } else if(dia1>31 || mes1 > 12 || ano1 > data ) {
        alert('Escolha uma data válida')
        return
    } else if(aniversarioPessoa > dataHoje || anoValido > 122){
        alert('Escolha uma data válida')
        return
    } else if( dia1 < 0 || mes1 < 0 || ano1 < 0){
        alert('Escolha uma data válida')
        return
    }


    const soma = dia1 + mes1 + ano1

    if(soma%3 == 0){
        img.src = 'bulbasaur.png'
        document.body.style.background = 'rgb(110, 226, 120)'
        caixaescrita.style.color = 'rgba(84, 114, 87, 1)'
        titulo.innerHTML = 'BULBASAUR'
        titulo.style.fontSize = '60px'
        titulo.style.color = 'rgba(84, 114, 87, 1)'

        
        
    } else if(soma%3 == 1) {
        img.src = 'charmander.png'
        document.body.style.background = 'rgb(241, 135, 109)'
        caixaescrita.style.color = 'rgba(134, 86, 74, 1)'
        titulo.innerHTML = 'CHARMANDER'
        titulo.style.fontSize = '60px'
        titulo.style.color = 'rgba(134, 86, 74, 1)'

    } else {
        img.src = 'squirtle.png'
        document.body.style.background = 'rgba(97, 237, 247, 1)'
        caixaescrita.style.color = 'rgba(73, 122, 126, 1)'
        titulo.innerHTML = 'SQUIRTLE'
        titulo.style.fontSize = '60px'
        titulo.style.color = 'rgba(73, 122, 126, 1)'
    }

    document.getElementById('dia').value=''
    document.getElementById('mes').value=''
    document.getElementById('ano').value=''
}