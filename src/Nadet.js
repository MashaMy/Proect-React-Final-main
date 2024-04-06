import { useState } from 'react';
import { data } from './data';
import Clothers from './Clothers';
import './App.css';
import { Filter } from './Filter';


function Nadet() {

  const [clother, setClother] = useState(data);

  const buttons = [
    {
      searchTerm: "snow",
      text: "Снег"
    },
    {
      searchTerm: "rain",
      text: "Дождь"
    },
    {
      searchTerm: "sun",
      text: "Солнце"
    },
    {
      searchTerm: "beach",
      text: "Пляж"
    },
    {
      searchTerm: "morning",
      text: "Гулять до утра"
    },
    {
      searchTerm: "surprise",
      text: "Очаровать"
    },
    {
      searchTerm: "afraid",
      text: "Я ничего не боюсь"
    },
  ]

  return (
    <div>
      <p className="centerNow">Интуитивно выбери критерий и нажми один раз. Выбери образ и постарйся повтороить.</p>

      <Filter
        buttons={buttons}
        data={data}
        setData={setClother}
      />
      <Clothers newClothers={clother} />
    </div>

  )
}

export default Nadet;


