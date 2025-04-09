import Sidebar from "@/components/global/side-bar";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
