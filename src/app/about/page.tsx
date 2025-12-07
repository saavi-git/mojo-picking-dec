"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { useState } from "react"
export default function AboutPage() {


    const [search, setSearch] = useState("")
  return (
    <main className="bg-[#F8FBFF] min-h-screen mb-2">
      {/* Top Filter/Search */}
      <div className="flex items-center gap-4 mb-7 px-2 mt-1">
       <Input
      placeholder="Search Users by Name, Email or Date.."
      className="max-w-md bg-white border border-gray-200"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
        {/* <Button variant="outline" className="ml-2">🔍</Button> */}
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Panel */}
        <section className="flex flex-col gap-7 col-span-1 px-2">
          {/* Pending Shipments */}
          <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-700 ">
                Pending Shipments <span className="text-red-500">(4)</span>
              </h2>
              <div className="text-sm text-gray-400">▼</div>
            </div>
            <div className="flex gap-2 mb-2">
              <Button size="sm" variant="outline" className="rounded-lg px-2 py-0 bg-[#F6F7FA] border border-gray-200">Today Shipments</Button>
              <Button size="sm" variant="outline" className="rounded-lg px-2 py-0 bg-[#F6F7FA] border border-gray-200">All Drivers</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="bg-[#E6F2FF] border-gray-200">
                  <TableHead className="border-gray-200">Ready To Pack</TableHead>
                  <TableHead className="border-gray-200">Items</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Amazing Grace</TableCell>
                  <TableCell className="text-right text-red-500">3/5</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="text-blue-600 font-semibold cursor-pointer underline">The Naked Eggs</TableCell>
                  <TableCell className="text-right text-red-500">5/6</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Soca Nominees - Dock1</TableCell>
                  <TableCell className="text-right text-red-500">0/8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Amazing Grace 1</TableCell>
                  <TableCell className="text-right text-red-500">1/6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* Completed Shipments */}
          <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <h2 className="font-semibold mb-2 text-gray-700">
              Completed Shipments <span className="text-green-500">(5)</span>
            </h2>
            <div className="flex gap-3 mb-2 text-sm">
              <span className="font-medium">Shipment Deliveries Order (5)</span>
              <span className="font-medium text-gray-400">Cartons (8)</span>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="bg-[#E6F2FF] border-gray-200">
                  <TableHead className="border-gray-200">Ready To Ship</TableHead>
                  <TableHead className="border-gray-200">PCS</TableHead>
                  <TableHead className="border-gray-200">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-200">
                  <TableCell>ST Andrews Beach Brek</TableCell>
                  <TableCell className="text-blue-600">1</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Funkies Restaurant</TableCell>
                  <TableCell className="text-blue-600">1</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Johnny Dante</TableCell>
                  <TableCell className="text-blue-600">2</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Vivace Restaurant</TableCell>
                  <TableCell className="text-blue-600">1</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell>Monash Club</TableCell>
                  <TableCell className="text-blue-600">3</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vivace Restaurant</TableCell>
                  <TableCell className="text-blue-600">1</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        {/* Right Panel (span 2 cols) */}
        <section className="col-span-1 md:col-span-2 flex flex-col gap-4">
          {/* Shipment Details - Notes and Picking */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <div className="bg-white rounded-xl shadow p-4 mb-7 border border-gray-200">
                <div className="p-2 border border-gray-200 rounded text-sm text-[#2366A6]">
                  <span className="font-semibold">Notes:</span>{" "}
                  <span className="text-[#F75C24] font-semibold">
                    Please deliver before 10AM , call me 10 mins prior
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
                <div className="font-semibold text-gray-800 mb-2">
                  Shipment Details
                </div>
                <div className="flex flex-wrap items-center mb-2 bg-[#F6F7FA] p-2 rounded border border-gray-200">
                  <span>Picking Slip No:</span>
                  <Button variant="link" className="text-[#007DFA] px-1 text-base font-semibold">0064699</Button>
                  <span className="ml-auto text-[#F75C24] font-bold">INCOMPLETE</span>
                </div>
                {/* Shipment Items Table */}
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#E6F2FF] border-gray-200">
                      <TableHead className="border-gray-200">Items</TableHead>
                      <TableHead className="border-gray-200">Description</TableHead>
                      <TableHead className="border-gray-200">Price</TableHead>
                      <TableHead className="border-gray-200">UOM</TableHead>
                      <TableHead className="border-gray-200">QTY</TableHead>
                      <TableHead className="border-gray-200"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>BF11</TableCell>
                      <TableCell>Angus Eye Filet whole</TableCell>
                      <TableCell>
                        <span className="text-[#007DFA] font-bold">$38.00</span>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="link" className="font-semibold text-[#007DFA] px-1">KG</Button>
                      </TableCell>
                      <TableCell>
                        <Input value="13.8" readOnly className="max-w-[52px] text-right border border-gray-200" />
                      </TableCell>
                      <TableCell>
                        <Button size="icon" className="bg-red-100 text-red-500 hover:bg-red-200 border border-gray-200">✗</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-gray-200">
                      <TableCell>BF11</TableCell>
                      <TableCell>Diced Veal (S. Trim)</TableCell>
                      <TableCell>
                        <span className="text-[#007DFA] font-bold">$38.00</span>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="link" className="font-semibold text-[#007DFA] px-1">KG</Button>
                      </TableCell>
                      <TableCell>
                        <Input value="4" readOnly className="max-w-[52px] text-right border border-gray-200" />
                      </TableCell>
                      <TableCell>
                        <Button size="icon" className="bg-green-100 text-green-500 hover:bg-green-200 border border-gray-200">✓</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>BF11</TableCell>
                      <TableCell>Diced Lamb Superior</TableCell>
                      <TableCell>
                        <span className="text-[#007DFA] font-bold">$38.00</span>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="link" className="font-semibold text-[#007DFA] px-1">KG</Button>
                      </TableCell>
                      <TableCell>
                        <Input value="5" readOnly className="max-w-[52px] text-right border border-gray-200" />
                      </TableCell>
                      <TableCell>
                        <Button size="icon" className="bg-green-100 text-green-500 hover:bg-green-200 border border-gray-200">✓</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Action Bar (footer) */}
      {/* <div className="fixed bottom-0 left-0 w-full bg-white shadow px-6 py-4 flex items-center gap-3 z-30 border-t border-gray-200">
        <Input
          value="2"
          readOnly
          className="w-16 bg-[#F8FBFF] border border-gray-200 text-center"
          placeholder="No. of Cartons"
        />
        <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">Scan Barcode</Button>
        <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">Send Message</Button>
        <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">Print Labels</Button>
        <Button className="bg-[#007DFA] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">Invoice</Button>
      </div> */}
    </main>
  );
}
