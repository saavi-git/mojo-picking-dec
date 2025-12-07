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

const unassignedInvoices = [
  { date: "19/05/23", number: "554536 | 3BN |", desc: "Ovalo Inchcolm" },
  { date: "19/05/23", number: "456345 | 5GH |", desc: "Ovalo Inchcolm" },
  { date: "19/05/23", number: "135454 | 0RG |", desc: "Ovalo Inchcolm" },
  { date: "19/05/23", number: "98754 | 4GF |", desc: "Ovalo Inchcolm" },
  { date: "19/05/23", number: "32424 | 3BN |", desc: "Ovalo Inchcolm" },
];

export default function DeliveriesPage() {
  const [search, setSearch] = useState("");

  const filteredDrivers = activeVehiclesDrivers.filter((entry) =>
    entry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFD] mb-2">
      <div className="w-full px-2">
        {/* Search bar */}
        <div className="flex items-center gap-4 mb-7 mt-1">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Driver and Vehicle"
            className="max-w-md bg-[#F8FBFF] border border-gray-300 rounded-lg"
          />
          {/* <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
            <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21 16.65 16.65"/></svg>
          </Button> */}
        </div>

        {/* Main card container */}
        <div className="bg-white rounded-xl p-6 shadow-sm w-full">
          <div className="font-bold text-lg pb-3">Deliveries</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {/* Active Vehicles and Driver */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-[17px]">
                Active Vehicles and Driver
              </div>
              <div className="flex-1 overflow-auto px-4 pb-4">
                <ul>
                  {filteredDrivers.map((entry) => (
                    <li
                      key={entry}
                      className="py-2 text-gray-800 cursor-pointer hover:bg-[#EFF6FF] border-b border-[#E9E9E9]"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Unassigned Invoice */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-[17px]">
                Unassigned Invoice
              </div>
              <div className="flex-1 overflow-auto px-4 pb-4 mt-3">
                {unassignedInvoices.map((invoice, idx) => (
                  <div key={idx} className="bg-white rounded-md py-3 px-4 mb-3 shadow-sm border border-[#E9E9E9] flex flex-col">
                    <div className="text-xs text-gray-400 font-semibold">{invoice.date}</div>
                    <div className="font-semibold text-gray-700 mt-1">{invoice.number}</div>
                    <div className="text-xs text-gray-500">{invoice.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assigned Invoice */}
            <div className="flex flex-col border border-[#E9E9E9] rounded-lg bg-[#F8FAFD]">
              <div className="bg-[#EFF6FF] px-4 py-3 rounded-t-lg border-b border-[#E9E9E9] font-semibold text-[#383C40] text-[17px] flex items-center justify-between">
                Assigned Invoice
                <Button className="bg-[#007DFA] text-white px-4 h-[30px] rounded-md font-semibold cursor-pointer text-sm flex items-center">
                  Re-Assign
                </Button>
              </div>
              <div className="flex-1 px-4 py-4"></div>
            </div>
          </div>
          {/* Action buttons section */}
          {/* <div className="flex gap-6 mt-8 justify-end">
            <Button className="bg-[#007DFA] text-white font-semibold px-20 py-2 rounded-lg">Add Vehicle</Button>
            <Button className="bg-[#007DFA] text-white font-semibold px-20 py-2 rounded-lg">Edit Vehicle</Button>
            <Button className="bg-[#007DFA] text-white font-semibold px-20 py-2 rounded-lg">Delete</Button>
          </div> */}
        </div>
      </div>

      
    </div>
    
  );
}
