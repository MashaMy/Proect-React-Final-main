import './App.css';
import { useState } from "react";
import { dataFan } from './dataFan';


function Chodit() {

  const [cafe, setcafe] = useState(dataFan);
  const [showMore, setShowMore] = useState(false);

  const removecafe = (id) => {
    let newcafe = cafe.filter(cafeName => cafeName.id !== id);
    setcafe(newcafe)
  }


  return (
    <div>
      <div className='container bg-light'>
        <h1 class="mt-4">Топ {cafe.length} ресторана в Сочи</h1>
      </div>
      {cafe.map((element => {
        const { id, cafeName, description, image } = element;

        return (
          <div key={id}>
            <div className='container shrift pt-4 bg-light'>
              <h2 className='bg-light'>{id} - {cafeName}</h2>
            </div>

            <div className='container shrift bg-light'>
              <p >{showMore ? description : description.substring(0, 130) + "..."}
                <button className='showMore shrift' onClick={() => setShowMore(!showMore)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
              </p>
            </div>

            <div className='container bg-light'>
              <img src={image} width="500px" alt='rest' />
            </div>

            <div className='container bg-light'>
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3 mt-4" onClick={() => removecafe(id)} >Очистить</button>
            </div>


          </div>
        )
      }
      ))}

    </div>
  )
}


export default Chodit;