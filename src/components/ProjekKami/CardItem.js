import React from 'react'
import logo from './logo.png'

console.log(logo);

function CardItem(props) {
    return (
        <>
           <li class="cards__item">
               <div class="cards__item__link">
                   <div class="cards__item__info">
                        <img class="cards__item__logo" src={logo} alt="logo"/>  
                       <h5 class="cards__item__text">
                           {props.name}
                       </h5>
                       <div class="cards__item__underline"></div>
                       <p class="cards__item__desc">
                           {props.desc}
                       </p>
                       <p class="cards__item__date">
                           {props.date}
                       </p>
                   </div>
                   <figure class="cards__item__pic-wrap">
                       <img src={props.src} alt="Our Projects" class="cards__item__img"></img>
                   </figure>
                   
               </div>
           </li>
        </>
    )
}

export default CardItem
