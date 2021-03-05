import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import FormPage1 from '../../suitibilityPageFormPages/FormPage1'
import FormPage2 from '../../suitibilityPageFormPages/FormPage2'
import { FormPage4 } from '../../suitibilityPageFormPages/FormPage4'
import { FormPage5 } from '../../suitibilityPageFormPages/FormPage5'
import { FormPage6 } from '../../suitibilityPageFormPages/FormPage6'
import { FormPage7 } from '../../suitibilityPageFormPages/FormPage7'

const Suitibility = () => {
    let history = useHistory();
    const saveChanges = () => {
        history.push("/");
    }
    const [radio1, setRadio1] = useState("");
    const change1 = (e: any) => { setRadio1(e.target.value) }
    const [radio2, setRadio2] = useState("");
    const change2 = (e: any) => { setRadio2(e.target.value) }
    const [radio3, setRadio3] = useState("");
    const change3 = (e: any) => { setRadio3(e.target.value) }
    const [radio4, setRadio4] = useState("");
    const change4 = (e: any) => { setRadio4(e.target.value) }
    const [count, setCount] = useState(1);
    const change5 = (e: any) => { setCount(count - 1) }
    const change6 = (e: any) => { setCount(count + 1) }
    return (
        <div>
            <h6>Form {count} of  6</h6>
            <div className="col">
                {count === 1 ? (
                    <FormPage1 change5={change5}
                        change6={change6}
                        count={count}
                    />
                ) : null}
                {count === 2 ? (
                    <FormPage2 change={change1}
                        radio={radio1}
                        change5={change5}
                        change6={change6}
                        count={count}
                    />
                ) : null}
                {count === 3 ? (
                    <FormPage4 change={change2}
                        radio={radio2}
                        change5={change5}
                        change6={change6}
                        count={count}
                    />
                ) : null}
                {count === 4 ? (
                    <FormPage5 change={change3}
                        radio={radio3}
                        change5={change5}
                        change6={change6}
                        count={count} />
                ) : null}
                {count === 5 ? (
                    <FormPage6 change={change4}
                        radio={radio4}
                        change5={change5}
                        change6={change6}
                        count={count} />
                ) : null}
                {count === 6 ? (
                    <>
                        <FormPage7 />
                    </>
                ) : null}
            </div>
            { count === 6 ? (
                <button className="btn btn-primary" type="submit" onClick={saveChanges}>
                    Done
                </button>
            ) : null}
        </div>
    )
}
export default Suitibility;