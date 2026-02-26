import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import BackButton from "../components/BackButton";
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const emp = location.state;
  const [showCamera, setShowCamera] = useState(false);
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo", { state: imageSrc });
  };

  if (!emp) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>No Employee Data found ❌</p>
      </div>
    );
  }

  return (
    <div className=" bg-slate-100 p-10 flex flex-col min-h-screen  items-center">
      <BackButton/>
      {showCamera ? (
        ""
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-1/3">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-[50%] rounded-full border"
            />
            <h1 className="font-bold text-3xl mt-5">{emp[0]}</h1>
            <p className="text-gray-500">{emp[1]}</p>
          </div>
          <div className="space-y-3">
            <p>
              <strong>City: </strong>
              {emp[2]}
            </p>
            <p>
              <strong>Employee ID: </strong>
              {emp[3]}
            </p>
            <p>
              <strong>Joining Date: </strong>
              {emp[4]}
            </p>
            <p>
              <strong>Salary: </strong>
              {emp[5]}
            </p>
          </div>
        </div>
      )}
      {showCamera ? (
        <div className="flex flex-col justify-center items-center p-2 bg-white rounded-md">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-md  border shadow-xl"
          />
          <button 
          className="bg-green-500 font-semibold mt-5 py-2 rounded cursor-pointer px-4" onClick={capture}>Take Photo</button>
          <button className="bg-red-500 font-semibold mt-5 py-2 rounded cursor-pointer px-4" onClick={() => setShowCamera(false)}>Cancle</button>
        </div>
      ) : (
        <button className="bg-green-500 font-semibold mt-5 py-2 rounded cursor-pointer px-4" onClick={() => setShowCamera(true)}>Open Camera</button>
      )}
    </div>
  );
};

export default Details;
