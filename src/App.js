import { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const initialState = {
  text:'',
  author:''
}
function App() {
  const [quote, setQuote] = useState(initialState);
  const [loading, setLoading] = useState(false);
  
  const getQuote = async() => {
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url)
    const [data] = await res.json();
    const {quote:text, author} = data;
    setQuote({
      text,
      author
    })
    setLoading(false);
  }
  useEffect(() => {
    getQuote()
  }, [])
  
  return (
    <div className='app'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt='logo of breaking bad'/>
        <button onClick={()=> getQuote()}>Get Another</button>
        {loading 
          ? <Spinner/>:
          <Quote quote={quote}/>
        }
    </div>
  );
}

export default App;
