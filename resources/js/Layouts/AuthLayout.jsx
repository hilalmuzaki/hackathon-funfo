import AuthTopNav from "@/Navigations/AuthTopNav";

export default function AuthLayout({ header, children }) {
    return (
        <div className="w-full min-h-screen pt-14 sm:pt-20 pb-20 px-4 sm:px-48 lg:px-[420px] space-y-[24px] bg-white1 dark:bg-black1 text-black1 dark:text-white1">
            <div className="">
                <AuthTopNav />
            </div>

            <div className="w-full px-4 py-8 lg:p-8 bg-primary/10 shadow-lg shadow-coPrimary dark:shadow-primary space-y-[24px] rounded-xl lg:rounded-2xl">
                {children}
            </div>
        </div>
    );
}

{
    /* <div className="primary-interface">
            

            <main className="col-span-4">{children}</main>
        </div> */
}
