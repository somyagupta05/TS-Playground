// it is buld in type that allows you to work with numbers that are larger than the rang supported by th regukar number type.

// BigInt literals are written by appending the n suffix to an integer literal

// in js we cant read the whole numbers beyond 2 raise to 53

// console.log(2**53)

const maxnumber=Number.MAX_SAFE_INTEGER
console.log(maxnumber)

var bignumber:bigint=9007199254740992n
console.log(bignumber)

var anotherbigNumber:bigint=BigInt("9007199254740992")
console.log(anotherbigNumber)

var sum2=bignumber+anotherbigNumber
console.log(sum2)
var diff=bignumber-anotherbigNumber
console.log(diff)