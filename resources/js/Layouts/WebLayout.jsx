import TopNav from "@/Navigations/TopNav";
import BottomNav from "@/Navigations/BottomNav";
import SideNav from "@/Navigations/SideNav";

export default function WebLayout({ header, children }) {
    return (
        <div className="primary-interface">
            <div className="">
                <TopNav />

                <SideNav />
            </div>

            <main className="col-span-4">{children}</main>

            <BottomNav />
        </div>
    );
}
