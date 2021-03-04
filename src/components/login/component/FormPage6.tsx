import React from 'react'

export const FormPage6 = () => {
    return (
        <div className="FirstPage1">
            <p>How many miles a year do you drive?</p>
            <div className="data">
                <div id="Profession" className="row4">
                    <div id="user1_row4">
                        <input type="radio" id="Student" name="sp" />
                        <label>&nbsp;I know my annual mileage</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;i don't know</label>
                    </div>
                    <span id="radiobutton1" className="error"></span>
                </div>
            </div>
        </div>
    )
}
