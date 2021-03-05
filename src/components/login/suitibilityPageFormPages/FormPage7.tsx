import React from 'react'
import './FormPagesCss.css'
import lastP from '../assets/lastFormPage.png'
export const FormPage7 = () => {
    return (
        <div className = "last_page">
            <div className = "FormPage1">
                <p>All done</p>
                <p>An email with a link has been sent to you.</p>
            </div>
            <img src = {lastP} id= "imag" ></img>
        </div>
    )
}
