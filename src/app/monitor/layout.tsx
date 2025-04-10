import Sidebar from "@/components/global/side-bar";
import MonitorHeader from "@/components/monitor/monitor-header";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <MonitorHeader />
                {children}
            </main>
        </div>
    );
}
