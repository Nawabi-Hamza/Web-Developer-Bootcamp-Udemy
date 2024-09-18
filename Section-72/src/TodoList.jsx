import * as React from "react";
import { Box, List, Typography } from "@mui/material";
import { v4 as uuid } from "uuid"

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// const initialTodos = [
//   { id: uuid(), text: "Buy milk", completed: false },
//   { id: uuid(), text: "Walk dog", completed: false },
//   { id: uuid(), text: "Do laundry", completed: true },
//   { id: uuid(), text: "Buy Bag", completed: false },
//   { id: uuid(), text: "Buy Shoes", completed: true },
// ];
const initialData = ()=>{
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return []
    else return data
}

export default function TodoList() {
  const [todos, setTodos] = React.useState(initialData);

  React.useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const removeTodos = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text)=>{
    setTodos([...todos, { text:text, id:uuid(), completed:false }])
  }
  return (
    <Box sx={{
        display:'flex',
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        mt:3
        }}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", m: "auto", }} >
        <Typography variant="h2" component="h1" sx={{flexGrow:1,textAlign:"center"}}>
            Todos
        </Typography>
        {todos.map((data) => {
            return (
            <TodoItem
                todo={data}
                key={data.id}
                removeTodo={() => removeTodos(data.id)}
                toggle={() => toggleTodo(data.id)}
            />
            );
        })}
        <TodoForm addTodo={addTodo} />
        </List>
    </Box>
  );
}
