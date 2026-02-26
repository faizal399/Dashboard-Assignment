import React from "react";
import { useState, useEffect } from "react";
import { fetchEmployees } from "../services/api";
import { RiLoader3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data.TABLE_DATA.data);
      } catch (error) {
        setError("Failed to Fetch data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getdata();
  }, []);

  if (loading)
    return (
      <div className="h-screen fixed inset-0 w-screen flex justify-center items-center text-4xl animate-spin overflow-hidden">
        <RiLoader3Line />
      </div>
    );
  if (error) return <p>{error}</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="m-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-center mb-10 ">
          Employees List
        </h1>
      </div>
      <div className="cards rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2    ">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 text-center"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  className="rounded-full object-cover w-full h-full border-4 border-indigo-200"
                  src={profile}
                  alt="Profile"
                />
              </div>
              <h1>
                <span className="underline">Name:</span> {emp[0]}
              </h1>
            </div>
            <div className="space-y-2 text-gray-600  ">
              <p>
                <span className="font-semibold text-black">Position:</span>
                {emp[1]}
              </p>
              <p>
                <span className="font-semibold text-black">salary:</span>
                {emp[5]}
              </p>
              <button
                onClick={() => navigate("/details", { state: emp })}
                className="mt-4 cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 flex gap-2 justify-center items-center">
        <button
          onClick={() => {
            navigate("/graph", { state: employees });
          }}
          className=" font-bold cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          View Salary Graph 📊
        </button>
        <button
          onClick={() => navigate("/map", { state: employees })}
          className="bg-green-600 text-white px-4 py-2 rounded-md  hover:bg-green-700"
        >
          🗺 View Map
        </button>
      </div>
    </div>
  );
};

export default List;
