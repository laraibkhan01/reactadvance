import React, { useEffect , useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCard } from '../actions/addCartActions';
import imag from '../assets/car1.png'
import imag2 from '../assets/car2.png'
import imag3 from '../assets/car3.png'
import './ExplorePage.css'
import { addCart } from '../actions/addCartActions'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
toast.configure();

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
    const [bookingdate, setbookingdate] = useState(ExploreCard.Availaible);
    const dispatch2 = useDispatch();
    const bookCar = () => {
        let new_Car = ExploreCard;
        new_Car = {...new_Car,"Available": bookingdate }
        dispatch2(addCart(new_Car));
    }
    const bookCar2 = () => {
        history.push("/mybooking");
    }
    console.log(bookingdate);
    const handleToken: any = (token: any, addresses: any) => {
        console.log("Successful");
        bookCar2();
    }
    return (
        <div className="ExplorePageWrapper">
            <div className="Car-Hardware">
                <h6>Browser Cars {' > '}{ExploreCard.name}</h6>
                <img src={ExploreCard.image === 1 ? imag : ExploreCard.image === 2 ? imag2 : imag3} alt="car-img"></img>
                <div className="Car-info-1">
                    <div>
                        <p>Range</p>
                        <p>{ExploreCard.Range}</p>
                        <p>Range</p>
                    </div>
                    <div>
                        <p>Charging</p>
                        <p>{ExploreCard.Charging}</p>
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
                    <input type="date" id="delivery" name="delivery" onChange = {bookCar} value = {bookingdate}></input>
                </div>
                <div className="Book-Now-Box">
                    <button type="submit" className="Explore-btn" >Add To Cart</button>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_51IRRYtIAFiVemvAqwXa9z29ATkZ6suw6dnPDKShlsEHUT7sFxE2mJSqW5auxuBFQgNB3Dt0xhvcpngHI2gqWXkE700zOu8yPx5"
                    token={handleToken}
                />
            </div>
        </div>
    )
}
