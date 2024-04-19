console.log("----------Welcome to do list console------------")


let input = prompt("What would you like to do?")

const todos = ["Collect chicken eggs",'clean litter box'];


while(input !== "quit" && input !== "q"){
    // List all todos
    if(input==='list'){
        console.log("************************")
        for(let key in todos){
            console.log(key,": ",todos[key])
        }
        console.log("************************")
    }else if(input==='new'){
        const newTodo = prompt("Ok , what is the new todo ?")
        todos.push(newTodo)
        console.log(`${newTodo} added to list`)
    }else if(input==='delete'){
        const index = parseInt(prompt("ok, Enter an index to delte"))
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1)
            console.log(`Ok, deleteed ${deleted[0]}`)
        }else{
            console.log('Unknown index')
        }
        // console.log(index)

    }

    input = prompt("what would you like to do?")
}

if(input === "quit" || input==='q'){
    console.log("Ok quit the app !".toUpperCase())

}