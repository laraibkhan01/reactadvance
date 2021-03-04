import React from 'react'
import { Link } from 'react-router-dom'
import imag from '../assets/car1.png'
import imag2 from '../assets/car2.png'
import imag3 from '../assets/car3.png'
import './CarCardsCss.css'
import { useDispatch } from "react-redux"
const CarCards = ({ detail }: any) => {
    const dispatch = useDispatch();
    return (
        <div className="CarCards-Wrapper">
            <div id="grid-area-1">
                <img src={detail.image === 1 ? imag : detail.image === 2 ? imag2 : imag3} alt="car-img"></img>
            </div>
            <div id="grid-area-2">
                <p>{detail.name}</p>
                <p>{detail.Efficiency}</p>
                <p>${detail.Price} per {detail.Rent}</p>
            </div>
            <div id="grid-area-3">
                <Link id="CarCard-Explore" to={`/explore/${detail.id}`}>Explore</Link>
            </div>
        </div>
    )
}

export default CarCards
