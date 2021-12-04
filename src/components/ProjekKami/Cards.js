import React, { useState, useEffect, Component } from 'react'
import CardItem from './CardItem'
import './Cards.css';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"
import axios from 'axios';

export default function ProjekSlider () {
    const [projek,setProjek] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://be-mppl.herokuapp.com/api/projects").then((response) => {
            setLoading(false);
            setProjek(response.data);
        });      
    }, [projek]);

        var settings = {
            dots:false,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow:1,
                        infinite:true
                    }
                }
            ],
        };

        function formatDate(string){
            var options = { day: 'numeric', month: 'long', year: 'numeric' };
            return new Date(string).toLocaleDateString('en-GB', options);
        }

        return (
            <div>
                <h2>Projek Kami</h2>
                <div className="cards__wrapper">
                    <Slider {...settings}>
                        {projek.map((projek) => (
                            <CardItem
                                src="http://www.inventlayout.com/Uploads/2/60/Website-Under-Construction-2-under-construction-thumb.jpg"
                                name={projek.name}
                                desc={projek.description}
                                startdate={formatDate(projek.startDate)}
                                enddate={formatDate(projek.endDate)}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        );
}
