"use client";

import { useState, useEffect } from "react";

export default function DeliveryissuesPage() {
  const data = [
    { name: "Anna Mull", invoice: "978445", details: "Details for Anna Mull" },
    { name: "Jacob Jones", invoice: "324574", details: "Details for Jacob Jones" },
    { name: "Jenny Wilson", invoice: "652546", details: "Details for Jenny Wilson" },
    { name: "Oliver", invoice: "744225", details: "Details for Oliver" },
    { name: "John", invoice: "553387", details: "Details for John" },
    { name: "Robin", invoice: "098772", details: "Details for Robin" },
    { name: "Alexa", invoice: "101324", details: "Details for Alexa" },
    { name: "Leslie Alexander", invoice: "765479", details: "Details for Leslie Alexander" },
    { name: "Lie Alexander", invoice: "2909033", details: "Details for Lie Alexander" },
    { name: "Les", invoice: "409879", details: "Details for Les" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(data[0] || null);

  const filtered = data.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.invoice.includes(searchTerm)
  );

  // Ensure selected customer is updated when filtered changes
  useEffect(() => {
  if (selectedCustomer) {
    // Check if selectedCustomer is not in filtered list
    const found = filtered.some(c => c.invoice === selectedCustomer.invoice);
    if (!found) {
      // Reset to first filtered customer or null
      setSelectedCustomer(filtered[0] || null);
    }
  } else {
    if (filtered.length > 0) {
      setSelectedCustomer(filtered[0]);
    }
  }
}, [filtered, selectedCustomer]);


  return (
    <div className="flex h-screen bg-[#F8FAFD]  box-border px-2 mt-1 mb-1">
      {/* Sidebar section */}
      <div className="flex flex-col w-[350px] mr-7 h-full">
        {/* Search input (OUTSIDE the card) */}
        <div className="mb-7">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search By Customers Name Or Invoice Number"
            className="w-full px-3 py-2 text-sm border border-[#E9E9E9] rounded-md outline-none"
          />
        </div>
        {/* Card */}
        <div className="bg-white rounded-lg shadow-sm flex-1 flex flex-col">
          <div className="px-4 py-2 font-semibold text-[#383C40] text-sm border-b border-[#E9E9E9]">
            Customers Name/Invoice Number
          </div>
          <div className="flex-1 overflow-auto">
            {filtered.map((c, idx) => (
              <div
                key={idx}
                className={`px-4 py-3 border-b border-[#F3F6FB] cursor-pointer ${
                  selectedCustomer?.invoice === c.invoice
                    ? "bg-[#EFF6FF] text-[#007DFA]"
                    : "bg-white"
                }`}
                onClick={() => setSelectedCustomer(c)}
              >
                <div className="font-semibold text-sm">{c.name}</div>
                <div className="text-xs text-gray-400">Invoice: {c.invoice}</div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-gray-500 text-sm">No invoices found</div>
            )}
          </div>
        </div>
      </div>
      {/* Details section */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
        <div className="font-semibold text-[#383C40] text-[17px] border-b border-[#E9E9E9] pb-4">
          Issue Details
        </div>
        {selectedCustomer ? (
          <div>
            <h2 className="text-lg font-semibold mb-2">{selectedCustomer.name}</h2>
            <p className="text-sm text-gray-700 mb-1">
              Invoice Number: {selectedCustomer.invoice}
            </p>
            <p className="text-sm text-gray-600">{selectedCustomer.details}</p>
          </div>
        ) : (
          <div className="text-gray-400">
            Select an invoice from the list to see details.
          </div>
        )}
      </div>
    </div>
  );
}
