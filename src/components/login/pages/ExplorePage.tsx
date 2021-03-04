import React, { useEffect } from 'react';
import { useParams , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCard } from '../actions/addCartActions';
import imag from '../assets/car1.png'
import imag2 from '../assets/car2.png'
import imag3 from '../assets/car3.png'
import './ExplorePage.css'
import { addCart } from '../actions/addCartActions'

interface ParamTypes {
    id: string;
}

export const ExplorePage = () => {
    let { id } = useParams<ParamTypes>();
    let history = useHistory();

    const dispatch = useDispatch();
    const ExploreCard = useSelector((state: any) => state.container.carddetail);
    useEffect(() => {
        dispatch(getCard(id));
    }, [dispatch, id]);

    const dispatch2 = useDispatch();
    const bookCar = (e: any) => {
        e.preventDefault();
        const new_Car = ExploreCard;
        dispatch2(addCart(new_Car));
        history.push("/mybooking");
    }

    return (
        <div className="ExplorePageWrapper">
            <div className="Car-Hardware">
                <h6>Browser Cars {' > '}{ExploreCard.name}</h6>
                <img src={ExploreCard.image === 1 ? imag : ExploreCard.image === 2 ? imag2 : imag3} alt="car-img"></img>
                <div className="Car-info-1">
                    <div>
                        <p>Range</p>
                        <p>120/miles</p>
                        <p>Range</p>
                    </div>
                    <div>
                        <p>Charging</p>
                        <p>50 kW</p>
                        <p>max. Speed</p>
                    </div>
                </div>
                <div className="Car-info-2">
                    <p>5 seat </p>
                    <p>5 doors </p>
                    <p> front </p>
                    <p> Titanium Grey</p>
                    <p> 140 mph</p>
                </div>
            </div>
            <div className="Car-Software">
                <p>{ExploreCard.name}</p>
                <div className="Car-Subscription-box">
                    <p id="txt">Min. Subscription Length</p>
                    <div className="Temp">
                        <button type="button" className="Explore-btn">1-month</button>
                        <button type="button" className="Explore-btn">6-months</button>
                    </div>
                </div>
                <div className="Miles-per-month-box">
                    <p>Min. Subscription Length</p>
                    <div className="Temp">
                        <button type="button" className="Explore-btn">800</button>
                        <button type="button" className="Explore-btn">1000</button>
                        <button type="button" className="Explore-btn">1200</button>
                    </div>
                </div>
                <div className="Delivery-date-box">
                    <label htmlFor="delivery">Date:</label>
                    <input type="date" id="delivery" name="delivery"></input>
                </div>
                <div className="Book-Now-Box">
                    <button type="submit" className="Explore-btn" onClick={(e: any) => bookCar(e)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
