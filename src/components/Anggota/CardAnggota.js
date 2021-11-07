import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardAnggota.css';
import Popup from './PopupAnggota';


function CardAnggota(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const togglePopup = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <>
           <li class="card-anggota">
                <div class="card-anggota-pic">
                    <figure class="card-anggota-img">
                        <img src={props.img}></img>
                    </figure>
                </div>

                <div class="card-data">
                    <h5 class="card-nama">
                        <p>Halo, Saya {props.name}</p>
                    </h5>
                    <h4 class="card-role">
                        {props.role}
                    </h4>
                    <p class="cards-desc">
                        {props.desc}
                    </p>
                    <Link class="rm-link" to={props.popup}>
                        <p class="readmore">Selengkapnya</p>
                    </Link>

                    {/* <p class="readmore" onClick={togglePopup}>Selengkapnya</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    {isOpen && <Popup
                    content={
                        <>
                            <b>Design your Popup</b>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button>Test button</button>
                        </>
                    }
                    handleClose={togglePopup}
                    />}
                    
                    <h6 class="card-work">
                        Pengalaman Kerja
                    </h6>
                    <p class="cards-exp-work">
                        {props.expwork}
                    </p>
                    <h6 class="card-proj">
                       Pengalaman Projek
                    </h6>
                    <p class="cards-exp-proj">
                        {props.expproj}
                    </p> */}
                </div>                   
           </li>
        </>
    )
}

export default CardAnggota