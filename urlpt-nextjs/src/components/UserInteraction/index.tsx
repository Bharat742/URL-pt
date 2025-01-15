"use client"
import React, { useState } from "react";

const DashboardTable = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData([]);

    try {
      const response = await fetch("https://urlpt.technians.in/userdata/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      const finalData = responseData.map((item: any) =>
        JSON.parse(item.user_data)
      );
      setData(finalData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Fetch Data
      </button>

      <div className="mt-6 overflow-x-auto">
        {loading && <p className="text-gray-600">Loading data...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && data.length === 0 && (
          <p className="text-gray-600">No data available.</p>
        )}
        {!loading && data.length > 0 && (
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  User ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  IP
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Device Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Screen Width
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Screen Height
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  City
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Country
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Region
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Latitude
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Longitude
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Landing Page
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Traffic Source
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Referrer
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  User Agent
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                const {
                  userId = "N/A",
                  ip = "N/A",
                  device = {},
                  location = {},
                  landingPage = "N/A",
                  trafficSource = "N/A",
                  referrer = "N/A",
                  userAgent = "N/A",
                } = user;

                const cells = [
                  userId,
                  ip,
                  device.deviceType || "N/A",
                  device.screenWidth || "N/A",
                  device.screenHeight || "N/A",
                  location.city || "N/A",
                  location.country || "N/A",
                  location.region || "N/A",
                  location.latitude || "N/A",
                  location.longitude || "N/A",
                  landingPage,
                  trafficSource,
                  referrer,
                  userAgent,
                ];

                return (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {cells.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardTable;
