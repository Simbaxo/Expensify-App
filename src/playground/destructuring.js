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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)