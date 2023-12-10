const idade = 0
console.log(`${idade || 'não informado'}`)
// tanto com null ou 0 no aperador || <- (ou) ele consta não informado

const age = 0
console.log(`${age ?? 'não informado'}`)
// Já com o operador nullish -> ?? ele consta não informado caso nulo e 0 caso 0