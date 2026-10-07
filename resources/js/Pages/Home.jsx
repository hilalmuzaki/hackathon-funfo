import { useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import TwoValues from "@/Cards/TwoValues";
import TwoPlusOneValues from "@/Cards/TwoPlusOneValues";

export default function Home({ overviewData = {}, time = "time" }) {
    const {
        top_gainers = [],
        market_leaders = [],
        top_losers = [],
        bluechips = [],
    } = overviewData || {};

    // Polling background update setiap 30 detik
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({
                only: ["overviewData", "time"],
                preserveScroll: true,
            });
        }, 30000); // 30 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <WebLayout>
            <Head title="Home" />

            <section className="top-section-parent-1">
                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        {/* Kartu 1: Top Gainers */}
                        <TwoValues
                            title="Top Gainers"
                            time={time}
                            colVal1="Perubahan"
                            colVal2="Harga"
                            items={top_gainers}
                        />

                        {/* Kartu 3: Top Losers */}
                        <TwoValues
                            title="Top Losers"
                            time={time}
                            colVal1="Perubahan"
                            colVal2="Harga"
                            items={top_losers}
                        />

                        {/* Kartu 4: Blue Chip Watchlist */}
                        <TwoValues
                            title="Blue Chip Watchlist"
                            time={time}
                            colVal1="Valuasi"
                            colVal2="Harga"
                            items={bluechips}
                        />
                    </div>
                </section>
            </section>
        </WebLayout>
    );
}