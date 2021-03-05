import React from 'react'
import imag from '../assets/car1.png'
import imag2 from '../assets/car2.png'
import imag3 from '../assets/car3.png'
import battery from '../assets/battery.png'
import miles from '../assets/miles.png'
import './MyBookingCardsCss.css'
export default function MyBoookingCards({detail}:any) {
    return (
    <>
        <div className="BookingCards-Wrapper">
            <div className = "grid-area-1">
                <p>{detail.name}</p>
                <p>{detail.Availaible}</p>
                <p>{detail.Availaible}</p>
            </div>
            <div className = "grid-area-2">
                <img src={detail.image === 1 ? imag : detail.image === 2 ? imag2 : imag3} alt="car-img"></img>
            </div>
            <div className = "grid-area-3">
                <div>
                    <h6>$570</h6>
                    <p>Annual Fuel Saving</p>
                </div>
                <div>
                    <h6>100%</h6>
                    <p>Trips covered by home {`&`} work charge points</p>
                </div>
                <div>
                    <h6>0</h6>
                    <p>Annual public charging uses</p>
                </div>
            </div>
            <div className = "grid-area-4">
                <div>
                    <img src = {battery} alt = "powerIcon"></img>
                    {detail.Charging}
                </div>
                <div>
                    <img src = {miles} alt = "powerIcon"></img>
                    {detail.Range}
                </div>
            </div>
        </div>
    </>
    )
}
