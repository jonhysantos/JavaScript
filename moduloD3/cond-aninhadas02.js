let agora = new Date()
let day = agora.getDate()
let month = agora.getMonth()
let years = agora.getFullYear()
let hora = agora.getHours()
let minutos = agora.getMinutes()
console.log(`${day}/${month}/${years}`)
console.log(`Agora são ${hora}:${minutos}`)
if(hora <= 5){
    console.log('Boa madrugada')
}else if(hora <= 12){
    console.log('Bom dia')
}else if(hora <= 18) {
    console.log('Boa tarde')
}else if(hora <= 23){
    console.log('Boa noite')
}
