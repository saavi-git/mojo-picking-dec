"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Image from "next/image";

const shipments = [
  { id: 1, number: "CV-78-QR", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 2, capacity: 60 },
  { id: 2, number: "XN-33-ZQ", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 8, capacity: 85 },
  { id: 3, number: "XO-54-FO", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 4, capacity: 30 },
  { id: 4, number: "PT-12-JA", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 40, capacity: 100 },
  { id: 5, number: "XO-54-FO", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 3, capacity: 50 },
  { id: 6, number: "PT-12-JA", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 3, capacity: 75 },
  { id: 7, number: "CV-78-QR", address: "4 Comboyne St, Kendall, 2439, South Wales", city: "Abu Dhabi, UAE", drops: 5, capacity: 20 },
];

// const deliveryCards = [
//   { date: "19/05/23", code: "554356 | 3BN |", location: "Ovolo Inchcolm" },
//   { date: "19/05/23", code: "456345 | 5GH |", location: "Ovolo Inchcolm" },
//   { date: "19/05/23", code: "554356 | 3BN |", location: "Ovolo Inchcolm" },
//   { date: "19/05/23", code: "456345 | 5GH |", location: "Ovolo Inchcolm" },
//   { date: "19/05/23", code: "456345 | 5GH |", location: "Ovolo Inchcolm" },
// ];

export default function SortDeliveryPage() {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("")

  return (
    <div className="flex gap-6 min-h-screen bg-[#F8FAFD] mt-1 px-2 mb-1">
      {/* Sidebar */}
      <div className="w-full max-w-[460px] flex flex-col bg-white rounded-xl shadow-sm">
        <div className="p-9 pb-2">
          <Input
            placeholder="Search.."
            className="bg-[#F8FBFF] border border-gray-200 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="px-6 pt-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700 py-2">Manage Shipments</h2>
          <div className="flex gap-2">
            <Button variant="outline" className="px-3 text-xs font-semibold border-[#DEEBFF] bg-[#F6F8FF]" style={{ minWidth: 64 }}>
              View All <span className="ml-1 text-[#007DFA] font-bold"></span>
            </Button>
            <Button variant="outline" className="px-3 text-xs font-semibold border-[#DEEBFF] bg-[#F6F8FF] text-[#007DFA]" style={{ minWidth: 56 }}>
              Active <span className="ml-1"></span>
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-1 space-y-4">
          {shipments.map((shipment, idx) => (
            <div
              key={shipment.id}
              onClick={() => setSelected(idx)}
              className={`border rounded-lg px-4 py-3 cursor-pointer bg-white shadow-sm
${selected === idx ? "border-[#007DFA] bg-[#F2F8FF]" : "border-transparent hover:bg-[#F8FBFF]"}
flex items-start justify-between`}
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#8FA6BC] mb-1">Shipment Number</div>
                <div className="flex items-center gap-2">
                  <div className="text-base font-bold text-[#2E4782]">{shipment.number}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-[#8FA6BC]">
                  <span>
                    <svg width={15} height={15} fill="none">
                      <path d="M7.5 1.7C5 1.7 3 3.7 3 6.2c0 3.2 4.5 7.1 4.5 7.1s4.5-4 4.5-7.1c0-2.5-2-4.5-4.5-4.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#8FA6BC" />
                    </svg>
                  </span>
                  <span>{shipment.address}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#8FA6BC]">
                  <span>
                    <svg width={15} height={15} fill="none">
                      <path d="M5 3C3.34 3 2 4.34 2 6c0 2.5 2.5 6 5.5 10C10.5 12 13 8.5 13 6c0-1.66-1.34-3-3-3-1.66 0-3 1.34-3 3 0-.53-.21-1.04-.59-1.41C7.13 2.36 9.99 2 10.73 2H5Z" fill="#8FA6BC" />
                    </svg>
                  </span>
                  <span>{shipment.city}</span>
                </div>
              </div>
              <div className="relative w-[90px] h-[47px] flex-shrink-0 flex justify-end items-center">
                <Image
                  src="/empty_truck.svg"
                  alt="Truck"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
                <span
                  className="absolute flex items-center justify-center bg-[#ECF5FF] text-[#007DFA] font-semibold rounded-full border border-[#C7E0FD] text-xs"
                  style={{
                    top: "4px",
                    right: "20px",
                    width: "20px",
                    height: "20px",
                    zIndex: 10,
                  }}
                >
                  {shipment.drops}
                </span>
                <span
                  className="absolute right-[20px] top-[22px] text-[9px] tracking-wide text-[#90BFFD] font-semibold"
                  style={{ zIndex: 10 }}
                >
                  Run No.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Side: Delivery Cards Only */}
      <div className="flex-1 ml-2 mr-0 max-w-[1100px]">
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-7">
            <span className="text-xl font-bold text-[#2E4782]">{shipments[selected].number}</span>
            <span className="ml-3 text-[#0090FF] font-semibold">· On Way</span>
          </div>
          <div className="text-sm text-gray-500 mb-2">Sort Delivery by Drag and Drop</div>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <div
              key={idx}
              className="mb-7 rounded-xl bg-white p-4 flex items-center justify-between border border-[#EDF2F6] shadow-sm"
            >
              <div>
                <div className="text-xs text-[#8FA6BC] font-semibold mb-2">19/05/23</div>
                <div className="text-base font-bold text-[#2E4782]">554356 | 3BN |</div>
                <div className="text-xs text-[#8FA6BC] mt-1">Ovolo Inchcolm</div>
              </div>
              {/* <div className="flex items-center gap-4">
                <button className="text-[#A0B3CA]" aria-label="Info">
                  <svg width={18} height={18} fill="none">
                    <circle cx={9} cy={9} r={8} stroke="#A0B3CA" strokeWidth={2} />
                  </svg>
                </button>
                <button className="text-[#A0B3CA]" aria-label="Calendar">
                  <svg width={18} height={18} fill="none">
                    <rect x={3} y={3} width={12} height={12} rx={2} stroke="#A0B3CA" strokeWidth={2} />
                  </svg>
                </button>
                <button className="text-[#A0B3CA]" aria-label="Drag">
                  <svg width={18} height={18} fill="none">
                    <path d="M9 2v14M2 9h14" stroke="#A0B3CA" strokeWidth={2} />
                  </svg>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
