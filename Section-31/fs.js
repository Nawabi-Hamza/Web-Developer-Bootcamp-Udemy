console.log("file system")
const fs = require("fs")

const folderName = process.argv[2] || "Project"

// CREATE A FOLDER WITH FS
// console.log(fs)
// fs.mkdir('apple',{ recursive:true} , (err)=>{
//     console.log("IN THE CALLBAC!!!")
//     if(err) throw err
// })
// console.log("I COME AFTER MKDIR IN FILE")

// CREATE A FOLDER WITH FS SYNCHORONIZE
// fs.mkdirSync("Cats")


// console.log("I COME AFTER MKDIR IN FILE")

try{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`,'')
    fs.writeFileSync(`${folderName}/style.css`,'')
    fs.writeFileSync(`${folderName}/script.js`,'')
    // the empty parameter is for data text if it does not exist it will give an error
    // fs.writeFileSync(`${folderName}/index.html`,'<h1>Welcome Bro</h1>')
    // fs.writeFileSync(`${folderName}/style.css`,'body{ color:orangered; }')
    // fs.writeFileSync(`${folderName}/script.js`,'console.log("welcome to my project")')
}catch(err){
    console.log('SOMETHING WENT WRONG')
    console.log(err)
}