"use client"
import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaNewspaper,
  FaChartBar,
  FaListAlt,
  FaTags,
} from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVisits: 0,

  });
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/dashboard`);
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch dashboard statistics", error);
      }
    };

    fetchStats();
  }, []);

  const data = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers className="text-3xl" />,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Total Visits",
      value: stats.totalVisits,
      icon: <FaChartBar className="text-3xl" />,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
   
  ];

  return (
    <div className="p-4 h-[80vh]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} ${item.hoverColor} flex flex-col items-center p-4 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-white`}
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-2xl">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
