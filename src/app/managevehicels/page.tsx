"use client";

import { useState } from "react";

const vehicles = [
  { reg: "CV-78-QR", name: "FUSO 617ZAU", number: "FUSO 617ZAU", runNo: "FUSO 617ZAU", shift: "Morning", service: "20000", driver: "" },
  { reg: "XN-33-ZQ", name: "Isuzu NQR", number: "ISUZU 123XKS", runNo: "ISUZU 123XKS", shift: "Day", service: "25000", driver: "Alex" },
  { reg: "XO-54-FO", name: "Hino 300", number: "HINO 300", runNo: "HINO 300", shift: "Night", service: "15000", driver: "Sam" },
  { reg: "RT-98-UI", name: "Volvo FE", number: "VOLVO FE", runNo: "VOLVO FE", shift: "Day", service: "32000", driver: "Jane" },
  { reg: "MT-98-UI", name: "DAF LF", number: "DAF LF", runNo: "DAF LF", shift: "Morning", service: "18000", driver: "Jill" },
];

const infoRows = [
  ["Vehicle Name", "FUSO 617ZAU", "Condition", "Good"],
  ["Number", "FUSO 617ZAU", "Windscreen", "Good"],
  ["Route/Run No", "FUSO 617ZAU", "Tyres Condition", "Good"],
  ["Vehicle Rego.", "FUSO 617ZAU", "Lights/Signals", "Good"],
  ["Vehicle Shift", "", "Fixtures/Fittings", "Good"],
  ["Vehicle Service", "20000", "Driver Name", "No Driver Assign"]
];

export default function ManageVehicelsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState("Vehicle Info.");

  const filteredVehicles = vehicles.filter(v =>
    v.reg.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F8FAFD] box-border gap-7 mt-1 px-2 mb-1">
      {/* Sidebar */}
      <div className="flex flex-col md:w-[350px] w-full">
        <div className="mb-7">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-[#E9E9E9] rounded-md outline-none"
            placeholder="Search Vehicle"
          />
        </div>
        <div className="font-bold text-lg px-3 pb-2">All Vehicles</div>
        <div className="bg-white rounded-lg shadow-sm flex-1 overflow-auto max-h-[60vh] md:max-h-full">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((v, i) => (
              <div
                key={v.reg + i}
                className={`px-4 py-3 cursor-pointer border-b border-[#F3F6FB] ${
                  selected === vehicles.findIndex(x => x.reg === v.reg)
                    ? "bg-[#EFF6FF] text-[#007DFA]"
                    : ""
                }`}
                onClick={() => setSelected(vehicles.findIndex(x => x.reg === v.reg))}
              >
                <div className="font-medium">{v.reg}</div>
              </div>
            ))
          ) : (
            <div className="px-4 py-4 text-gray-400">No vehicles found</div>
          )}
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3 md:gap-0">
          <div>
            <span className="font-semibold text-[20px] text-[#383C40] mr-2">Vehicle Details</span>
            <span className="text-[#0BAA56] font-medium">· Active</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2">
            <button className="bg-[#007DFA] text-white px-4 md:px-6 py-2 rounded-md font-semibold text-sm cursor-pointer shadow">Assign Driver</button>
            <button className="bg-[#F8FAFD] px-4 md:px-6 py-2 rounded-md border font-semibold cursor-pointer text-sm border-[#E9E9E9] text-[#383C40]">Inactive</button>
          </div>
        </div>

        <div className="flex border-b mb-3 overflow-x-auto">
          <button
            className={`mr-4 pb-3 border-b-2 text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === "Vehicle Info." ? "border-[#007DFA] text-[#007DFA]" : "border-transparent text-[#383C40]"
            }`}
            onClick={() => setActiveTab("Vehicle Info.")}
          >
            Vehicle Info.
          </button>
          <button
            className={`pb-3 border-b-2 text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === "Driver Info." ? "border-[#007DFA] text-[#007DFA]" : "border-transparent text-[#383C40]"
            }`}
            onClick={() => setActiveTab("Driver Info.")}
          >
            Driver Info.
          </button>
        </div>

        {/* Vehicle Detail Table */}
        {activeTab === "Vehicle Info." && (
          <div className="mt-2 w-full overflow-auto">
            <table className="w-full text-sm min-w-[400px] md:min-w-full border-collapse">
              <tbody>
                {infoRows.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-2 text-[#767A7F] font-medium w-1/2 md:w-1/6">{row[0]}</td>
                    <td className="py-2 font-semibold w-1/2 md:w-1/6">{row[1]}</td>
                    <td className="py-2 text-[#767A7F] font-medium w-1/2 md:w-1/6">{row[2]}</td>
                    <td className={`py-2 font-semibold w-1/2 md:w-1/6 ${
                      row[3] === "Good" ? "text-[#0BAA56]" : row[3] === "No Driver Assign" ? "text-[#FF4F4F]" : ""
                    }`}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Driver Info." && (
          <div className="mt-4 text-sm text-gray-500"> no data found</div>
        )}
      </div>
    </div>
  );
}
