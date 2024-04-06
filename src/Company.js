import './App.css';
import { useState } from "react";
import { dataPerson } from './dataPerson';


function Company() {

  const[person, setPerson] = useState(0);
  const {id, name,description, age, image} = dataPerson[person];

  const previosPerson = () => {
    setPerson((person =>{
      person--;
      if (person<0){
        return dataPerson.length-1;
      }
      return person;
    }
    ))
  }

  const nextPerson = () => {
    setPerson((person =>{
      person++;
      if (person> dataPerson.length - 1){
        person = 0;
      }
      return person;
    }
    ))
  } 
  
  return (
<div>
<div><p className='centerNow'>Выбери компанию по душе и пригласи в кино или в кафе</p></div>
<div className='containerper bg-light'>
<img src= {image} width="350px" height="500px" alt='rerson'/>
</div>

<div className="containerper bg-light">
<h2>{id} - {name}</h2>
</div>

<div className='containerper bg-light'>
<h3>{description}</h3>
</div>

<div className='containerper bg-light'>
<h3>{age} лет</h3>
</div>

<div className='btn-per containerper bg-light'>
<button class="btn btn-primary btn-lg px-4 gap-3 mt-4" onClick={previosPerson}>Назад</button>
<button class="btn btn-primary btn-lg px-4 gap-3 mt-4" onClick={nextPerson}>Вперед</button>
</div>

</div>
)
}

export default Company;