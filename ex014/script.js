function carregar() {
var tempo = new Date()
var horas = tempo.getHours()
var fundo = document.querySelector('body')
var msg1 = document.getElementById('msg')
msg1.innerHTML = `Agora são ${horas} horas.`
var imgs = document.getElementById('imagem')

if (horas >= 6 && horas <= 12) {
        fundo.style.background = "yellow"
         imgs.src = 'manhã.jpg'
} else if (horas >= 13 && horas <= 18) {
        fundo.style.background = "orange"
         imgs.src = 'tarde.jpg'
} else if (horas > 18 && horas <= 23) {
        fundo.style.background = "grey"
         imgs.src = 'noite.jpg'
} else {
        fundo.style.background = "black"
        imgs.src = 'madrugada.jpg'
         
}
}

