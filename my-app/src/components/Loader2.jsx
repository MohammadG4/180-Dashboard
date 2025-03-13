import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png"

const Loader2 = () => {
  return (
        <div className="flex-col gap-4 transition-all  flex items-center justify-center">
          <div className="w-20 h-20 border-[5px] transition-all text-[#700608] text-4xl animate-spin flex border-[#e4312130] items-center justify-center border-t-[#700608] rounded-full">
            <img src={logo} alt="" height="30em" width="30em" className="animate-ping" />
          </div>
        </div>
  );
}
export default Loader2;
