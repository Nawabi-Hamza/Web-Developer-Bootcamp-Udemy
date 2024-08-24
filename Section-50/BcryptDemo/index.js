const bcrypt = require('bcrypt')


console.log('welcome')

// const hashPassword = async(pw)=>{
//     const salt = await bcrypt.genSalt(12)
//     const hash = await bcrypt.hash(pw,salt)
//     console.log(salt)
//     console.log(hash)
// }

const hashPassword = async(pw)=>{
    const hash = await bcrypt.hash(pw,12)
    console.log(hash)
}
const login = async(pw,hash)=>{
    const result = await bcrypt.compare(pw,hash)
    if(result) console.log("YOU LOGGED IN SUCCESSFULY !")
    else console.log('PLEASE CHECK YOUR PASSWORD !')
    console.log(result)
}

hashPassword("Monkey")
login('Monkey','$2b$12$wCBUIn//tZzUnlOZSevjmu7sjpYBOgLdrBPuVYW2QVDwEl.Yv/G5O')