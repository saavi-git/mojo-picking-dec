"use client";

import React, { useState } from "react"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import Image from "next/image";
import { LineChartComponent } from "./components/ui/line-chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"


// ----- Data Setup -----
const stats = [
  { label: "Total Orders", value: 5000, change: "+3 (Today)", color: "blue", icon: "/Group.svg", },
  { label: "Total Deliveries", value: 3570, change: "+20% (30days)", color: "green", icon: "/Group2.svg", },
  { label: "Total Pending", value: 436, change: "-25% (30days)", color: "red", icon: "/down.svg", },
  { label: "Hold Deliveries", value: 5, change: "+1% (30days)", color: "yellow", icon: "/hold.svg", },
]


const chartDataYear = [
  { month: "Jan", value: 10000, name: "Jan" }, { month: "Feb", value: 15000, name: "Feb" }, { month: "Mar", value: 20000, name: "Mar" },
  { month: "Apr", value: 30000, name: "Apr" }, { month: "May", value: 25000, name: "May" }, { month: "Jun", value: 39000, name: "Jun" },
  { month: "Jul", value: 38750, name: "Jul" }, { month: "Aug", value: 28000, name: "Aug" }, { month: "Sep", value: 23000, name: "Sep" },
  { month: "Oct", value: 24000, name: "Oct" }, { month: "Nov", value: 26000, name: "Nov" }, { month: "Dec", value: 22000, name: "Dec" },
]


// const todayDeliveriess = [
//   { label: "Complete", value: 81, color: "#1787FC", bg: "#E9F3FF" },
//   { label: "Pending", value: 22, color: "#23B287", bg: "#E2F6F2" },
//   { label: "Hold", value: 62, color: "#FF655B", bg: "#FFE9E7" },
//   { label: "Returns", value: 21, color: "#F7B924", bg: "#FFF8E7" },
// ]


// const getPieData = (value: number) => [
//   { value: value },
//   { value: 100 - value },
// ];

const readyToPackPie = [
  { name: "Complete", value: 25, color: "#1787FC" },
  { name: "Pending", value: 29.39, color: "#23B287" },
  { name: "Hold", value: 21.81, color: "#F7B924" },
  { name: "Total", value: 23.80, color: "#FF655B" },
]


// const todayDeliveries = [
//   { label: "Complete", value: 81, color: "#1787FC" },
//   { label: "Pending", value: 22, color: "#23B287" },
//   { label: "Hold", value: 62, color: "#FF655B" },
//   { label: "Returns", value: 21, color: "#F7B924" },
// ]


