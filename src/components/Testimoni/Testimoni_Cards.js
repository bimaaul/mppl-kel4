import React, { Component } from 'react'
import CardItem from './Testimoni_CardItem'
import '../ProjekKami/Cards.css';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from '../../images/photo.jpeg'
{//import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"
}

export default class SimpleSlider extends Component {
    render(){
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
                        <CardItem
                            src={Photo}
                            name="Lorem Ipsum"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus. Cras tempus, risus et molestie tristique, mauris felis ullamcorper metus, ac viverra mauris nisl non libero. Integer nisl augue, euismod sed pharetra at, euismod ac sem. Praesent consequat nisi erat, ac faucibus mi dapibus ac. Suspendisse sit amet velit tempor, pharetra ante eu, fringilla tellus. Donec varius tempus ligula at congue. Quisque consectetur in nibh nec vestibulum."
                            date="14 Agustus 2021 - 24 September 2021"
                            path='/services' />
                        <CardItem
                            src={Photo}
                            name="Lorem Ipsum"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus. Cras tempus, risus et molestie tristique, mauris felis ullamcorper metus, ac viverra mauris nisl non libero. Integer nisl augue, euismod sed pharetra at, euismod ac sem. Praesent consequat nisi erat, ac faucibus mi dapibus ac. Suspendisse sit amet velit tempor, pharetra ante eu, fringilla tellus. Donec varius tempus ligula at congue. Quisque consectetur in nibh nec vestibulum."
                            date="14 Agustus 2021 - 24 September 2021"
                            path='/services' />
                        <CardItem
                            src={Photo}
                            name="Lorem Ipsum"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante et tortor finibus congue. Morbi quis dolor lacus. Cras tempus, risus et molestie tristique, mauris felis ullamcorper metus, ac viverra mauris nisl non libero. Integer nisl augue, euismod sed pharetra at, euismod ac sem. Praesent consequat nisi erat, ac faucibus mi dapibus ac. Suspendisse sit amet velit tempor, pharetra ante eu, fringilla tellus. Donec varius tempus ligula at congue. Quisque consectetur in nibh nec vestibulum."
                            date="14 Agustus 2021 - 24 September 2021"
                            path='/services' />
                    </Slider>
                </div>
            </div>
        );
    }
}
