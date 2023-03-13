import React from "react";
import s from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { getContext } from "../../Context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { showSearch, setShowSearch } = getContext();
  const navgiate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navgiate(`/searched/test`);
    setShowSearch(false);
  };

  return (
    showSearch && (
      <div className={`${s.root} z-[5] px-3`} onClick={() => setShowSearch(false)}>
        <div
          className="max-w-[800px] mx-auto bg-secondary py-2 px-3 flex items-center rounded-xl "
          onClick={(e) => e.stopPropagation()}
        >
          <form
            className={`w-full flex items-center gap-2`}
            onSubmit={handleSearch}
          >
            <BsSearch size={15} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border-none bg-transparent w-full"
            />
          </form>
          <button
            className="text-[25px] font-light pl-3 cursor-pointer"
            onClick={() => setShowSearch(false)}
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default Search;
