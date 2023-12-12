const user = {
    name: 'Jonhy',
    age: 27,
    nickname: 'Jonitus',
    address: {
        street: 'av atlântica',
        number: 1376,
    },
};

console.log(`${'name' in user}`) // Têm nome em user true
console.log(`${Object.keys(user)}`)// keys chaves do objeto
console.log(`${Object.values(user)}`)// para saber os vakires dentro das chaves-- ELE NÃO ACHOU O ENDEREÇO
console.log(JSON.stringify(Object.values(user))) // com o json ele acha completo
console.log(JSON.stringify(Object.entries(user))) // mostra o objeto dentro de obbjetos


 //   Desestruturação   //

/*
const end = user.address // colocou o end na var end
console.log(JSON.stringify(end))


const {address} = user // desentruturação
console.log(JSON.stringify(address)) 

*/

const {address, age:idade, nickname = 'Alberto'} = user
console.log(JSON.stringify({address,idade, nickname})) // mudei o nome da variável pela desestruturação




