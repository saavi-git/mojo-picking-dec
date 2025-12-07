"use client";

import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const activeVehiclesDrivers = [
  "CV-78-QR/Anna Mull",
  "XN-33-ZQ/Jacob Jones",
  "XO-54-FO/Jenny Wilson",
  "RT-98-UI/Leslie Alexander",
  "CV-78-QR/Oliver",
  "XN-33-ZQ/John",
  "XO-54-FO/Robin",
  "RT-98-UI/Alexa",
  "CV-78-QR/Lie Alexander",
  "MT-98-UI/Oliver",
  "CV-78-QR/John",
  "XN-33-ZQ/Robin",
  "XO-54-FO/Alexa",
  "RT-98-UI/John",
  "XN-33-ZQ/Oliver",
  "CV-78-QR/Leslie Alexander",
];

export default function SendMessagePage() {
  const [search, setSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [message, setMessage] = useState("");
  const [groups] = useState(["Group A", "Group B", "Group C"]);

  const filteredDrivers = activeVehiclesDrivers.filter((entry) =>
    entry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFD] mt-1 px-2 mb-1">

      
      <div className="w-full">
        
        <div className="flex items-center mb-7">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Driver and Vehicle"
            className="max-w-md bg-[#F8FBFF] border border-gray-300 rounded-lg"
          />
          <div className="flex-1" />
          {/* <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
            Search
          </Button> */}
        </div>

        <div className="bg-white rounded-xl p-6 mb-1 shadow-sm">
           <div className=" px-4 py-3 rounded-t-lg border-[#E9E9E9] font-semibold text-[#383C40] text-lg">
                Messages
              </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Left Section */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD] min-h-[480px]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-lg">
               Active Vehicles and Driver
              </div>
              
              <div className="flex-1 overflow-auto">
                <ul>
                  {filteredDrivers.map((entry) => (
                    <li
                      key={entry}
                      className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-[#EFF6FF] border-b border-[#E9E9E9]"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD] min-h-[480px]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-lg">
                Groups
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6">
                {/* Dropdown with left-side arrow */}
                <div className="relative mb-6">
                  <select
                    className="w-full p-2  border border-[#E9E9E9] rounded-lg bg-white focus:outline-none text-gray-700 appearance-none"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                  >
                    <option value="">Select the Created Group</option>
                    {groups.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow Icon on Left Side */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <Button variant="outline" className="border-red-400 text-red-600 w-18 h-8 cursor-pointer">
                    Delete
                  </Button>
                  <Button variant="outline" className="border-blue-400 text-blue-600 w-18 h-8 cursor-pointer">
                    Edit
                  </Button>
                  <Button className="bg-[#007DFA] text-white w-18 h-8 cursor-pointer">Create</Button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD] min-h-[480px]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-lg">
                Send Message
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6">
                <textarea
                  rows={5}
                  className="mb-6 p-3 w-full border border-[#E9E9E9] rounded-lg bg-white focus:outline-none text-gray-700"
                  placeholder="Send your message here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button className="ml-auto w-28 bg-[#007DFA] text-white cursor-pointer px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
