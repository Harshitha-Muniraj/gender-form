import React,{useEffect, useState} from 'react';
import Markdown from 'react-markdown';
import './App.css'

const App = () => {
    const [inputText,setInputText]=useState("# Hello world !");
    const [mark,setMark]=useState("# Hello world !");

    useEffect(()=>{
         setMark(inputText)
    },[inputText])

  return (
    <div className='container'>
        <div className='left flex'>
            <textarea type="text"  value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        </div>
        <div className='right flex'>
            <Markdown>{mark}</Markdown>
        </div>
    </div>
  )
}

export default App;