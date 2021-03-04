import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyBoookingCards from '../component/MyBoookingCards';

const Mybooking = () => {
    const[details,setdetails] = useState(useSelector((state: any) => {
        return state.container.carBooked;
    }));

    return (
        <div className = "MyBookingWrapper">
            <h3>Booking Page</h3>
            <div className="ElectricCar-List">
                {
                    details.map((detail: any) => {
                        return (
                            <MyBoookingCards detail={detail} key = {detail.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mybooking
