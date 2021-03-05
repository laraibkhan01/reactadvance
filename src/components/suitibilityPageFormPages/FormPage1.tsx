import React from 'react'
import './FormPagesCss.css';
export default function FormPage1({change5,change6,count}:any) {
    return (
        <>
            <div className="FormPage1">
                <p> Welcome to the Electric Car Suitability Tool.
                </p><p>Flexible electric car subscriptions are one thing...
                </p>
                <p>...but first let's check if an electric car would suit your lifestyle!
                </p>
                <p>Your results will give you a detailed evaluation of your suitability for driving an electric car. And
                </p>
                <p>you'll be able to compare which models fit your range, budget and performance needs.
                </p>
            </div>
            <button className="btn btn-dark"
                type="submit"
                onClick={change5}
                disabled={count < 2}
            >
                Back
                </button>
            <button className="btn btn-light"
                type="submit"
                onClick={change6}
                disabled={count > 5}
            >
                Next
                </button>
        </>
    )
}
