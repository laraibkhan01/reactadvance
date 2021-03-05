import React from 'react'

export const FormPage4 = ({ change, radio, change5, change6, count }: any) => {
    let flag = 0;
    const isChecked = () => {
        if (radio != "")
            flag = 1;
    }
    return (
        <>
            <div className="FormPage1">
                <p>What are your driving habits?</p>
                <div className="data">
                    <div id="Profession" className="row4">
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option1"}
                                value="option1"
                                onChange={change}
                            />
                            <label>&nbsp;Mostly just to work and back.</label>
                        </div>
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option2"}
                                value="option2"
                                onChange={change}
                            />
                            <label>&nbsp;Round Trip to work but mostly with other destinations</label>
                        </div>
                        <div id="user1_row4">
                            <input type="radio"
                                checked={radio === "option3"}
                                value="option3"
                                onChange={change}
                            />
                            <label>&nbsp;I don't currently work.</label>
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
