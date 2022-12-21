import { useEffect, useState } from "react";

export const DOTS = "...";

interface usePaginationInterface {
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
}: usePaginationInterface) => {
  const [paginationRange, setPaginationRange] = useState<
    (number | typeof DOTS)[]
  >([]);

  useEffect(() => {
    const siblingCount = 2;
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
      setPaginationRange(range(1, totalPageCount));
    } else {
      /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );

      /*
        We do not show dots just when there is just one page number to be inserted between
        the extremes of sibling and the page limits i.e 1 and totalPageCount.
        Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        /*
          Case 2: No left dots to show, but rights dots to be shown
        */
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);

        setPaginationRange([...leftRange, DOTS, totalPageCount]);
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        /*
          Case 3: No right dots to show, but left dots to be shown
        */

        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        setPaginationRange([firstPageIndex, DOTS, ...rightRange]);
      } else if (shouldShowLeftDots && shouldShowRightDots) {
        /*
          Case 4: Both left and right dots to be shown
        */
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        setPaginationRange([
          firstPageIndex,
          DOTS,
          ...middleRange,
          DOTS,
          lastPageIndex,
        ]);
      }
    }
  }, [totalCount, pageSize, currentPage]);

  return {
    paginationRange,
  };
};
