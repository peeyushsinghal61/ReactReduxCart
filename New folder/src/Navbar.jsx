import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sign from "./Sign";

const Navbar = () => {
  const [location, setLocation] = useState("not found");
  const [ip, setIP] = useState("not found");
  let [disSign, setDisSign] = useState(false);
  let [vis, setVis] = useState("invisible");
  const data = [
    "T-Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Sweatshirts",
    "Sweaters",
    "Jackets",
  ];
  const findClientIP = async () => {
    const clientIp = await fetch("https://api.ipify.org?format=json");
    const data = await clientIp.json();
    console.log(data);
    setIP(data.ip);
  };
  const findMyLocation = async () => {
    const locationData = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await locationData.json();
    console.log(data);
    setLocation(data);
  };
  useEffect(() => {
    findClientIP();
    findMyLocation();
  }, [location]);

  return (
    <div className="fixed w-[100%] top-0">
      <div className="bg-slate-500 text-white flex h-10 justify-evenly py-1">
        <a
          href="#"
          onMouseOver={() => {
            setVis("visible");
            console.log(vis);
          }}
          onMouseOut={() => {
            setVis("invisible");
            console.log(vis);
          }}
        >
          Home
        </a>
        <a
          href="#"
          onMouseOver={() => {
            setVis("visible");
          }}
          onMouseOut={() => {
            setVis("invisible");
          }}
        >
          About Us
        </a>
        <a
          href="#"
          onMouseOver={() => {
            setVis("visible");
          }}
          onMouseOut={() => {
            setVis("invisible");
          }}
        >
          Contact us
        </a>
        <a
          href="#"
          onMouseOver={() => {
            setVis("visible");
          }}
          onMouseOut={() => {
            setVis("invisible");
          }}
        >
          Services
        </a>
        <div className="flex flex-col text-xs w-18">
          <h4>location: {location.city}</h4>
          <h4>ZIP: {location.zip}</h4>
        </div>
        <Search />
        <button
          className="bg-green-700 text-white rounded-lg w-20 p-1"
          onClick={() => {
            setDisSign(!disSign);
          }}
        >
          Sign
        </button>
        {disSign && <Sign />}
      </div>
      <div>
        <div
          className={`h-96 w-96 bg-fuchsia-300 absolute top-10 left-10 rounded-lg shadow-lg ${vis} transition-all ease-in-out delay-300 flex flex-wrap`}
          onMouseOver={() => {
            setVis("visible");
          }}
          onMouseOut={() => {
            setVis("invisible");
          }}
        >
          <div className="flex flex-col m-4">
            {data.map((item, index) => (
              <a href="#" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col m-4">
            {data.map((item, index) => (
              <a href="#" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col m-4">
            {data.map((item, index) => (
              <a href="#" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col m-4">
            {data.map((item, index) => (
              <a href="#" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
