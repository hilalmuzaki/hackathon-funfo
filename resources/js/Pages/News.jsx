import { Head } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import OneValues from "@/Cards/OneValues";
import TwoValues from "@/Cards/TwoValues";
import TwoPlusOneValues from "@/Cards/TwoPlusOneValues";
import ThreeValues from "@/Cards/ThreeValues";

export default function News({ marketData, time }) {
    const { top_roe = [], undervalued = [], value_stock = [], top_roa = [] } = marketData || {};

    return (
        <WebLayout>
            <Head title="News" />

            <section className="top-section-parent-1">
                {/* Baris Pertama: 4 Kartu Pipeline Pre-Market */}
                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        {/* Kartu 1: 1 Value (ROE) */}
                        <OneValues
                            title="Top ROE"
                            time={time}
                            colName="ROE"
                            items={top_roe}
                        />

                        {/* Kartu 2: 2 Values + 1 Value (Undervalued: PBV & % Change + Harga) */}
                        <TwoPlusOneValues
                            title="Undervalued Stocks"
                            time={time}
                            colVal1="PBV / Perubahan"
                            colVal2="Harga"
                            items={undervalued}
                        />

                        {/* Kartu 3: 2 Values (Value Stock: ROE + Harga) */}
                        <TwoValues
                            title="Value Stock (Diskon)"
                            time={time}
                            colVal1="ROE"
                            colVal2="Harga"
                            items={value_stock}
                        />

                        {/* Kartu 4: 2 Values (Top ROA) */}
                        <TwoValues
                            title="Top ROA"
                            time={time}
                            colVal1="ROA"
                            colVal2="Status"
                            items={top_roa}
                        />
                    </div>
                </section>

                {/* Baris Kedua: Bisa dipertahankan untuk komponen lain
                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        <ThreeValues />
                        <OneValues />
                        <OneValues />
                    </div>
                </section> */}
            </section>
        </WebLayout>
    );
}