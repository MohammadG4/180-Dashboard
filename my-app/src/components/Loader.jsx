import React from 'react';
import logo from "../assets/logo.png"

const Loader = () => {
  return (
    <div className=" flex-col gap-4 h-screen w-full flex items-center justify-center">
      <div className="w-28 h-28 border-8 text-[#700608] text-4xl animate-spin flex border-[#e4312130] items-center justify-center border-t-[#700608] rounded-full">
        <img src={logo} alt="" height="40em" width="40em" className="animate-ping" />
      </div>
    </div>
  );
}

export default Loader;
