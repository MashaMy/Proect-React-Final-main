import { useState } from 'react';
import { useEffect } from 'react';
import video from "./naush.mp4";
import './App.css';

function Delat(){

    const [advice, setAdvice ] = useState("");

    useEffect(() => {
        getAdvice();
        }, [])
        
        const getAdvice = async () => {
        const response = await fetch(`http://www.boredapi.com/api/activity/`);
        const data = await response.json();
        console.log(data.activity);
        setAdvice(data.activity)
        }
      
      return(
          <div className="fon">
        <div>
        <video autoPlay muted loop>
         <source src={video} type="video/mp4" />
      </video>
      <h2 className='shrift'>Итак, начнем с действия! Что тебе делать?</h2>
        </div>
      
        <div >
          <div className='shrift'>
           <button className="btnzanyatie" onClick={getAdvice}>НАЖМИ, ЧТОБЫ УЗНАТЬ!</button>
           </div>
      </div>
      
      
      <div >
          <div className='shrift fon'>
          <h2 className='svecha'>{advice}</h2>
          </div>
      </div>
      
        </div>
        
       
      );
      
      }
      

export default Delat;