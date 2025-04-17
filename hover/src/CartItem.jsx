import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "./CartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-purple-100 flex flex-row text-black  items-center justify-center w-[100%] rounded-lg shadow-lg border-2 border-purple-300">
      <div className="w-[30%] h-16 mr-0">
        <img src={item.images[0]} className="w-20 h-10 my-2" />
      </div>
      <div className="w-[60%] ml-0">
        <div className="flex flex-col items-center ">
          <h2 className="font-bold">{item.title}</h2>
          <h4 className="font-normal">price: ${item.price}</h4>
          <div className="flex flex-row items-center justify-start">
            <GrSubtractCircle
              className="mr-2"
              onClick={() => {
                dispatch(decreaseItemQuantity(item.title));
              }}
            />
            {item.quantity}
            <CiSquarePlus
              className="ml-2"
              onClick={() => {
                dispatch(increaseItemQuantity(item.title));
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start">
        <MdCancel
          onClick={() => {
            dispatch(removeItem(item.title));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
