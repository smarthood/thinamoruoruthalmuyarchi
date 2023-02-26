import React,{ useEffect, useState }  from 'react';
import './App.css';
import Note from './Note';
import Top from './Top';
import right from './img/right.png'
import left from './img/left.png'
import cross from './img/cross.png'


function App() {
const [data,setData]=useState({})
const fetchData = () => {
  return fetch("https://script.google.com/macros/s/AKfycbyNIgMKX53h7CZGgv4UzWAzDTFzhhm4wG5Ftoy-DvKkr1vRamQyOLV0lP7qYNYX-2SG/exec?action=getQuotes")
        .then((response) => response.json())
        .then((data) => setData(data));
}
useEffect(() => {
  fetchData();
},[])
var bgcolor=(!data.color)?"#fff":data.color
var author=(!data.quotes)?"":"-" +data.author
var quotes = (!data.quotes)?<div className='cross'>
  <div>இன்றைய ஒறுத்தல் முயற்சி</div>
  <img src={cross} alt="+" />
</div>:data.quotes +'✨' 
document.body.style.backgroundColor = bgcolor;
  return (
    <div className="App">
      <Top quotestext={quotes} author={author}/>
      <div className="banner">
        <img src={left} alt="left" />
        <p><center><b>புனித அந்தோணியார் ஆலயம்</b><br /> <span> அந்தோணியார்புரம்</span></center> </p>
        <img src={right} alt="right" />
      </div>
    <Note quotestext={quotes} author={author}/>
    <div className="mobilequotes">
      <center>
      <h2>
        {quotes}
      </h2>      
      </center>
    </div>
      
    </div>
  );
}

export default App;
