
// let country = 'nigeria'
// let info = {
//     name: 'Daniel',
//     age: 2 , 
//     country : 'USA'
// }

// info.name
// console.log(info['name'])

// console.log(info)

// console.log(country)


let score2 = '80'
score2 = Number(score2)

console.log(typeof(score2))

let place = 'i am not from'
console.log(place + ' ' + country)

let wan = place + ' ' + country

let thatText = document.getElementById('yh')
thatText.innerHTML = wan


let text = '         couple of characters     '
console.log(text.length)
console.log(text.lastIndexOf('c'));
console.log(text.includes(' char'))
console.log(text.startsWith('f'));
console.log(text.endsWith('s'));
// console.log(text.trimEnd())
console.log(text.padStart(36 , '00'));
let himrat = text.split(" ")
console.log(text.split(" "))
console.log(himrat.join("-"));

console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.slice(14 , 18))