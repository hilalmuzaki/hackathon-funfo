import { Head, Link } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";
import TwoValues from "@/Cards/TwoValues";
import TwoPlusOneValues from "@/Cards/TwoPlusOneValues";

export default function Home() {
    return (
        <WebLayout>
            <Head title="Home" />

            <section className="top-section-parent-1">
                <section className="section-child-1">
                    <div className="div-grid-cols-112-1">
                        <TwoValues />
                        <TwoPlusOneValues />
                        <TwoValues />
                        <TwoValues />
                    </div>
                </section>
            </section>
        </WebLayout>
    );
}
