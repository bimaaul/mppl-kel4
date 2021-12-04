import React, { Component, useState, useEffect } from 'react'
import CardItem from './Testimoni_CardItem'
import '../ProjekKami/Cards.css';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from '../../assets/photo.jpeg'
import axios from 'axios'

export default function SimpleSlider() {  
    
    const [testi,setTesti] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {  
        //if(testi === null){
        setLoading(true);
        axios.get("https://be-mppl.herokuapp.com/api/clients").then((response) => {
            //console.log(response);
            setLoading(false);
            setTesti(response.data);
        });
        //}      
    }, [testi]);

    //console.log(testi);

        var settings = {
            dots:false,
            infinite:true,
            speed:500,
            slidesToShow:2,
            slidesToScroll:1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow:1,
                        infinite:true
                    }
                }
            ]
        };

        return (
            <div>
                <h2>Testimoni</h2>
                <div className="testi__wrapper">
                    <Slider {...settings}>
                        {testi.map((testi) => (
                        <CardItem
                            key={testi._id}
                            src={Photo}
                            name={testi.name}
                            job={testi.job}
                            desc={testi.testimoni}
                        />
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
