import JustCoPrimaryLine from "@/Components/JustCoPrimaryLine";

export default function TwoValues() {
    return (
        <div className="card-parent-1">
            <div className="div-context-parent-1">
                <div className="div-context-child-1">
                    <h2 className="title-size-1 font-bold">
                        Title for 2 Values Only
                    </h2>
                    <p className="notes-size-1">time</p>
                </div>

                <div className="div-context-child-1">
                    <table className="table-parent-1">
                        <thead className="">
                            <tr>
                                <th className="table-thead-tr-th-1"></th>
                                <th className="table-thead-tr-th-1">Emiten</th>
                                <th className="table-thead-tr-th-1">ValueName1</th>
                                <th className="table-thead-tr-th-1">ValueName2</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="">
                                <td className="table-tbody-tr-td-1">1.</td>
                                <td className="table-tbody-tr-td-1">BBCA</td>
                                <td className="table-tbody-tr-td-1">2.44</td>
                                <td className="table-tbody-tr-td-1">RP5.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
