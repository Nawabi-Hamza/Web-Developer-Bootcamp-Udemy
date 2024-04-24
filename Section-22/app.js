console.log("------Section 22------");

// ForEach
/**
 * accepts a clallback function
 * calls the function once per element
 */
console.log("---------------------------ForEach---------------------------");
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.forEach(function (el) {
  if (el % 2 == 0) {
    console.log(el);
  }
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
];
movies.forEach((movie) => {
  console.log(movie);
});


// Map
/**
 * MAP creates a new array with result of calling a callback on every element in array
 */
console.log("---------------------------MAP---------------------------");
const texts = ['rolf','lol','omg','ttly']
const upperCasedTexts = texts.map(function(text) {
  return text.toUpperCase();
});
console.log(upperCasedTexts);   
movies.map((movie)=>{
    console.log(movie.title.toUpperCase())
})
/**
 * arrow function 
 * return new method
 */
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1 
);
console.log(rollDie())
// it return with out using return keyword it work for one expresion
// when we add multiple line it will give us a buetifull error
const add = (a,b)=>( a+b )
console.log(add(2,3))

console.log("Hello")

// setTimeout(async()=>{
  
//     console.log("Welcome after 1s")

// } , 1000)


console.log("Bye ")
console.log("Interval")
let num=1;
const id = setInterval(()=>{
  console.log("Interval runing: ",num++)
},2000)
// Stop Interval 
console.log(id)
clearInterval(id)
/**
 // Filter
 * We can find specific data from array or objects
 */
console.log("----------------------Filter Array & Object------------------------")
const arrayNumbers = [1,2,3,4,5,6,7,8,9];
console.log('Whole Numbers : ',arrayNumbers)
const filterNumber = arrayNumbers.filter( (n) => {
  return n <= 4
})
console.log('Filter numbers : ',filterNumber)

const objectMovies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Amadeus",
    score: 30,
    year: 2024,
  },
  {
    title: "Amadeus",
    score: 99,
    year: 2030,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
];
console.table(objectMovies)
let objMov = objectMovies.filter(m=>{
  return m.title === 'Amadeus' && m.score===99;
})
console.table(objMov)

const goodTitle = objectMovies
                  .filter( m=> m.year>2000)
                  .map(m=>m.title);
console.log(goodTitle)

/**
 * Let's get some practice using the filter method. Write a function called 
 * validUserNames that accepts an array of usernames (strings).  It should
 *  return a new array, containing only the usernames that are less than 10 
 * characters
 * 
 */
function validUserNames(usernames) {
  // your code here
  return usernames.filter( u=>{
      return u.length<10
  })
}
const v =validUserNames(['ali','samim','Hamza jan','Hamza Nawabi','Sameer Noori'])
console.log(v)
// Find


/**
 * (Some ,Every) return boolean true or false
 */
const exams = [ 80,98,92,78,77,84,77]

const eve = exams.every(score=>score>=95)
console.log(eve)

const som = exams.some(score=>score>=95)
console.log(som)

/**
 * Define a function called allEvens that accepts a single array of numbers.
 *   If the array contains all even numbers, return true.  Otherwise, return
 *  false.  Use some or every to help you do this!  (only one of them is 
 * actually useful here)
 * 
 */


function allEvens(numbers){
  return numbers.every( num=> num%2==0)
}

console.log(allEvens([2,4,6,8])) //true
console.log(allEvens([1,4,6,8]) )//false
console.log(allEvens([1,2,3]) )//false



console.log("--------------------Reduce-----------------------")
/**
 * Reduce
 *  executes a reducer function an each element of the array
 * resulting in a single value
 * accumulator , currentvalue 
 */
const prices= [3.9,12,3,43.2,23.4,56]
let total = prices.reduce((prev,next)=>{
  return prev+next
})
console.log(total)
// find minimum price
total = prices.reduce((min,price)=>{
  if(price<min){
    return price
  }
  return min
})
console.log(total)

// FIND best movie
const reMov = objectMovies;
const highestRated = reMov.reduce((bestMovie,currMovie)=>{
  if(currMovie.score>bestMovie.score){
    return currMovie
  }else if(currMovie.score==bestMovie.score){
    return {currMovie,bestMovie}
  }
  return bestMovie
})
console.log(highestRated)


const evens = [2,4,6,8]
const EVE = evens.reduce((prev,curr)=> prev+curr,40);
console.log(EVE)