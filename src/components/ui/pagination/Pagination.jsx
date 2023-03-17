import React from "react";
import { getContext } from "../../../Context";
import { usePagination } from "../../../hooks/UsePagination";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = getContext();
  const pagesArray = usePagination(totalPages);

  return (
    <div className={`pt-8 pb-24 md:py-8 flex flex-wrap justify-center gap-5`}>
      {pagesArray.map((page, indx) => (
        <a
          href="#products"
          key={page}
          className={`py-2 px-4 rounded-md ${page === currentPage ? 'bg-active' : 'bg-danger'} text-white text-[14px] leading-[20px]`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </a>
      ))}
    </div>
  );
};
// ${
//   indx === pagesArray.length - 1 ? "mr-0" : "mr-5"
// }
export default Pagination;
