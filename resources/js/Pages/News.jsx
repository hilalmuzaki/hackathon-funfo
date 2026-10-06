import { useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import OneValues from "@/Cards/OneValues";
import TwoValues from "@/Cards/TwoValues";
import TwoPlusOneValues from "@/Cards/TwoPlusOneValues";

export default function News({ marketData = {}, overviewData = {}, time = "time" }) {
    const { 
        top_roe = [], 
        undervalued = [], 
        top_roa = [] 
    } = marketData || {};

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
                only: ["marketData", "overviewData", "time"],
                preserveScroll: true,
            });
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <WebLayout>
            <Head title="News" />

            <section className="top-section-parent-1">
                {/* Bagian 1: 2 Kartu di atas, 1 Kartu melebar di bawah */}
                <section className="section-child-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Kartu 1: Top ROE (Kiri Atas) */}
                        <OneValues
                            title="Top ROE"
                            time={time}
                            colName="ROE"
                            items={top_roe}
                        />

                        {/* Kartu 2: Top ROA (Kanan Atas) */}
                        <TwoValues
                            title="Top ROA"
                            time={time}
                            colVal1="ROA"
                            colVal2="Status"
                            items={top_roa}
                        />

                        {/* Kartu 3: Undervalued Stocks (Melebar Penuh 2 Kolom di Bawah) */}
                        <div className="col-span-1 md:col-span-2">
                            <TwoPlusOneValues
                                title="Undervalued Stocks"
                                time={time}
                                colVal1="PBV / Perubahan"
                                colVal2="Harga"
                                items={undervalued}
                            />
                        </div>
                          <TwoValues
                            title="Top Gainers"
                            time={time}
                            colVal1="Perubahan"
                            colVal2="Harga"
                            items={top_gainers}
                        />

                        {/* Kartu Home 2: Market Leaders */}
                        <TwoPlusOneValues
                            title="Market Leaders"
                            time={time}
                            colVal1="PBV"
                            colVal2="Harga"
                            items={market_leaders}
                        />

                        {/* Kartu Home 3: Top Losers */}
                        <TwoValues
                            title="Top Losers"
                            time={time}
                            colVal1="Perubahan"
                            colVal2="Harga"
                            items={top_losers}
                        />

                        {/* Kartu Home 4: Blue Chip Watchlist */}
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