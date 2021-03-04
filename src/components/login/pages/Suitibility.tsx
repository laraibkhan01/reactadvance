import React, { useState } from 'react'
import FormPage1 from '../component/FormPage1'
import FormPage2 from '../component/FormPage2'
import {FormPage3} from '../component/FormPage3'
import {FormPage4} from '../component/FormPage4'
import {FormPage5} from '../component/FormPage5'
import {FormPage6} from '../component/FormPage6'
import {FormPage7} from '../component/FormPage7'

const Suitibility = () => {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
    })
    const updateForm = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>Step {count} of  7</h1>
            <div className="col">
                {count === 1 ? (
                    <FormPage1 />
                ) : null}
                {count === 2 ? (
                    <FormPage2 />
                ) : null}
                {count === 3 ? (
                    <FormPage3 />
                ) : null}
                {count === 4 ? (
                    <FormPage4 />
                ) : null}
                {count === 5 ? (
                    <FormPage5 />
                ) : null}
                {count === 6 ? (
                    <FormPage6 />
                ) : null}
                {count === 7 ? (
                    <>
                        <FormPage7 />
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </>
                ) : null}
            </div>
            <button className="btn btn-dark"
                type="submit"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}>
                Back
            </button>
            <button className="btn btn-light"
                type="submit"
                onClick={() => setCount(count + 1)}
                disabled={count > 7}>
                Next
            </button>
        </div>
    )
}
export default Suitibility;