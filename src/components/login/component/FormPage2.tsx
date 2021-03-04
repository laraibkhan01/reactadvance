import React from 'react'

const FormPage2 = () => {
    return (
        <div className="FormPage1">
            <p>How do you park at home ?</p>
            <p>Select the option that best describes how you park at home:</p>
            <div className="data">
                <div id="Profession" className="row4">
                    <div id="user1_row4">
                        <input type="radio" id="Student" name="sp" />
                        <label>&nbsp;Private off-street parking</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;Shared parking</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;On Street parking</label>
                    </div>
                    <span id="radiobutton1" className="error"></span>
                </div>
            </div>
        </div>
    )
}
export default FormPage2;
