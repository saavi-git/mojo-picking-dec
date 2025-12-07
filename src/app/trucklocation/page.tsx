"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useJsApiLoader } from "@react-google-maps/api";
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

const truckImages = [
    "/truck-1.png",
    "/truck-2.png",
    "/truck-3.png",
    "/truck-4.png",

];

const mapContainerStyle = {
    width: "100%",
    height: "250px",
    borderRadius: "0.75rem",
};
const mapCenter = { lat: -32.183, lng: 150.048 };
const routePath = [
    { lat: -31.442, lng: 150.888 },
    { lat: -31.953, lng: 150.351 },
    { lat: -32.183, lng: 150.048 },
];

// DEMO DATA for Information Tab (can later be swapped with dynamic fields)
const shipmentDetails = [
    {
        invoice: "98799",
        customerNumber: "0435990123",
        customerName: "The Kendall Shop",
        address: "4 Comboyne St, Kendall 2439, South Wales",
        contactName: "Sally Jones",
        deliveryDate: "18/04/2023",
        orderNo: "5409450",
        cartons: 10,
    }
    // Add similar details for other shipments if needed
];

export default function TruckLocationPage() {
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("information");
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    });

    const percentFull = shipments[selected].capacity;

    return (
        <div className="flex gap-6 min-h-screen bg-[#F8FAFD]  mt-1 px-2 mb-1">
            {/* Sidebar */}
            <div className="w-full max-w-[460px] flex flex-col bg-white rounded-xl shadow-sm">
                <div className="p-7 pb-2">
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
                        <Button variant="outline" className="px-3 text-xs font-semibold border-[#DEEBFF] bg-[#F6F8FF] cursor-pointer" style={{ minWidth: 64 }}>
                            View All <span className="ml-1 text-[#007DFA] font-bold"></span>
                        </Button>
                        <Button variant="outline" className="px-3 text-xs font-semibold border-[#DEEBFF] bg-[#F6F8FF] text-[#007DFA] cursor-pointer" style={{ minWidth: 56 }}>
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
                            {/* Left (all text) */}
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
                            {/* Right (truck with badge) */}
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
                                        top: '4px',
                                        right: '20px',
                                        width: '20px',
                                        height: '20px',
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
            {/* Main content */}
            <div className="flex-1 ml-8 mr-8 max-w-[1100px]">
                {/* Top: Shipment Info and Actions */}
                <div className="flex items-center justify-between mt-1">
                    <div>
                        <span className="text-lg font-bold text-[#2E4782]">
                            {shipments[selected].number}
                        </span>
                        <span className="ml-4 text-[#0090FF] font-semibold">• On Way</span>
                    </div>
                    <div className="flex gap-2">
                        <Button className="text-[#697A8D] bg-white border border-gray-200 cursor-pointer rounded-md font-semibold px-4 py-2">
                            Phone
                        </Button>
                        <Button className="text-[#697A8D] bg-white border border-gray-200  cursor-pointer rounded-md font-semibold px-4 py-2">
                            Email
                        </Button>
                    </div>
                </div>
                {/* Tabs */}
                <div className="flex mt-6 gap-8 border-b border-[#ECF5FF] text-[#A0B3CA] font-semibold">
                    <button
                        className={`pb-2 border-b-2 ${activeTab === "information" ? "border-[#007DFA] text-[#007DFA]" : "border-transparent"} bg-transparent cursor-pointer`}
                        onClick={() => setActiveTab("information")}
                    >
                        Information
                    </button>
                    <button
                        className={`pb-2 ${activeTab === "vehicle" ? "border-b-2 border-[#007DFA] text-[#007DFA]" : ""} bg-transparent cursor-pointer`}
                        onClick={() => setActiveTab("vehicle")}
                    >
                        Vehicle Info
                    </button>
                </div>
                {/* Tab Panels */}
                {activeTab === "information" && (
                    <div className="pt-5">
                        <div className="border-b border-[#EAF0F6]">
                            <div className="flex pb-5 text-2xl font-bold text-[#2E4782]">
                                {shipments[selected].number}
                                <span className="ml-4 text-[#0090FF] font-semibold text-lg mt-[5px]">• On Way</span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex flex-col divide-y divide-[#EAF0F6] text-[16px]">
                                <div className="flex py-3">
                                    <div className="w-1/3 text-gray-500 font-medium">Invoice Number</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].invoice}</div>
                                    <div className="w-1/3 text-gray-500 font-medium">Contact Name</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].contactName}</div>
                                </div>
                                <div className="flex py-3">
                                    <div className="w-1/3 text-gray-500 font-medium">Customer Number</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].customerNumber}</div>
                                    <div className="w-1/3 text-gray-500 font-medium">Requested Delivery Date</div>
                                    <div className="w-1/3 font-semibold text-[#DB354C]">{shipmentDetails[0].deliveryDate}</div>
                                </div>
                                <div className="flex py-3">
                                    <div className="w-1/3 text-gray-500 font-medium">Customer Name</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].customerName}</div>
                                    <div className="w-1/3 text-gray-500 font-medium">Customer Order No</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].orderNo}</div>
                                </div>
                                <div className="flex py-3">
                                    <div className="w-1/3 text-gray-500 font-medium">Delivery Address</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].address}</div>
                                    <div className="w-1/3 text-gray-500 font-medium">Cartons</div>
                                    <div className="w-1/3 font-semibold">{shipmentDetails[0].cartons}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "vehicle" && (
                    <>
                        {/* Vehicle Images Slider */}
                        <div className="flex gap-3 py-5">
                            {truckImages.map((src, i) => (
                                <div
                                    key={i}
                                    className="bg-[#E6F2FF] w-20 h-13 rounded shadow border border-white overflow-hidden flex items-center justify-center"
                                >
                                    <Image
                                        src={src}
                                        alt={`Truck ${i + 1}`}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Load Capacity */}
                        <div>
                            <div className="text-xs font-bold mb-2 text-[#7D87A3]">Load Capacity</div>
                            <div className="flex flex-col items-center gap-1 mb-6">
                                {/* Load visualization with truck image */}
                                <div className="relative w-[338px] h-[207px]">
                                    {/* Truck Image */}
                                    <img
                                        src="/empty_truck.svg"
                                        alt="Truck"
                                        className="w-full h-full object-contain select-none pointer-events-none"
                                        draggable={false}
                                        style={{ zIndex: 1 }}
                                    />
                                    {/* Blue Fill Bar */}
                                    <div
                                        className="absolute"
                                        style={{
                                            top: 5,
                                            left: 120,
                                            width: `${2.08 * percentFull}px`,
                                            height: 140,
                                            backgroundColor: "#007FFF",
                                            opacity: 0.92,
                                            zIndex: 2,
                                            minWidth: percentFull > 0 ? 15 : 0,
                                            transition: "width 0.3s ease",
                                        }}
                                    >
                                        {/* Percentage Label */}
                                        <div
                                            className="flex items-center justify-center h-full text-white font-bold"
                                            style={{
                                                paddingLeft: 12,
                                                paddingRight: 12,
                                                whiteSpace: 'nowrap',
                                                userSelect: 'none',
                                            }}
                                        >
                                            {percentFull}%
                                        </div>
                                    </div>
                                </div>
                                {/* Truck info grid */}
                                <div className="flex gap-3 mt-6 mb-3 w-full max-w-3xl mx-auto">
                                    {[
                                        { label: "Driver", value: <b>Phil</b> },
                                        { label: "Rego.", value: <b>{shipments[selected].number}</b> },
                                        { label: "Start ODO", value: <b>454322</b> },
                                        { label: "Wk(Kms)", value: <b>7,340</b> },
                                        { label: "Temp.(C)", value: <b>23</b> },
                                        { label: "Route", value: <b>RUN 2</b> }
                                    ].map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="flex flex-col items-start justify-center px-4 py-2 bg-[#FAFBFC] border border-[#EBEEF0] rounded-md min-w-[108px]"
                                        >
                                            <div className="text-xs text-gray-400 leading-4">{label}</div>
                                            <div className="text-[15px] text-[#232D3B] leading-5 font-semibold mt-[2px]">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 rounded-xl overflow-hidden shadow-sm" style={{ height: 500 }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.https://maps.app.goo.gl/x1ETZEHwTo47UV9y8!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a377b355%3A0x6b7725514f04642c!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1633096800000!5m2!1sen!2sus"
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                               
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dummy Google Map"
                            ></iframe>
                        </div>


                        {/* Route Map */}
                        {/* ... (rest unchanged) ... */}
                    </>
                )}
            </div>
        </div>
    );
}
