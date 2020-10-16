import React, {useState} from "react";
import styles from "./Pagination.module.sass";

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, partSize = 10}) => {
    const [partNumber, setPartNumber] = useState(1);

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pagesArr = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    const partCount = Math.ceil(pagesCount / partSize);
    const leftPartPageNumber = (partNumber - 1) * partSize + 1;
    const rightPartPageNumber = partNumber * partSize;

    return <div className={styles.pagination}>
        {partNumber > 1 && <button onClick={() => setPartNumber(partNumber - 1)}>Prev</button>}

        {pagesArr.filter(page => page >= leftPartPageNumber && page <= rightPartPageNumber).map(page =>
            <span
                key={page}
                className={currentPage === page ? styles.paginationPageActive : styles.paginationPage}
                onClick={(e) => onPageChanged(page)}
            >{page}</span>)}

        {partCount > partNumber && <button onClick={() => setPartNumber(partNumber + 1)}>next</button>}
    </div>;
};

export default Pagination;