import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import ReactRoundedImage from 'react-rounded-image'


console.log(logo);

function CardItem(props) {
    return (
        <>
           <li class="testi__item">
               <div class="testi__item__link">
                    <div className="testi__item__photo">
                        <img src={ props.src } className="testi__item__photo-wrap"/>
                    </div>
                   <div class="testi__item__info">
                       <h5 class="testi__item__text">
                           {props.name}
                       </h5>
                       <p class="testi__item__position">
                           {props.job}
                       </p>
                       <p class="testi__item__desc">
                            "{props.desc}"
                       </p>
                   </div>
                   
               </div>
           </li>
        </>
    )
}

export default CardItem
