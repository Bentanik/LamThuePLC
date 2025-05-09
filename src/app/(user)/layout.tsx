'use client';

import Sidebar from "@/components/global/side-bar";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = useAuth();

    // useEffect(() => {
    //     if (user == null) {
    //         window.location.href = "/login";
    //     }
    // }, [user]);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}