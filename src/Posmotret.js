import { useState } from "react";
import { dataFilms } from "./dataFilms"
import { Filter } from './Filter';
import Filmses from "./Filmses"
import './App.css';


function Posmotret() {

    const [filtredItems, setFiltredItems] = useState(dataFilms);

    const buttons = [
        {
          searchTerm: "smile",
          text: "Посмеяться"
        },
        {
          searchTerm: "sadne",
          text: "Погрустить"
        },
        {
          searchTerm: "thought",
          text: "Поразмыслить"
        },
        {
          searchTerm: "enjoy",
          text: "Насладиться"
        }]

    return (
        <div >
            <p className="centerNow">Интуитивно выбери критерий и нажми один раз. Выбери фильм и посмотри вместе с другом.</p>
            <p className="centerNow"> Если нет компании, переходи в следущий раздел "С кем сходить?" </p>
        
        <div >
        <Filter 
        buttons={buttons}
        data ={dataFilms}
        setData={setFiltredItems}
      />
      <Filmses newFilms={filtredItems}/>
    </div>
    </div>

     
  )
}

export default Posmotret;