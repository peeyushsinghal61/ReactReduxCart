import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice.jsx";
const CardSection = () => {
  const products = useSelector((store) => store.products.filterProducts);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row flex-wrap w-[70rem] mx-auto">
      {products.map((item, id) => {
        return (
          <div
            className="bg-white w-52 border-2 h-[22rem] flex flex-col justify-center mx-2 my-2 items-center rounded-lg shadow-md"
            key={id}
          >
            <div className="h-64 flex flex-col justify-center mx-2 my-2 items-center">
              <img src={item.images[0]} className="w-60 h-40 max-h-36" />
              <h2 className="font-bold">{item.title}</h2>
              <h4 className="font-semibold">price: ${item.price}</h4>
              <h4 className="font-semibold">rating: {item.rating}</h4>
              <h4 className="font-semibold">
                discount: {item.discountPercentage}%
              </h4>
            </div>
            <button
              className="bg-green-600 text-white rounded-lg w-28"
              onClick={(e) => {
                dispatch(addItem({ ...item, quantity: 1 }));
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
