//////////////////////
// Object Destructing
//////////////////////

// const person = {
//   name: 'Andres',
//   age: 27,
//   location: {
//     city: 'Alexandria',
//     temp: 73
//   }
// }

// // const name = person.name
// // const age = person.age
// const { name, age } = person
// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

//////////////////////
// Array Destructing
//////////////////////

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// console.log(`You are in ${address[1]} ${address[2]}.`)

// const [street, city, state, zip] = address
const [, city, state] = address
console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [ coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)