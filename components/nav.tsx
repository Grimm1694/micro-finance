"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Assuming you're using this from your provided code
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
        
      <Menu setActive={setActive}>
        {/* Borrow Menu */}
        <MenuItem setActive={setActive} active={active} item="Borrow">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/borrow/apply">Apply for Loan</HoveredLink>
            <HoveredLink href="/borrow/track">Track Loan Application</HoveredLink>
          </div>
        </MenuItem>

        {/* Lend Menu */}
        <MenuItem setActive={setActive} active={active} item="Lend">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/lend/fund">Fund a Loan</HoveredLink>
            <HoveredLink href="/lend/track">Track Loan Funding</HoveredLink>
          </div>
        </MenuItem>

        {/* Whitelist Menu */}
        <MenuItem setActive={setActive} active={active} item="Whitelist">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/whitelist/apply">Apply for Whitelist</HoveredLink>
            <HoveredLink href="/whitelist/status">Check Whitelist Status</HoveredLink>
          </div>
        </MenuItem>

        {/* Loans Menu */}
        <MenuItem setActive={setActive} active={active} item="Loans">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/loans/approved">Approved Loans</HoveredLink>
            <HoveredLink href="/loans/pending">Pending Loans</HoveredLink>
            <HoveredLink href="/loans/history">Loan History</HoveredLink>
          </div>
        </MenuItem>

        {/* Profile Menu */}
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/profile/view">View Profile</HoveredLink>
            <HoveredLink href="/profile/settings">Settings</HoveredLink>
            <HoveredLink href="/profile/logout">Logout</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
