import React from "react";
import styles from "./Pagination.module.sass";

const Pagination = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagesArr = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    return <div className={styles.pagination}>{pagesArr.map(page =>
        <span
            key={page}
            className={props.currentPage === page ? styles.paginationPageActive : styles.paginationPage}
            onClick={(e) => props.onPageChanged(page)}
        >{page}</span>)}</div>;
};

export default Pagination;