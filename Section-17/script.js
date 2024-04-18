console.log("welcome");

const numbers = [1, 2, 3, 4, 5];
numbers[9] = 10;
console.log(numbers);

const f = ["name", "age", "phone", "job"];
const person = ["Hamza", 21, 766420877, "Web Developer"];
console.log(person);

for (let i = 0; i < f.length; i++) {
  console.log(f[i] + ":" + person[i]);
}

const n = [1, 2, 3];
n["a"] = "samim";
console.log(n);
console.log(n["a"]);

const planets = ['The Moon','Venus', 'Earth', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift() // remove from begining
planets.unshift("Sun") // add from begining
planets.push("Saturn") // add at the end
planets.unshift("Mercury") // add at first 


console.log(planets)

console.log("..........Concat,Include,IndexOf,Reverse..........")
const array1 = [1,2,3,4,5]
const array2 = ['a','b','c','d','e']
const array3 = array1.concat(array2)

console.log(array3)

console.log("include: ",array3.includes('a'))
console.log("include: ",array3.includes('z'))
console.log("IndexOf: ",array3.indexOf("b"))
console.log("reverse: ",array3.reverse())

console.log("..........Slice,Splice,Sort..........")
const usernames = ['Ali','Ahmad','Shafi','Noori','Wahid']
console.log('Main: ',usernames)

const slice = usernames.slice(3)
console.log('Slice: ',slice)

const splice = usernames.splice(1,2,'Samim')
console.log('Splice: ',splice)

const sort = usernames.sort()
console.log('Sort: ',sort)