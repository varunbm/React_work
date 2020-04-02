import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemLength, pageSize, currentPage, onPageChange } = props;
  const numberOfPages = Math.ceil(itemLength / pageSize);
  const pages = _.range(1, numberOfPages + 1);

  if (numberOfPages === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
