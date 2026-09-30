import { Head, Link } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import OneValues from "@/Cards/OneValues";
import TwoValues from "@/Cards/TwoValues";
import TwoPlusOneValues from "@/Cards/TwoPlusOneValues";
import ThreeValues from "@/Cards/ThreeValues";

export default function News() {
    return (
        <WebLayout>
            <Head title="News" />

            <section className="top-section-parent-1">
                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        <OneValues />
                        <TwoPlusOneValues />
                        <TwoValues />
                        <TwoValues />
                    </div>
                </section>

                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        <ThreeValues />
                        <OneValues />
                        <OneValues />
                    </div>
                </section>
            </section>
        </WebLayout>
    );
}
