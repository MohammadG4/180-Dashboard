import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import Loader2 from "./components/Loader2";
import { MdDelete } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";


const Data = () => {
  const [api, setApi] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [load,setLoad]= useState(false)

  const runApi = () => {
    axios.get(`https://fake-form.onrender.com/api/students`).then((res) => {
      setApi(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(() => {
    runApi();
  }, []);

  const nav = useNavigate();
  function handleEdit(id) {
    nav(`/data/${id}`);
  }
  function handleDelete(id) {
    setLoad(true)
    axios
      .delete(`https://fake-form.onrender.com/api/students/${id}`)
      .then((res) => {
        runApi();
       
      }
    ).finally(()=>{ 
      setLoad(false)

      setToggle(true);
      setTimeout(() => {
        setToggle(false);
      }, 4000);});
      
  }

  if (!api) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col h-screen w-[110%] transition-all">
        <div>
          <h1 className="text-3xl font-bold">Form Data</h1>
        </div>
        {load?(<Loader2/>):
          toggle? ( <p className="bg-green-500 text-white self-center text-center w-1/2 px-[5px] py-[8px] mt-[20px] rounded-[5px] shadow-lg">Student Deleted Successfuly!
        </p>):(<></>)
        }
        <table className="mt-8 mb-5 border-[0.1px] border-l-0 border-r-0 ">
          <thead className="text-[18px] text-center ">
            <tr className="">
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Level</th>
              <th>University</th>
            </tr>
          </thead>
          <div className="h-3"></div>
          {api.map((e, index) => {
            return (
              <>
                <tbody className="text-[16px] text-center h-[40px]  border-l-0 border-r-0 border-[0.1px]">
                  <tr className="">
                    <td>{e._id}</td>
                    <td>{e.name}</td>
                    <td> {e.age} </td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.level}</td>
                    <td>{e.university}</td>
                    <div className="flex gap-[5px]">
                      <button
                        onClick={() => {
                          handleEdit(e._id);
                        }}
                        className="flex  justify-center bg-green-500 text-white text-center p-1 pr-2 rounded-md text-sm"
                      >
                        <IoMdPerson size={18}  className="pt-[1px]" />
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          handleDelete(e._id);
                        }}
                        className="flex bg-red-500 text-white text-center p-1 pr-2 rounded-md text-sm"
                      >
                        <MdDelete size={18} className="pt-[1px]" />
                        Delete
                      </button>
                    </div>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        <center></center>
      </div>
    </>
  );
};
export default Data;
