import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "")
      return alert("Please Enter username and password!");
    if (username === "testuser" && password === "Test123") {
       localStorage.setItem("isLoggedIn", "true");
      navigate("/list");
    } else {
      alert("incorrect username or password !!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-200">
      <div className="bg-white w-[400px] p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className="H-contaner text-3xl font-bold mb-5">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Login Form
          </h1>
        </div>
        <div>
          <form onSubmit={handleLogin} className="flex-col gap-4 flex">
            <label className="block text-sm mb-1">
              <p>Username</p>

              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="block text-sm mb-1">
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="m-auto ">
              <button
                type="submit"
                className="mt-4 bg-indigo-500 px-4 cursor-pointer text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
