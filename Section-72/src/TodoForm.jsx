import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

import Create from "@mui/icons-material/Create"

export default function TodoForm({ addTodo }){
    const [ text,setText ] = useState("")
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        if(text.length == 0) return alert("Please fill the input box")
        addTodo(text)
        setText("")
    }
    return (
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic"  sx={{width:330}} label="Next Todo" variant="outlined" value={text} onChange={handleChange} 
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="creat todo"
                                edge="end"
                                type="submit"
                            >
                                <Create />
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

            </form>
        </ListItem>
    )
}