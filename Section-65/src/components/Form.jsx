

function handleFormSubmit(evt){
    evt.preventDefault()
    console.log("Form Submited")
}

export default function Form(){

    return <form action="" onSubmit={handleFormSubmit}>
        <button>Submit</button>
    </form>
}