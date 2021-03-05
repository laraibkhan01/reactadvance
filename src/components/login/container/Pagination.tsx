import React from 'react';
const Pagination = ({ postPerPage, totalPosts, paginate }: any) => {
    const PageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        PageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    PageNumber.map((number: any) => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>

    );
}

export default Pagination;