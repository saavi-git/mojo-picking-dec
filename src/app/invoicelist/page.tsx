"use client";

import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import  { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsList, TabsTrigger } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import React, { useState } from "react";

// Custom accordion row icon
function AccordionIcon({ active }: { active: boolean }) {
  if (active) {
    // Blue outlined chevron-up
    return (
      <span className="flex items-center justify-center">
        <svg width={24} height={24} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#E6F2FF" stroke="#007DFA" strokeWidth="2" />
          <path d="M8 14l4-4 4 4" stroke="#007DFA" strokeWidth="2" fill="none" />
        </svg>
      </span>
    );
  }
  // Grey outlined chevron-down
  return (
    <span className="flex items-center justify-center">
      <svg width={24} height={24} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="white" stroke="#A9B8CE" strokeWidth="2" />
        <path d="M8 10l4 4 4-4" stroke="#A9B8CE" strokeWidth="2" fill="none" />
      </svg>
    </span>
  );
}

export default function InvoiceListPage() {
  const [search, setSearch] = useState("");
  const [tabValue, setTabValue] = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  const dummyInvoices = [
    { invoiceNo: "#234635", name: "Cristofer", email: "example@email.com", paymentStatus: "Paid", amount: 200, currency: "USD", date: "2023-08-01" },
    { invoiceNo: "#234636", name: "Cristofer", email: "example@email.com", paymentStatus: "Paid", amount: 200, currency: "USD", date: "2023-08-01" },
    { invoiceNo: "#234637", name: "Cristofer", email: "example@email.com", paymentStatus: "Unpaid", amount: 200, currency: "USD", date: "2023-08-01" },
    { invoiceNo: "#234638", name: "Cristofer", email: "example@email.com", paymentStatus: "Unpaid", amount: 200, currency: "USD", date: "2023-08-01" },
    { invoiceNo: "#234639", name: "Cristofer", email: "example@email.com", paymentStatus: "Paid", amount: 200, currency: "USD", date: "2023-08-01" },
  ];

  const filteredInvoices = dummyInvoices;

  const totalPayable = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  // const placeholderText = {
  //   all: "Search Users by Name, Email or Date..",
  //   paid: "Search Paid Users by Name or Email..",
  //   unpaid: "Search Unpaid Users by Name or Email..",
  // };

  // Toggle row checkbox handler
  const handleCheckbox = (index: number) => {
    setCheckedRows((prev) =>
      prev.includes(index) ? prev.filter((v) => v !== index) : [...prev, index]
    );
  };

  function renderAccordionRow(index: number) {
    // Accordion's table header has checkboxes per row, matches your screenshot
    return (
      <TableRow key={`expanded-${index}`} className="bg-transparent border-gray-200">
        <TableCell colSpan={7} className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#E6F2FF] border-gray-200">
                <TableHead className="w-12"></TableHead>
                <TableHead className="text-xs text-gray-600">DATE</TableHead>
                <TableHead className="text-xs text-gray-600">USER ACTIVITY</TableHead>
                <TableHead className="text-xs text-gray-600">
                  DETAIL <span className="ml-1">ℹ️</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, idx) => (
                <TableRow key={idx} className="bg-[#F8FBFF] border-gray-200">
                  <TableCell className="w-12"></TableCell>
                  <TableCell>12/APR/2020</TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.
                  </TableCell>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div className="mt-1 px-2 mb-2">
      <div className="flex items-center gap-4 mb-7">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Invoice No., Name or Date"
          className="max-w-md bg-[#F8FBFF] border-gray-300"
        />
        <div className="flex-1" />
        <Button className="bg-[#007DFA] hover:bg-blue-600 text-white cursor-pointer font-semibold px-6 py-2 rounded-lg">
          POD Copy
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 text-2xl font-bold">
              25.1k <span className="ml-2 text-base text-blue-400">↑ +15%</span>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">Total Invoices</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-2xl font-bold">
              23k <span className="ml-2 text-base text-green-400">↓ -3.5%</span>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">Paid Invoices</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600 text-2xl font-bold">
              2.1k <span className="ml-2 text-base text-red-400">↑ +15%</span>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">Unpaid Invoices</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm ">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="font-semibold text-lg">
            <Tabs value={tabValue} onValueChange={setTabValue} className="mb-4">
              <TabsList className="bg-transparent gap-2">
                
                <TabsTrigger value="all" className="px-4">All</TabsTrigger>
                <TabsTrigger value="paid" className="px-4">Paid</TabsTrigger>
                <TabsTrigger value="unpaid" className="px-4">Unpaid</TabsTrigger>
              </TabsList>
            </Tabs>
            Total payable amount:{" "}
            <span className="text-[#007DFA] font-bold">${totalPayable.toFixed(2)}</span>

            <span className="text-gray-400 text-xs ml-1">USD</span>
          </div>
          <Button variant="outline" className="flex gap-2">Filter</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#E6F2FF] border-gray-200">
              <TableHead><input type="checkbox" /></TableHead>
              <TableHead></TableHead>
              <TableHead>Invoice No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice, i) => (
              <React.Fragment key={i}>
                <TableRow className="bg-white border-gray-200 ">
                  <TableCell className="w-12">
                    <input type="checkbox" checked={checkedRows.includes(i)} onChange={() => handleCheckbox(i)} />
                  </TableCell>
                  <TableCell>
                    <button type="button"
                      className="flex items-center justify-center"
                      onClick={(e) => { e.stopPropagation(); setExpanded(expanded === i ? null : i); }}>
                      <AccordionIcon active={expanded === i} />
                    </button>
                  </TableCell>
                  <TableCell>
                    {/* <input type="checkbox" checked={checkedRows.includes(i)} onChange={() => handleCheckbox(i)} /> */}
                    <div className="font-semibold">{invoice.invoiceNo}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold">{invoice.name}</div>
                    <div className="text-xs text-gray-500">{invoice.email}</div>
                  </TableCell>
                  <TableCell>
                    {invoice.paymentStatus === "Paid"
                      ? <Badge className="bg-green-100 text-green-600">Paid</Badge>
                      : <Badge className="bg-red-100 text-red-600">Unpaid</Badge>
                    }
                  </TableCell>
                  <TableCell>
                    <div className="font-bold">${invoice.amount}</div>
                    <div className="text-xs text-gray-400">{invoice.currency}</div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{invoice.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">...</Button>
                  </TableCell>
                </TableRow>
                {expanded === i && renderAccordionRow(i)}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between pt-4 text-sm text-gray-500">
          <span>Rows per page: 10 ▼</span>
          <span>1-10 of {filteredInvoices.length}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">{"<"}</Button>
            <Button variant="outline" size="icon">{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
