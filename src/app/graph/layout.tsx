import Sidebar from "@/components/global/side-bar";
import GraphHeader from "@/components/graph/graph-header";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <GraphHeader />
                {children}
            </main>
        </div>
    );
}
