import React, { useState } from "react";

const Sign = () => {
  const [text, setText] = useState("up");
  return (
    <div className="absolute w-56 h-44 bg-black bg-opacity-55 rounded-lg flex flex-col justify-evenly  items-center top-40 ">
      {text == "up" && (
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="border-2 rounded-md w-40"
        />
      )}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="border-2 rounded-md w-40"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        className="border-2 rounded-md w-40"
      />
      {text == "up" ? (
        <a
          href="#"
          onClick={() => {
            setText("in");
          }}
        >
          already have an account?
        </a>
      ) : (
        <a
          href="#"
          onClick={() => {
            setText("up");
          }}
        >
          create an account?
        </a>
      )}
      <button className="bg-red-700 text-white rounded-lg w-20 p-1">
        Sign {text}
      </button>
    </div>
  );
};

export default Sign;
