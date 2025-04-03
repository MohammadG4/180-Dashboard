import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
const Dashboard = () => {
  const [api, setApi] = useState(null);

  const runApi = () => {
    axios.get(`https://fake-form.onrender.com/api/students`).then((res) => {
      setApi(res.data.data);
      console.log(res.data.data);
    });
  };
  const nav = useNavigate();

  useEffect(() => {
    runApi();
  }, []);
  function handleClick() {
    nav("/data");
  }

  if (!api) {
    return <Loader/>;
  }
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div>
          <h1 className="text-9xl mt-[-50px]">Hello !</h1>
          <p className="text-2xl">Welcome to Dashboard</p>
        </div>
        <table className="mt-8 mb-5 border-[0.1px] border-l-0 border-r-0 border-spacing-y-5">
          <thead className="text-[20px] text-center ">
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
          {/* <div className="h-3"></div> */}
          {api.map((e, index) => {
            if (index < 5)
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
                    </tr>
                  </tbody>
                </>
              );
          })}
        </table>
        <center>
          <button
            onClick={handleClick}
            className="rounded-[6px] text-white bg-[#700608] text-2xl px-3 py-1 min-w-fit"
          >
            Veiw All Data
          </button>
        </center>
      </div>
    </>
  );
};

export default Dashboard;
