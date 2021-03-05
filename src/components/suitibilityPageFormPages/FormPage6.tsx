import React from 'react'
import './FormPagesCss.css'
export const FormPage6 = ({ change, radio, change5, change6, count }: any) => {
    let flag = 0;
    const isChecked = () => {
        if (radio != "")
            flag = 1;
    }
    return (
        <>
            <div className="FormPage1">
                <p>How many miles a year do you drive?</p>
                <div className="data">
                    <div id="Profession" className="row4">
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option1"}
                                value="option1"
                                onChange={change}
                            />
                            <label>&nbsp;I know my annual mileage</label>
                        </div>
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option2"}
                                value="option2"
                                onChange={change}
                            />
                            <label>&nbsp;i don't know</label>
                        </div>
                        <span id="radiobutton1" className="error"></span>
                    </div>
                </div>{
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
