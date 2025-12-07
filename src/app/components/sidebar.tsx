"use client"

import React from "react"
import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation"
import {
  Home,
  ShoppingBag,
  ScrollText,
  Users,
  Truck,
  Mail,
  ListChecks,
  MapPin,
  AlertTriangle,
  ClipboardList,
  User,
} from "lucide-react";

interface SidebarProps {
  className?: string
}

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/", path: "/" },
  { icon: ShoppingBag, label: "Pick and Ship", href: "/about", path: "/about" },
  { icon: ClipboardList, label: "Deliveries", href: "/deliveries", path: "/deliveries" },
  { icon: AlertTriangle, label: "Delivery Issues", href: "/deliveryissues", path: "/deliveryissues" },
  { icon: Truck, label: "Manage Vehicles", href: "/managevehicels", path: "/managevehicels" },
  { icon: Users, label: "Manage Drivers", href: "/managedriver", path: "/managedriver" },
  { icon: ListChecks, label: "Sort Delivery", href: "/sortdelivery", path: "/sortdelivery" },
  { icon: MapPin, label: "Truck Location", href: "/trucklocation", path: "/trucklocation" },
  { icon: ScrollText, label: "Invoices List", href: "/invoicelist", path: "/invoicelist" },
  { icon: Mail, label: "Send Message", href: "/sendmessage", path: "/sendmessage" },
  { icon: User, label: "Account", href: "/account", path: "/account" },
];

function SidebarComponent({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={`hidden md:flex md:flex-col bg-white shadow-md h-screen fixed top-0 left-0 w-[250px] min-h-screen ${className}`}
    >
      <div className="px-6 pt-6 pb-2">
        <Image
          src="/logo-login.png"
          alt="Saavi Logo"
          width={95}
          height={50}
          className="h-10"
        />
      </div>

      <nav className="space-y-1 px-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center py-2 px-2 text-sm rounded-md transition-colors ${isActive
                  ? "bg-[#EDF1FD] text-[#549EF3] font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#410C90]"
                }`}
            >
              <item.icon className={`mr-2 h-5 w-5 ${isActive ? "text-[#549EF3]" : "text-[#B5B8BE]"}`} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export const Sidebar = React.memo(SidebarComponent)
