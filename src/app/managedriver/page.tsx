"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// Dummy drivers data
const drivers = [
  {
    id: 1, name: "Anna Mull", vehicle: "CV-78-QR", email: "anna.mull@mail.com", licenseNo: "1001010", experience: "3 years",
    mobile: "0400112233", age: "34 years", address: "12 Oak Street, Orange Grove", shift: "Morning",
    licenseImg: "/license.jpg",
  },
  {
    id: 2, name: "Jacob Jones", vehicle: "No Vehicle assign", email: "jjones@mail.com", licenseNo: "5432190", experience: "4 years",
    mobile: "0412345678", age: "28 years", address: "98 Lake Road, Silver Town", shift: "Evening",
    licenseImg: "/license.jpg",
  },
  {
    id: 3, name: "Jenny Wilson", vehicle: "XO-54-FQ", email: "jennyw@mail.com", licenseNo: "5577543", experience: "2 years",
    mobile: "0450298374", age: "30 years", address: "45 Devonport Dr, Eastcity", shift: "Afternoon",
    licenseImg: "/license.jpg",
  },
  {
    id: 4, name: "Oliver", vehicle: "XN-33-ZQ", email: "oliver@email.com", licenseNo: "2022911", experience: "6 years",
    mobile: "0498761234", age: "41 years", address: "29 Regent St, Ashford", shift: "Night",
    licenseImg: "/license.jpg",
  },
  {
    id: 5, name: "John", vehicle: "RT-98-U1", email: "john@email.com", licenseNo: "2019181", experience: "8 years",
    mobile: "0411122233", age: "36 years", address: "88 Main St, Camden", shift: "Morning",
    licenseImg: "/license.jpg",
  },
  {
    id: 6, name: "Robin", vehicle: "MT-98-UI", email: "robin@email.com", licenseNo: "3123122", experience: "1 year",
    mobile: "0444213123", age: "27 years", address: "23 Hills Rd, Woodvale", shift: "Night",
    licenseImg: "/license.jpg",
  },
  {
    id: 7, name: "Alexa", vehicle: "No Vehicle assign", email: "alexa@email.com", licenseNo: "3654111", experience: "3 years",
    mobile: "0487100923", age: "23 years", address: "10 Wattle Rd, Palm Beach", shift: "Afternoon",
    licenseImg: "/license.jpg",
  },
  {
    id: 8, name: "Leslie Alexander", vehicle: "No Vehicle assign", email: "leslie@mail.com", licenseNo: "5409450", experience: "5 years",
    mobile: "0435990169", age: "40 years", address: "4 Comboyne St, Kendall 2439, South Wales", shift: "",
    licenseImg: "/license.jpg",
  },
  {
    id: 9, name: "Lie Alexander", vehicle: "RT-98-UI", email: "lie.alex@mail.com", licenseNo: "6032191", experience: "2 years",
    mobile: "0419234567", age: "35 years", address: "99 Hill Rd, Nelson", shift: "Day",
    licenseImg: "/license.jpg",
  },
  {
    id: 10, name: "Les", vehicle: "No Vehicle assign", email: "les@email.com", licenseNo: "2104891", experience: "1 year",
    mobile: "0441239876", age: "45 years", address: "17 Bridge Ln, Barley", shift: "",
    licenseImg: "/license.jpg",
  }
];

export default function ManageDriverPage() {
  const [selected, setSelected] = useState<number>(0); // Default to Leslie Alexander
  const [query, setQuery] = useState("")

  const driverDetails = drivers[selected];

  return (
    <div className="flex h-screen bg-[#F8FAFD]  box-border mt-1 px-2 mb-1">
      {/* Left Side - Driver List */}
      <div className="w-full md:w-[330px] border-r border-[#EDF3F9] bg-white flex flex-col rounded-lg shadow-sm">
        <div className="p-7">
         <Input
            className="rounded-md bg-[#F8FBFF] border border-gray-200"
            placeholder="Search Driver"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <h2 className="px-4 py-2 text-lg font-semibold text-gray-700">All Drivers</h2>
        <div className="flex-1 overflow-y-auto">
          {drivers.map((driver, idx) => (
            <div
              key={driver.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                selected === idx
                  ? "bg-[#E6F2FF]  border-[#0090FF] rounded-none ..."
                  : "hover:bg-[#F7FAFF]"
              }`}
              onClick={() => setSelected(idx)}
            >
              <div className="rounded-full w-10 h-10 bg-[#F8FBFF] flex items-center justify-center border border-gray-200 text-gray-400 text-base font-bold uppercase">
                {driver.name
                  .split(" ")
                  .map((str) => str[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="flex flex-col text-sm">
                <span className={selected === idx ? "text-[#007DFA] font-semibold" : "text-gray-800"}>
                  {driver.name}
                </span>
                <span className="text-gray-400 text-xs">{driver.vehicle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Small gap between panels */}
      <div className="w-7" />
      {/* Right Side - Details */}
      <div className="flex-1 flex flex-col min-w-0 bg-white rounded-lg shadow-sm">
        {/* Top Driver Detail Header */}
        <div className="flex justify-between items-center px-8 pt-8 pb-2">
          <div className="text-2xl font-semibold">
            Driver Details{" "}
            <span className="font-normal text-base text-[#FF5E57]">· inactive</span>
          </div>
          <div className="flex gap-2">
            <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-6 cursor-pointer rounded-lg">
              Assign Vehicle
            </Button>
            <Button variant="outline" className="border border-[#007DFA] text-[#007DFA] font-semibold cursor-pointer rounded-lg">
              Active
            </Button>
          </div>
        </div>
        {/* Details + Tabs */}
        <div className="flex px-8 mt-2 gap-6">
          <div className="flex gap-6 border-b w-full">
            <button className="pb-2 px-0 border-b-2 border-[#007DFA] text-[#007DFA] font-medium bg-transparent">
              Information
            </button>
            <button className="pb-2 px-0 text-gray-400 font-medium bg-transparent cursor-not-allowed">
              No Vehicle assign
            </button>
          </div>
        </div>
        {/* Table-style Driver Details */}
        <div className="px-8 py-5 flex flex-col gap-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm font-medium text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Name</td>
                  <td className="py-2 pr-8">{driverDetails.name}</td>
                  <td className="py-2 pr-8 text-gray-400">License No</td>
                  <td className="py-2">{driverDetails.licenseNo}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Email</td>
                  <td className="py-2 pr-8">{driverDetails.email}</td>
                  <td className="py-2 pr-8 text-gray-400">Experience</td>
                  <td className="py-2">{driverDetails.experience}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Mobile No.</td>
                  <td className="py-2 pr-8">{driverDetails.mobile}</td>
                  <td className="py-2 pr-8 text-gray-400">Age</td>
                  <td className="py-2">{driverDetails.age}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Address</td>
                  <td className="py-2 pr-8">{driverDetails.address}</td>
                  <td className="py-2 pr-8 text-gray-400">Driver Shift</td>
                  <td className="py-2">{driverDetails.shift}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* License Card Placeholder */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-2">Driving License</h3>
            <div className="rounded-lg shadow w-[330px] h-[200px] bg-[#F5F7FA] border border-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="mt-auto flex justify-center gap-7 py-6 border-t bg-[#F9FBFE] rounded-b-lg">
          <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Add Driver
          </Button>
          <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Edit Driver
          </Button>
          <Button className="bg-[#f46058] hover:bg-[#f50223e4] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
