console.log("Weclome");

/**
 * Default Params
 */
function rollDie(numSides = 6) {
  // Past way to do it
  // if(numSides === undefined){
  //     numSides = 6
  // }
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());
console.log(rollDie());
console.log(rollDie());
function greet(name, msg = "Hey", panc = "!") {
  console.log(`${msg}, ${name}${panc}`);
}
greet("John");
greet("John", "Welcome", "!!!!!!!!!!!!!!!!!!!!");
/**
 * Spread in function calls
 */

/**
 * Spread with arrays
 */
const nums = [12, 32, 4, 1, 5, 6, 7, 8, 43, 12, 435];
console.log(Math.max(3, 4, 6, 723, 234, 75));
console.log(Math.max(nums));
console.log(Math.max(...nums));
console.log(...nums);

/**
 * Spread with objects
 */

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];
const allPets = [...cats, ...dogs];

console.log({ allPets });

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
console.log({ ...feline });
console.log({ ...feline, color: "black" });
console.log({ ...feline, ...canine });

const dataFromForm = {
  email: "hamza.nawabi119@gmail.com",
  password: "sadf@312",
  username: "hamza",
};
const newUser = { ...dataFromForm, isAdmin: false, id: 231 };
console.log(newUser);

/**
 * Rest Params
 */

function sumAll() {
  console.log(arguments);
  console.log(...arguments);
  let total = 0;
  for (let key in arguments) {
    total += arguments[key];
  }
  return total;
}
console.log(sumAll(2, 3, 4, 5));

function sum(...num) {
  return num.reduce((totalz, el) => totalz + el);
}
console.log(sum(2, 3, 4, 5));

function raceResults(gold, silver, ...every) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SELVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE ${every}`);
}
raceResults("Tammy","Todd",'Tina','Travor','Travis')

/**
 * Destructuring
 * a short , clean syntax to unpack 
 * values from arrays
 * properties from objects
 * into distinct variables
 */
// destructuring from array
const scores = [12321,32312,6542,32314,54543,34231,12356,64534]
const highScore = scores[0]
const secondHighScore = scores[1]

const [gold, silver, bronze,...everyOneElse] = scores


console.log(gold)
console.log(silver)
console.log(bronze)
console.log(everyOneElse)

// destructuring from Object
console.log("-----------------distucturing from object----------------")
const user ={
    email:"hamza.nawabi119@gmail.com",
    password: "123456@adsf@",
    firstName:"hamza",
    lastName:"Nawabi",
    born:2002,
    died:2024,
    bio:'Never give up',
    city:'San Francisco',
    state:'California'
}

// const firstName = user.firstName
// const lastName = user.lastName

// console.log(firstName)
// console.log(lastName)
console.log(user)

const { email,firstName,lastName } = user

const { password,born:birthYear,...others } = user

console.log(others)
console.log(email)
console.log(password)
console.log(birthYear)