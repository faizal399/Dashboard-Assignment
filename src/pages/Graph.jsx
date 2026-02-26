import React from "react";
import { useLocation} from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import BackButton from "../components/BackButton";
const BarGraph = () => {
  const location = useLocation();
  const employees = location.state || [];
  const firstTen = employees.slice(0, 10);
  const chartData = firstTen.map((emp) => ({
    name: emp[0],
    salary: emp[5].replace(/[$,]/g, ""),
  }));

  return (
    <div className="min-h-screen bg-slate-100 p-10 flex flex-col items-center ">
      <BackButton />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          📊 Salary Bar Graph (Top 10 Employees)
        </h1>
        <ResponsiveContainer width="100%" height="400">
          <BarChart data={chartData}>
            <CartesianGrid stdDeviation="3-3" />
            <XAxis dataKey="name" />
            <YAxis  dataKey="salary"/>
            <Tooltip />
            <Bar dataKey="salary" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BarGraph;
