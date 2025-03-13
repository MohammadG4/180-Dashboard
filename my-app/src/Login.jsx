import React, { useState } from "react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post("https://fake-form.onrender.com/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/"); 
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.log(err)
      setError(err.response.data.message);
    }
  };
  return (
    <center>
    <div className="flex-col mt-[-10px] mr-[-15px] ml-[-29%] h-screen w-screen flex justify-center items-center bg-[#222]">
{error &&    <p className="bg-red-500 mb-5 text-white self-center text-center w-[350px] px-[5px] py-[8px] mt-[-20px] rounded-[5px] shadow-md">
            {error}
          </p>}
      <form onSubmit={handleLogin} className="w-[350px] flex flex-col justify-center items-center bg-[#f6f6f6] rounded-[5px] py-[20px] px-[10px] ">
        <img src={logo} alt="logo" className="w-[150px] my-[20px] mx-auto" />
        <div className="w-full mb-[15px]">
          <label className="mb-1 text-black block text-start" for="email" >Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            className="py-[8px] px-2 w-full bg-white border-[1px] border-[#eee]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-[15px]">
          <label className="text-start mb-1 text-black block" for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            className="py-[8px] px-2 w-full bg-white border-[1px] border-[#eee]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit" className="bg-[#700608] py-2 px-6 w-full text-white">Login</button>
      </form>
    </div>
    </center>
  );
};

export default Login;