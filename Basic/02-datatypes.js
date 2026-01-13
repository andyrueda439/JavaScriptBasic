//Tipos de datos Primitivos en JavaScript
//String o cadena de texto
let name = "Andy"
let nickname = 'CuteAndy'

//Number o numero
let age = 18 //Entero
let height = 1.73 //Decimal

//Boolean o booleano
let isAdult = true
let isChild = false

//Undefined o indefinido
let undefinedValue
console.log(undefinedValue);
//Null o nulo
let nullValue = null

//Symbol o simbolo
let mySymbol = Symbol("mySymbol")

//BigInt o entero grande
let myBigInt = 9007199254741991n
let anotherBigInt = BigInt(9007199254741991)

//Mostrando los tipos de datos 
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof height); //number

console.log(typeof isAdult); //boolean
console.log(typeof isChild); //boolean

console.log(typeof undefinedValue); //undefined

console.log(typeof nullValue); //object (esto es un error historico de JavaScript, typeof convierte null en object)

console.log(typeof mySymbol); //symbol

console.log(typeof myBigInt); //bigint
console.log(typeof anotherBigInt); //bigint
