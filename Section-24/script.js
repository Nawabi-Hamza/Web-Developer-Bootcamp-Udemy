console.warn("Javascript");

const newImage = [
  "https://images.unsplash.com/photo-1714547808442-e4199a7f8e09?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1714229505416-4c7726c59dac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1714306915861-cd11ba62181b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  // "https://plus.unsplash.com/premium_photo-1680378871613-bfacb34787f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1714415573193-1c6ac4c6674b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  // "https://plus.unsplash.com/premium_photo-1673698725463-2e6214afc258?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1714329781250-64b9125f689c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
];

const imgContainer = document.getElementById("image");
const nextBtn = document.getElementById("btn");
const prevBtn = document.getElementById("btnPrev");

let num = 1;
let time = 3000;
function changeImageSrc() {
  imgContainer.src = newImage[num];
  // console.log(imgContainer)
  num += 1;
  if (num > newImage.length - 1 || num < 0) num = 0;
}

window.addEventListener("load", () => {
  imgContainer.src = newImage[0];
});

nextBtn.addEventListener("click", () => {
  changeImageSrc();
});
prevBtn.addEventListener("click", () => {
  num -= 2;
  changeImageSrc();
});

setInterval(() => {
  changeImageSrc();
}, time);

imgContainer.addEventListener("load", () => {
  // console.log("image Changed");
});

const btn = document.getElementsByTagName("button");
for (let b of btn) {
  // console.log(b);
  b.addEventListener("click", () => {
    // console.log("clicked");
  });
}


// const li = document.querySelectorAll("li")
// for(let key in li){
//     li[key].setAttribute('class',"decore")
//     // console.log(li[key])
// }
/**
 * We have 
 * setAttribute(att,par2)
 * getAttribute(att)
 * classList.add(par2)
 * classList.remove(par2)
 * classList.contains(par2) // result is true or false for exist class
 * classList.toggle(par2) // it toggle if class exist it will removed if it does not exist it will added
 * 
 */
const b =  document.getElementById("btn")
console.log(b)



// const newImg = document.createElement('img').src='image source'
// document.body.appendChild(newImg) // add image at the end of page or documents 
// const newH3 = document.createElement('h3')
// newH3.innerText = 'this is h3 from console prepend'
// document.body.prepend(newH3) // add h3 at start section of body 
// const p = document.querySelector('.right') 
// p.append("welcome to next message") // just we can use text and add text after some nodes


const container = document.getElementById("container")

for(let i=0 ; i<100 ; i++){
  const elementBtn = document.createElement('button')
  elementBtn.innerText = "Hey !"
  container.appendChild(elementBtn)
}


// remove an element by selecting parent 
const h2 = document.querySelector('h2')
const mark = document.querySelector("mark")
// h2.remove()
// h2.parentElement.removeChild(h2)
// mark.parentElement.removeChild(mark)