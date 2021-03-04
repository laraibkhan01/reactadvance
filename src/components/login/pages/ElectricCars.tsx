import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CarCards from '../component/CarCards';
import './ElectricCarCss.css'

interface details{
    name : "String",
    speed : "String",
    image : number,
    Efficiency : "String",
    Price : "String",
    Rent : "String",
}

const ElectricCars = () => {
    const[details,setdetails] = useState(useSelector((state: any) => {
        return state.cardetails;
    }));

    
    const [filtertype, setFiltertype] = useState("course-type")


    // useEffect for sorting the RentList
    useEffect(() => {
        if (filtertype === "ascen") {
            let newCoursedata = [...details];
            setdetails(newCoursedata.sort((a: details, b: details) => {
                let A = a.Price;
                let B = b.Price;
                return A > B ? 1 : -1;
            }))
        }
        else if (filtertype === "descen") {
            let newCoursedata = [...details];
            setdetails(newCoursedata.sort((a: details, b: details) => {
                let A = a.Price;
                let B = b.Price;
                return B > A ? 1 : -1;
            }))
        }
    })

    // function to sort the course-list
    const sortCards = (selectedType: string) => {
        setFiltertype(selectedType)
    }


    return (
        <>
            <div className="ElectricCar-Page-Wrapper">
                <div className="ElectricCar-Page-Sort">
                    <h6>Sort-By</h6>
                    <select className="Sorting" name="Rent-price" onChange={(event) => sortCards(event.target.value)} >
                        <option selected disabled hidden> Rent Price</option>
                        <option value="ascen">Low to High</option>
                        <option value="descen">High to Low</option>
                    </select>
                </div>
                <div className="ElectricCar-Page-Search">
                    <input type="text"
                        placeholder="Search by name"
                        id="Seach-box"
                    ></input>
                </div>
            </div>
            <div className="ElectricCar-List">
                {
                    details.map((detail: any) => {
                        return (
                            <CarCards detail={detail} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ElectricCars
