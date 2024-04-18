


var oneDimentionalArray = [ 1,2,3,4,5 ]
console.log("One Dimentional Array: ",oneDimentionalArray)

var multiDimentionalArray = [
    [1,2,3],
    [4,5,6],
    ['a','b','c']
]
console.log("Multi Dimentional Array: ",multiDimentionalArray)

var staticArray = new Array(3)
staticArray[0] = 'a';
staticArray[1] = 'b';
staticArray[2] = 'c';
console.log("static Array: ",staticArray)

var dynamicArray = []
dynamicArray.push('a')
dynamicArray.push('b')
dynamicArray.push('c')
console.log("dynamic Array: ",dynamicArray)

var sparseArray = [];
sparseArray[0] = 'a';
sparseArray[2] = 'b';
sparseArray[5] = 'c';
console.log(sparseArray)

var associativeArray = {
    'name': 'John',
    'age': 30,
    'city': 'New York',
    true:'23'
};
console.log(associativeArray['name'])
console.log(associativeArray['true'])

var typedArray = new Int32Array(4);
typedArray[0] = 1;
typedArray[1] = 2;
typedArray[2] = 'a';
typedArray[3] = 4;
console.log(typedArray)


var person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " +this.name);
    }
};

person.greet();

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    // accumulator=+currentValue
    // console.log(accumulator , '-----------' , currentValue)
    return accumulator + currentValue;
}, 10);

console.log(sum); // Output: 15



const midTerm = {
    ali:35,
    nabi:45,
    arash:72
}
midTerm.ali = 40
midTerm.arash = 70
midTerm.nabi = "A+"
console.log(midTerm)




const shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 699,
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98,
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
]
// const total = shoppingCart.reduce((total, item) => {
//     return total + item.price
//     // return total + item.price
// }, 0)
// console.log(total)


// const alphabet = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));
// console.log(alphabet); // Out


const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]

  const totalA = alphabet.reduce((total, item) => {
      return total + item
  }, )
  console.log(totalA)









