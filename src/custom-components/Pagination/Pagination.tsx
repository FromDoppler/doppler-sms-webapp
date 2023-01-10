import React from "react";
import { getPaginationRange, DOTS } from "./getPaginationRange";
export interface PaginationInterface {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (arg: number) => void;
}

const Pagination: React.FC<PaginationInterface> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const paginationRange = getPaginationRange({
    totalCount,
    pageSize,
    currentPage,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
      <nav className="dp-pagination">
        <ul>
          <li>
            <button
              type="button"
              className="ms-icon icon-arrow-prev"
              onClick={onPrevious}
              disabled={currentPage === 1}
            ></button>
          </li>
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <li key={index}>
                  <button className="dp-pag-point"></button>
                </li>
              );
            }
            if (pageNumber === currentPage)
              return (
                <li key={index}>
                  <span className="dp-active-page" aria-current="page">
                    {pageNumber}
                  </span>
                </li>
              );
            return (
              <li key={index}>
                <button type="button" onClick={() => onPageChange(+pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="ms-icon icon-arrow-next"
              onClick={onNext}
              disabled={currentPage === lastPage}
            ></button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
