import React from "react";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-indigo-500 w-fit mb-6 rounded-md px-4 py-2 text-white hover:bg-indigo-600 cursor-pointer "
    >
      ← Back
    </button>
  );
};

export default BackButton;
