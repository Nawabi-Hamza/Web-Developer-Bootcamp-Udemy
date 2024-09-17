import React, { useEffect, useState } from 'react'

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcherLoader() {
    const [ data,setData ] = useState([{ text: "All know the way; few actually walk it.", author: "Bodhidharma" }])
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        fetchQuote()
    },[])

    async function fetchQuote(){
        setLoading(true)
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuate = jsonResponse.quote;
            setData([randomQuate,...data])
        setLoading(false)
    }
    const handleDelete = (idx)=>{
        const updatedData = [...data]
        updatedData.splice(idx,1) 
        setData(updatedData)
    }
  return (
    <div>
        <button onClick={fetchQuote}>Get Random Quote</button>
        { loading && <h5 className='Loader' style={{opacity: loading? 1:0}}>Loading...</h5> }
        {
            data.length >= 0 && data.map((data,idx)=>(
                <div className='Quote' key={idx}>
                    <h3>{data.text}</h3>
                    <p>~{data.author}</p>
                    <button className='DeleteBtn' onClick={()=>handleDelete(idx)}>x</button>
                </div>
            ))
        }
        
    </div>
  )
}

