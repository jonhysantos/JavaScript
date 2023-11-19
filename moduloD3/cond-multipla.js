let agora = new Date()

let diasem = agora.getDay()
diasem = 'jonhy'
switch(diasem){
    case 'jonhy':
        console.log('bonitão')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('error dia inexistente')
        break   
}