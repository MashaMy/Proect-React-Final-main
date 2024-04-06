import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import  Image  from './scale.jpg';

import { Link } from 'react-router-dom';


function Glavnaya(){

    return (
        <div class = "bg-white shrift">
<div class="container col-xxl-12 px-3 py-3 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ">
      <div class="col-10 col-sm-8 col-lg-6">
      <iframe width="645" height="400" src="https://www.youtube.com/embed/mWyKLg7y60w?si=vkslk3ntUp5m8u_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Случайности не случайны. Вы также думаете?</h1>
        <p class="lead">Почти каждый день мы интерпретируем события, происходящие в нашей жизни, как случайности. Однако это всего лишь иллюзия. В действительности, случайные встречи - это результат тщательного планирования, осуществленного кем-то свыше.</p>
        <p>Данный сайт - одна из ветвей Вашей судьбы. Прикоснитесь. Сделайте выбор и наблюдайте за событиями. </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          </div>
      </div>
    </div>
  </div>

<div class=" bg-light shrift">
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src= { Image } alt="foto" width="645" height="450"/>
    <h1 class="display-5 fw-bold text-body-emphasis">А вдруг!?</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Мы уверены, что встречи и знакомства не случайны и имеют свою глубину и смысл, и могут привести к значимым отношениям в работе или в личной жизни. А вдруг сегодня Ваш день?</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/nadet" className='link'><button type="button" class="btn btn-primary btn-lg px-4 gap-3">Да, я рискну</button></Link>
      </div>
    </div>
  </div>
  </div>
  <div>
  <footer class="d-flex justify-content-center py-4 border-top">
    <div class="col-md-0 d-flex ">
            <span class="mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>
  </footer>
</div>
  </div>
    )
}

export default Glavnaya;


  