import React from 'react'

export const FormPage4 = () => {
    return (
        <div className="FormPage1">
            <p>What are your driving habits?</p>
            <div className="data">
                <div id="Profession" className="row4">
                    <div id="user1_row4">
                        <input type="radio" id="Student" name="sp" />
                        <label>&nbsp;Mostly just to work and back.</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;Round Trip to work but mostly with other destinations</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;I don't currently work.</label>
                    </div>
                    <span id="radiobutton1" className="error"></span>
                </div>
            </div>
        </div>
    )
}
