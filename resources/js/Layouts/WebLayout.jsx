import TopNav from "@/Navigations/TopNav";
import BottomNav from "@/Navigations/BottomNav";

export default function WebLayout({ header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <TopNav />

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>

            <BottomNav />
        </div>
    );
}
