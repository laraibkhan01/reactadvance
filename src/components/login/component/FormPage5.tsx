import React from 'react'

export const FormPage5 = () => {
    return (
        <div className="FirstPage1">
            <p>How old are you?</p>
            <div className="data">
                <div id="Profession" className="row4">
                    <div id="user1_row4">
                        <input type="radio" id="Student" name="sp" />
                        <label>&nbsp;${`<`} 25</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;25-39</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;40-64</label>
                    </div>
                    <div id="user1_row4">
                        <input type="radio" id="Professional" name="sp" />
                        <label>&nbsp;65+</label>
                    </div>
                    <span id="radiobutton1" className="error"></span>
                </div>
            </div>
        </div>
    )
}
