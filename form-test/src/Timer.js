import { useState,useEffect } from "react";
import './App.css';


function App() {

 const [time, setTime] = useState(0);
const [timeCount,setTimeCount] = useState(false);

useEffect(()=>{
  let interval = null;
  if(timeCount){
    interval = setInterval(() =>{
setTime((time) => time + 10)
    },10)
  } else if(!timeCount){
    clearInterval(interval);
  }
  return () => clearInterval(interval);
},[timeCount])


  return (
    <div className="form">
    <h1>Timer</h1>

    <section>
     <div>
      <span>{('0' + Math.floor((time / 1000) ) ).slice(-2)}</span>:
      <span>{('0' + Math.floor((time / 100)  ) ).slice(-2)}</span>
     </div>
     <div>
      <button onClick={() => setTimeCount(true)} >Start</button>
      <button onClick={() => setTimeCount(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Clear</button>
       
      
      </div>  

    </section>
    </div>
  );
}

export default App;

