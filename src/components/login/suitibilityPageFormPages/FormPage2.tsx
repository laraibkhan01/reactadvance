import React, { useState } from 'react'
import './FormPagesCss.css'
const FormPage2 = ({ change, radio, change5, change6, count }: any) => {
    let flag = 0;
    const isChecked = () => {
        if (radio != "")
            flag = 1;
    }
    return (
        <>
            <div className="FormPage1">
                <p>How do you park at home ?</p>
                <p>Select the option that best describes how you park at home:</p>
                <div className="data">
                    <div id="Profession" className="row4">
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option1"}
                                value="option1"
                                onChange={change}
                            />
                            <label>&nbsp;Private off-street parking</label>
                        </div>
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option2"}
                                value="option2"
                                onChange={change}
                            />
                            <label>&nbsp;Shared parking</label>
                        </div>
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option3"}
                                value="option3"
                                onChange={change}
                            />
                            <label>&nbsp;On Street parking</label>
                        </div>
                        <span id="radiobutton1" className="error"></span>
                    </div>
                </div>
                {
                    isChecked()
                }
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
                disabled={count > 5 || flag === 0}
            >
                Next
            </button>
        </>
    )
}
export default FormPage2;
