"use client";
import { useState } from "react";
import { Header,Sidebar } from "./index";

export default function CombineLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    console.log("open",open)
    return (
        <div className="layout-container flex h-full grow flex-col">
            <Header open={open} setOpen={setOpen} />
            <div className="gap-1  flex flex-1 py-2">
                <Sidebar open={open} setOpen={setOpen} />
                {children}
            </div>
        </div>
    );
}