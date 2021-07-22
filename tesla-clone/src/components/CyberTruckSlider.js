import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'

function CyberTruckSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };
    return (
        <Slider {...settings}>
            <One>
                <img src="https://www.tesla.com/xNVh4yUEc3B9/05_Desktop.jpg" alt="" />
                <h2>VERSATILE UTILITY</h2>
                <span>With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built, engineered with 100 cubic feet of exterior, lockable storage — including a magic tonneau cover that is strong enough to stand on.</span>
            </One>
            <Two>
                <img src="https://www.tesla.com/xNVh4yUEc3B9/06_Desktop.jpg" alt="" />
                <h2>VERSATILE UTILITY</h2>
                <span>Space for your toolbox, tire and Cyberquad, with room to spare. Utilize 100 cubic feet of exterior, lockable storage — including the under-bed, frunk and sail pillars.</span>
            </Two>
        </Slider>
    )
}

export default CyberTruckSlider

const One = styled.div `
    margin-bottom: 5rem;

    h2 {
        color: white;
        letter-spacing: 5px;
        margin: 1rem 0 1rem 0;
    }
    span {
        color: white;
    }
`

const Two = styled.div `
    h2 {
        color: white;
        letter-spacing: 5px;
        margin: 1rem 0 1rem 0;
    }
    span {
        color: white;
    }
`