import React, { useEffect, useState } from 'react'
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcher() {
    // const [ data,setData ] = useState([{ text: "All know the way; few actually walk it.", author: "Bodhidharma" }])
    const [ data,setData ] = useState({ text: "", author: ""})
    const [ loading, setLoading ] = useState(true)

    // useEffect(()=>{
    //     async function getInitialQuote(){
    //         const response = await fetch(RANDOM_QUOTE_URL);
    //         const jsonResponse = await response.json();
    //         const randomQuate = jsonResponse.quote;
    //         setData(randomQuate)
    //         // setData([randomQuate,...data])
    //         setLoading(false)
    //     }
    //     getInitialQuote()
    // },[])

    useEffect(()=>{
        fetchQuote()
    },[])

    async function fetchQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuate = jsonResponse.quote;
        console.log(randomQuate)
        setData(randomQuate)
        // setData([randomQuate,...data])
        setLoading(false)
    }
  return (
    <div>
        <button onClick={fetchQuote}>Get Random Quote</button>
        { loading ? 
            <div>Loading...</div> 
            :    
            <div className='Quote'>
                <h3>{data.text}</h3>
                <p>~{data.author}</p>
            </div>
        }
        {/* {data.length >= 0 && data.map((data)=>(
            <div className='Quote'>
                <h3>{data.text}</h3>
                <p>~{data.author}</p>
            </div>
        ))} */}
    </div>
  )
}