const bestSellers = [
  { image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=72&q=80", name: "Izze Sparkling Juice", price: "$29.00", orders: 62, stock: 510, date: "24 Apr 2021", amount: "$1,798", outOfStock: false },
  { image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=72&q=80", name: "Mocktails", price: "$65.20", orders: 35, stock: 0, date: "19 Mar 2021", amount: "$2982", outOfStock: true },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=72&q=80", name: "Hepazyme", price: "$14.00", orders: 80, stock: 749, date: "1 Mar 2021", amount: "$1120", outOfStock: false },
  { image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=72&q=80", name: "Yumzyme Syrup", price: "$127.50", orders: 58, stock: 0, date: "11 Feb 2021", amount: "$7140", outOfStock: true },
  { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=72&q=80", name: "Mocktails", price: "$54", orders: 74, stock: 805, date: "17 Jan 2021", amount: "$3996", outOfStock: false },
]


const activeDrivers = [
  { name: "Anna Mull", id: "CV-78-OR", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
  { name: "Jacob Jones", id: "PT-12-JA", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Jenny Wilson", id: "XO-54-F0", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "Leslie Alexander", id: "XN-33-ZQ", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Leslie Alexander", id: "RT-98-UI", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
]


const pagedDrivers = [
  { name: "Phil", rego: "CV-78-QR", runNo: 2, totalDeliveries: 54677, todayDeliveries: 5, pendingDeliveries: 2, holdDeliveries: 9 },
  { name: "Oskar", rego: "PT-12-JA", runNo: 4, totalDeliveries: 89665, todayDeliveries: 8, pendingDeliveries: 4, holdDeliveries: 5 },
  { name: "Che", rego: "XO-54-FO", runNo: 7, totalDeliveries: 87654, todayDeliveries: 0, pendingDeliveries: 5, holdDeliveries: 3 },
  { name: "David", rego: "CV-21-AB", runNo: 9, totalDeliveries: 12986, todayDeliveries: 2, pendingDeliveries: 0, holdDeliveries: 1 },
  { name: "Anaya", rego: "XO-54-FO", runNo: 12, totalDeliveries: 9876, todayDeliveries: 1, pendingDeliveries: 0, holdDeliveries: 0 },
  { name: "James", rego: "XN-33-ZQ", runNo: 6, totalDeliveries: 76532, todayDeliveries: 9, pendingDeliveries: 1, holdDeliveries: 0 },
  { name: "Jack", rego: "PN-6U-ZQ", runNo: 3, totalDeliveries: 45466, todayDeliveries: 20, pendingDeliveries: 2, holdDeliveries: 0 },
  { name: "Oliver", rego: "RT-98-UI", runNo: 5, totalDeliveries: 56401, todayDeliveries: 3, pendingDeliveries: 1, holdDeliveries: 0 },
]


// Custom label render function for pie chart segments
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontWeight="bold"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}


// ----- Main Component -----
export default function Home() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const rowsPerPage = 5
  const filteredProducts = bestSellers.filter((p) =>
    search.length === 0 ? true : p.name.toLowerCase().includes(search.toLowerCase())
  )
  const pagedProducts = filteredProducts.slice((page - 1) * rowsPerPage, page * rowsPerPage)


  return (
    <div className="bg-[#F8FBFF] min-h-screen">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-5 mb-6 sm:mb-7 px-2 mt-1">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products"
          className="w-full sm:max-w-md bg-[#F8FBFF] border-gray-300"
        />
      </div>

      {/* Top Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mb-4 sm:mb-7 px-2">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-3 sm:p-4 flex items-center">
            {/* Icon in circle */}
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-blue-100">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={24}      // corresponds to w-6 (6 * 4px)
                  height={24}     // corresponds to h-6
                  className="sm:w-8 sm:h-8"
                />
              </div>
            </div>
            {/* Stat info */}
            <div className="flex flex-col min-w-0">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                {stat.value.toLocaleString().padStart(2, '0')}
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium truncate">
                {stat.label}
              </span>
              <span className="flex items-center mt-1 text-xs sm:text-sm text-gray-400 font-medium">
                {stat.change.startsWith('+') ? (
                  <span className="mr-1 text-blue-500">&#8593;</span>
                ) : (
                  <span className="mr-1 text-red-500">&#8595;</span>
                )}
                <span className="truncate">{stat.change}</span>
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Middle Section - Charts & Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-7 mb-4 sm:mb-7 mx-0 px-2">
        {/* Line Chart - Total Sale */}
        <Card className="lg:col-span-2">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <CardTitle className="text-lg sm:text-xl">Total Sale</CardTitle>
              <div className="flex gap-3 sm:gap-4 text-xs text-gray-500">
                <span className="cursor-pointer hover:text-blue-500">Today</span>
                <span className="cursor-pointer hover:text-blue-500">Month</span>
                <span className="underline text-blue-500 cursor-pointer">Year</span>
              </div>
            </div>
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <LineChartComponent
                data={chartDataYear}
                categories={["value"]}
                index="month"
                colors={["#9B66FF"]}
                valueFormatter={(value) => `$${value.toLocaleString()}`}
                yAxisWidth={60}
                showGrid={true}
                showTooltip={true}
              />
            </div>
          </CardHeader>
        </Card>

        {/* Pie Chart - Ready to Pack */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl mb-4">Ready to Pack</CardTitle>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={readyToPackPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    isAnimationActive={false}
                  >
                    {readyToPackPie.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
                {readyToPackPie.map((seg) => (
                  <div key={seg.name} className="flex items-center text-xs sm:text-sm font-medium">
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        background: seg.color,
                        display: "inline-block",
                        marginRight: 6,
                      }}
                    />
                    <span className="text-gray-600">{seg.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>  

      {/* Today Deliveries - Your Preferred Version */}
      <div className="mt-6 sm:mt-7 w-full px-2">
        <Card className="p-6 bg-white w-full mb-4 sm:mb-7 mx-0">
          <CardHeader>
            <CardTitle>Today Deliveries</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between py-3 gap-x-12 w-full">
            {[
              { label: "Complete", value: 81, color: "#1787FC", bg: "#E9F3FF" },
              { label: "Pending", value: 22, color: "#23B287", bg: "#E2F6F2" },
              { label: "Hold", value: 62, color: "#FF655B", bg: "#FFE9E7" },
              { label: "Returns", value: 21, color: "#F7B924", bg: "#FFF8E7" },
            ].map((d) => (
              <div key={d.label} className="flex flex-col items-center flex-1 min-w-[160px]">
                <PieChart width={153} height={140}>
                  <Pie
                    data={[{ value: 100 }]}
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={450}
                    innerRadius={38}
                    outerRadius={56}
                    dataKey="value"
                    isAnimationActive={false}
                    stroke="none"
                  >
                    <Cell fill={d.bg} />
                  </Pie>
                  <Pie
                    data={[{ value: d.value }, { value: 100 - d.value }]}
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={450}
                    innerRadius={38}
                    outerRadius={56}
                    dataKey="value"
                    isAnimationActive={false}
                    stroke="none"
                  >
                    <Cell fill={d.color} />
                    <Cell fill="transparent" />
                  </Pie>
                  <text
                    x={153 / 2}
                    y={140 / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={22}
                    fontWeight="bold"
                    fill="#222"
                  >
                    {d.value}%
                  </text>
                </PieChart>
                <CardDescription className="mt-2 text-base text-gray-700 font-medium">{d.label}</CardDescription>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Products & Drivers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-7 lg:gap-7 px-2">
        {/* Best Selling Products - 3/4 width on large screens */}
        <Card className="lg:col-span-3 w-full rounded-xl shadow-sm p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 sm:pb-4 gap-2">
            <CardTitle className="text-base sm:text-lg lg:text-xl font-semibold">
              Best Selling Products
            </CardTitle>
            <div className="text-xs text-gray-400">Sort By: Today</div>
          </div>
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <div className="min-w-[600px]">
              <table className="w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-500">Product</th>
                    <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-500">Price</th>
                    <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-500">Orders</th>
                    <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-500">Stock</th>
                    <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {pagedProducts.map((prod, i) => (
                    <tr key={prod.name + i} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #E9E9E9" }}>
                      <td className="px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          width={40}        // For "w-8" (8 * 5px = 40px)
                          height={40}       // For "h-8"
                          className="sm:w-10 sm:h-10 rounded-lg object-cover flex-shrink-0"
                          sizes="(min-width: 640px) 40px, 40px"  // Optional responsive sizes
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{prod.name}</div>
                          <div className="text-xs text-gray-400">{prod.date}</div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-gray-700 text-xs sm:text-sm">{prod.price}</td>
                      <td className="px-3 sm:px-4 py-3 text-gray-700 text-xs sm:text-sm">{prod.orders}</td>
                      <td className="px-3 sm:px-4 py-3">
                        <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-semibold whitespace-nowrap ${prod.outOfStock ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                          {prod.outOfStock ? "Out of stock" : prod.stock}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 font-bold text-gray-900 text-xs sm:text-sm">{prod.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 px-2 text-xs sm:text-sm text-gray-500 gap-2">
            <span>
              Showing {pagedProducts.length} of {filteredProducts.length} Results
            </span>
            <div className="flex gap-1 items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="h-8 w-8"
              >
                {"<"}
              </Button>
              <span className="px-3 font-semibold text-blue-600">{page}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => (page * rowsPerPage < filteredProducts.length ? setPage(page + 1) : null)}
                className="h-8 w-8"
              >
                {">"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Active Drivers - 1/4 width on large screens */}
        <Card className="lg:col-span-1 w-full rounded-xl shadow-sm p-3 sm:p-4">
          <CardTitle className="pb-3 sm:pb-4 text-base sm:text-lg font-semibold">Active Drivers</CardTitle>
          <div className="flex flex-col gap-3 sm:gap-4">
            {activeDrivers.map((driver, idx) => (
              <div
                key={driver.id}
                className={`flex items-center gap-2 sm:gap-3 pb-3 ${idx !== activeDrivers.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <Image
                  src={driver.avatar ?? "/default-avatar.png"}
                  alt={driver.name ?? "Driver"}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-medium text-gray-800 text-sm sm:text-base truncate">{driver.name}</div>
                  <div className="text-xs text-gray-400">{driver.id}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Drivers Table */}
      <div className="mt-6 sm:mt-7 w-full px-2 mb-2">
        <div className="rounded-xl border bg-white shadow-sm p-3 sm:p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Drivers</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" style={{ backgroundColor: "#EFF6FF" }} className="text-xs sm:text-sm">
                Sort By ASC
              </Button>
              <Button variant="outline" size="sm" style={{ backgroundColor: "#EFF6FF" }} className="text-xs sm:text-sm">
                Hold Deliveries
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <div className="min-w-[800px]">
              <table className="w-full divide-y divide-blue-100">
                <thead style={{ backgroundColor: "#EFF6FF" }}>
                  <tr>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">
                      Driver&apos;s Name
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Rego.</th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Run No.</th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Total Deliveries</th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Today Deliveries</th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Pending Deliveries</th>
                    <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Hold Deliveries</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedDrivers.map((d, i) => (
                    <tr
                      key={d.name + i}
                      className="hover:bg-gray-50"
                      style={{ borderBottom: "1px solid #E9E9E9" }}
                    >
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.name}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.rego}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.runNo}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.totalDeliveries}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.todayDeliveries}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.pendingDeliveries}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{d.holdDeliveries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
