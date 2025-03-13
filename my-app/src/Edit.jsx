import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./components/Loader";
import Loader2 from "./components/Loader2";

const Edit = () => {
  const [updated, setUpdated] = useState({ type: -2, res: null });
  const [api, setApi] = useState(null);
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const runApi = () => {
    axios
      .get(`https://fake-form.onrender.com/api/students/${id}`)
      .then((res) => {
        setApi(res.data.data);
        console.log(res.data.data);
        const fetchData = res.data.data;
        setdata({
          name: fetchData.name || "",
          email: fetchData.email || "",
          phone: fetchData.phone || "",
          age: fetchData.age || "",
          universty: fetchData.universty || "",
          level: fetchData.level || "",
        });
      });
  };
  const nav = useNavigate();

  useEffect(() => {
    runApi();
  }, []);

  function handleBack() {
    nav("/data");
  }

  const submit = (e) => {
    e.preventDefault();
    setUpdated({ type: -1, res: null });
    axios
      .patch(`https://fake-form.onrender.com/api/students/${id}`, data)
      .then((res) => {
        console.log("Updated successfully", res.data);
        setUpdated({
          type: 1,
          // res:res.data
        });
        setTimeout(() => {
          setUpdated({ type: -2, res: null });
          nav("/data")
        }, 2000);
      })
      .catch((err) => {
        console.error("Update failed", err);
        setUpdated({
          type: 0,
          res: err.response.data.message,
        });

        
      });

  };

  const update = (e) => {
    const { name, value } = e.target;
    setdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  if (!api) {
    return <Loader />;
  }
  return (
    <div className="transition-all">
      <form
        action=""
        className="flex flex-col pt-5 ml-[-10px] transition-all"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {updated.type === 1 ? (
          <p className="bg-green-500 text-white self-center text-center w-1/2 px-[5px] py-[8px] mt-[-20px] rounded-[5px] shadow-md">
            {" "}
            ID: {id} Updated Successfuly{" "}
          </p>
        ) : updated.type === 0 ? (
          <p className="bg-red-500 text-white self-center text-center w-1/2 px-[5px] py-[8px] mt-[-20px] rounded-[5px] shadow-md">
            Failed to Update ID: {id}
            <br />
            {updated.res}
          </p>
        ) : updated.type === -1 ? (
          <div className="transition-all animate-bounce">
            <Loader2 />
          </div>
        ) : (
          <></>
        )}
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder={data.name}
          name="name"
          value={data.name}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 mb-5"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder={data.email}
          name="email"
          value={data.email}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300  mb-5 "
        />
        <label htmlFor="">Phone</label>
        <input
          type="tel"
          placeholder={data.phone}
          name="phone"
          value={data.phone}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 mb-5"
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          placeholder={data.age}
          name="age"
          value={data.age}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 mb-5"
        />
        <label htmlFor="">Level</label>
        <input
          type="number"
          placeholder={data.level}
          name="level"
          value={data.level}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 mb-5"
        />
        <label htmlFor="">Universty</label>
        <select
          name="universty"
          value={data.universty}
          onChange={update}
          className="w-[100%] p-[10px] rounded-[5px] border border-gray-300 mb-5 transition-all"
        >
          <option value="cairo">Cairo</option>
          <option value="ain shams">Ain Shams</option>
          <option value="helwan">Helwan</option>
          <option value="others">Others</option>
        </select>
        <button
          onClick={submit}
          className="bg-[#700608] text-white p-[10px] rounded-[5px] w-full mb-5 text-xl"
        >
          Update
        </button>
        <button
          onClick={handleBack}
          className="bg-[#700608] text-white p-[10px] rounded-[5px] w-full mb-1 text-xl"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Edit;
