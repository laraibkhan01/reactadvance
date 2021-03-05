import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CarCards from '../component/CarCards';
import './ElectricCarCss.css'
import Pagination from '../container/Pagination'
interface details {
    name: "String",
    speed: "String",
    image: number,
    Efficiency: "String",
    Price: "String",
    Rent: "String",
}

const ElectricCars = () => {

    const [details, setdetails] = useState(useSelector((state: any) => {
        return state.container.cardetails;
    }));

    const [page, setPage] = useState(1);
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

    const debounce = (fn: Function, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    }
    const [query1, setquery] = useState("");
    const handleChange = (event: any) => {
        const data = event.target.value.toUpperCase();
        setquery(data);
    }
    // usecallback provides the memoized callback;
    const optimisedversion = debounce(handleChange);

    //Pagination

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentCards = details.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

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
                        placeholder="Search by name."
                        onChange={optimisedversion}
                    ></input>
                </div>
            </div>
            <div className="ElectricCar-List">
                {
                    currentCards.map((detail: any) => (
                        <CarCards detail={detail} query1={query1} key={detail.id} />
                    ))
                }
            </div>
            <Pagination postPerPage={postPerPage} totalPosts={details.length} paginate={paginate} />
        </>
    )
}

export default ElectricCars
