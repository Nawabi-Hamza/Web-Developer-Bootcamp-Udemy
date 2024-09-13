import { useState } from "react"
import { v4 as uuid} from "uuid"
export default function EmojiClicker(){
    const [ emojis,setEmojis ] = useState([{id: uuid(),emoji:"😂"}])
    const emojiList = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🤗", "🤔", "🤐", "😐",
        "😑", "😶", "🙄", "😏", "😒", "😞", "😔", "😟","😤","😢", "😭", "😠","😡", "🤯", "😳","🥺",
        "🤪", "😵", "🤓", "😎", "🥳", "😶‍🌫️", "😘" 
      ]
      
    const addEmoji = ()=>{
        const randomEmoji = Math.floor(Math.random() * emojiList.length)
        setEmojis([ ...emojis, { id: uuid(), emoji:emojiList[randomEmoji] } ])
        console.log(uuid())
    }

    const deleteEmoji = (id)=>{
        // delete the emoji with the specified id
        // console.log(id)
        // setEmojis(emojis.filter(emoji => emoji.id === id))
        setEmojis(emojis.filter( emo => emo.id !== id ))
    }
    const updateEmoji = ()=>{
        setEmojis(emojis.map(item=> {
            return {...item,emoji:"❤️"}
        }))
    }
    return (
        <div>
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={updateEmoji}>Make Them Hearts</button>
            <br/>
            {emojis.map( (e) => 
                <span key={e.id} style={{fontSize:"4rem"}} onClick={()=> deleteEmoji(e.id)}>{e.emoji}</span>
            )}
        </div>
    )
}