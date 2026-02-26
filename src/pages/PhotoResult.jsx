import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
const PhotoResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state;

  if (!image) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>No Image Found ❌</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col gap-5 bg-slate-100 justify-center items-center p-5">
      <BackButton/>
      <div className="text-center shadow-xl rounded-2xl p-8 "> 
        <h1 className="font-bold text-2xl mb-5">Captured Photo 📸 </h1>
        <img className="border rounded-md " src={image} alt="Image" />
      </div>
      <a href={image} download="my-photo">
        <button className="bg-green-500 w-fit mb-6 rounded-md px-4 py-2 text-white hover:bg-green-600 cursor-pointer">
          Download
        </button>
      </a>
    </div>
  );
};

export default PhotoResult;
