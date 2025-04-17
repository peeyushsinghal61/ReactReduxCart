import React, { useState } from "react";
import { addFilteredProducts } from "./AllProductsSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const products = useSelector((store) => store.products.products);
  //console.log("serch", products);
  const dispatch = useDispatch();
  const searchMe = (val) => {
    if (val !== "") {
      const search = products.filter((item) => {
        //console.log(item.title);
        const lowerCaseConvert = item.title.toLowerCase();
        return lowerCaseConvert.includes(val);
      });
      //console.log(search);
      dispatch(addFilteredProducts(search));
    } else {
      dispatch(addFilteredProducts(products));
    }
  };
  return (
    <div>
      <div className="bg-white text-black">
        <input
          type="text"
          name="Search"
          id=""
          className="border-4 px-2"
          placeholder="search"
          onChange={(e) => {
            console.log(e.target.value);
            searchMe(e.target.value);
          }}
        />
        <button className="rounded-md bg-gray-400">search</button>
      </div>
      {searchData.length !== 0 && (
        <div className="absolute z-10 w-48 right-[11.5rem] rounded-full flex flex-col">
          {searchData.map((item, index) => (
            <li
              key={index}
              className="shadow-lg border-1 bg-gray-300 text-white list-none border-b-2 text-center"
            >
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
