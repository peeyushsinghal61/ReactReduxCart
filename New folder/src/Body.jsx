import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import CartItems from "./CartItems";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts, addFilteredProducts } from "./AllProductsSlice";

const Body = () => {
  const [cate, setCate] = useState("--");
  const [rating, setRating] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const dispatch = useDispatch();

  const getProducts = async () => {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json();
    dispatch(addAllProducts(data.products));
    dispatch(addFilteredProducts(data.products));
    setAllProducts(data.products);
  };
  const handleScroll=()=>{

  }
  
  useEffect(() => {
    //console.log("body1");
    getProducts();
  }, []);
  useEffect(() => {
    //console.log("body2");
    handleFilter();
  }, [cate, rating]);

  const handleFilter = () => {
    if ((cate === "all" || cate === "--") && rating.length === 0) {
      dispatch(addFilteredProducts(allProducts));
    } else if ((cate === "all" || cate === "--") && rating.length != 0) {
      const minRate = Math.min(...rating);
      console.log(rating);
      console.log(minRate);
      const filterProducts = allProducts.filter((product) => {
        console.log(typeof product.rating);
        if (minRate == 2.51) return product.rating === minRate;
        else return product.rating >= minRate;
      });
      console.log(filterProducts);
      dispatch(addFilteredProducts(filterProducts));
    } else if (rating.length === 0) {
      const filterProducts = allProducts.filter((product) => {
        console.log(product.category);
        return product.category === cate;
      });
      console.log(filterProducts);
      dispatch(addFilteredProducts(filterProducts));
    } else if (rating.length != 0) {
      const minRate = Math.min([...rating]);
      console.log("minRate:", minRate);
      const filterProducts = allProducts.filter((product) => {
        console.log(product.category);
        if (minRate == 2.51)
          return product.category === cate && product.rating === minRate;
        else return product.category === cate && product.rating >= minRate;
      });
      console.log(filterProducts);
      dispatch(addFilteredProducts(filterProducts));
    }
  };

  return (
    <div className="mt-9 flex flex-col">
      <div className="flex flex-row justify-evenly items-center bg-gray-600 w-[100%] h-16">
        <div className="mr-8">
          <label htmlFor="Categories">Choose by Category:</label>
          <select
            name="Categories"
            id="Categories"
            onChange={(e) => {
              setCate(e.target.value);
            }}
          >
            <option value="--">--</option>
            <option value="all">All</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">fragrances</option>
            <option value="furniture">furniture</option>
            <option value="groceries">groceries</option>
          </select>
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <input
            className="mx-1"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="4"
            onClick={(e) => {
              if (e.target.checked && !rating.includes(4)) {
                setRating([...rating, 4]);
              } else if (!e.target.checked) {
                console.log("unchecked");
                const arr = rating.filter((i) => i != 4);
                console.log(arr);
                setRating(arr);
              }
              console.log(e.target.value);
            }}
          />
          <label htmlFor="vehicle1" className="mx-1">
            {" "}
            4+
          </label>
          <input
            className="mx-1"
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="3"
            onClick={(e) => {
              if (e.target.checked && !rating.includes(3)) {
                setRating([...rating, 3]);
              } else if (!e.target.checked) {
                console.log("unchecked");
                const arr = rating.filter((i) => i != 3);
                console.log(arr);
                setRating(arr);
              }
              console.log(e.target.value);
            }}
          />
          <label htmlFor="vehicle2" className="mx-1">
            {" "}
            3+
          </label>
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="2.5"
            onClick={(e) => {
              if (e.target.checked && !rating.includes(2.51)) {
                setRating([...rating, 2.51]);
              } else if (!e.target.checked) {
                console.log("unchecked");
                const arr = rating.filter((i) => i != 2.51);
                console.log(arr);
                setRating(arr);
              }
              console.log(e.target.value);
            }}
          />
          <label htmlFor="vehicle3" className="mx-1">
            2.51
          </label>
        </div>
        <div>
          <FaCartShopping
            size="25px"
            onClick={() => {
              console.log("cart clicked");
              setDisplayCart(!displayCart);
            }}
          />
        </div>
      </div>
      <CardSection />
      {displayCart && <CartItems />}
    </div>
  );
};

export default Body;
