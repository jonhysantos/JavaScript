function carregar(){
    let msg = document.querySelector('#msg')
    let imagem = document.querySelector('#imagem')
    let msg2 = document.querySelector('.msg2')
    let agora = new Date()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora}:${min}</p>`
    if(hora > 0 && hora < 12){
        // bom dia
        msg2.innerHTML = ' Bom dia '
        imagem.style.background = 'url(./imagens/morning) center center / cover no-repeat '
    }else if (hora >= 12 && hora <18) {
        // Boa tarde
        msg2.innerHTML = ' Boa tarde '
        imagem.style.background = 'url(./imagens/afternoon) center center  / cover no-repeat'
    }else {
        // boa noite
        msg2.innerHTML = ' Boa noite '
        imagem.style.background = 'url(./imagens/evening.avif) center center / cover no-repeat'
    }
}