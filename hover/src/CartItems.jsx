import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = ({ displayCart }) => {
  const cartItems = useSelector((store) => store.cart.cartitems);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("cart", cartItems);
  const calculateTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total = total + item.quantity * item.price;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  if (cartItems.length == 0)
    return (
      <div
        className={`${displayCart} w-72 h-[25rem] bg-gray-700 fixed z-10 right-0 top-[6rem] rounded-xl flex flex-row justify-center items-center`}
      >
        <h2 className="text-white">your cart is empty</h2>
      </div>
    );
  return (
    <div className="w-80 h-[25rem] fixed z-10  bg-yellow-100 right-0 top-[6rem] rounded-xl border-2 border-black">
      <div
        className={`${displayCart}  w-[100%] h-[88%] overflow-y-scroll example`}
      >
        {cartItems.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="bg-white flex flex-col h-[10%]">
        <h4 className="font-bold text-center">
          Total Amount: {totalPrice.toFixed(2)}
        </h4>
        <button className="bg-green-700 text-white w-[100%] rounded-lg">
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default CartItems;
