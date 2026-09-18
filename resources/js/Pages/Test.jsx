import { Head, Link } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout";

export default function Test() {
    return (
        <WebLayout>
            <Head title="Test" />

            <section className="top-section-parent-1">
                <div className="section-child-1">
                    <h1 className="body-size-1">
                        Definisi here. Lorem Ipsum dolor shit amat.
                    </h1>

                    <div className="div-context-parent-1">
                        <h1 className="title-size-1 font-bold">Card Dummy</h1>
                        <div className="card-parent-1">
                            <div className="w-full h-20">
                                <h1 className="title-size-1 font-bold">
                                    Card Dummy
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="div-context-parent-1">
                        <h1 className="title-size-1 font-bold">Card Dummy</h1>
                        <div className="div-grid-cols-112-1">
                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>

                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>

                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>

                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>

                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>

                            <div className="card-parent-1">
                                <div className="w-full h-20">
                                    <h1 className="title-size-1 font-bold">
                                        Card Dummy
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
