import { useState } from "react";

export default function ThreeValues({
    title = "Title for 3 Values Only",
    time = "time",
    colVal1 = "ValueName1",
    colVal2 = "ValueName2",
    colVal3 = "ValueName3",
    items = [],
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="card-parent-1 flex flex-col justify-between">
            <div className="div-context-parent-1">
                <div className="div-context-child-1">
                    <h2 className="title-size-1 font-bold">{title}</h2>
                    <p className="notes-size-1">{time}</p>
                </div>

                <div className="div-context-child-1">
                    <table className="table-parent-1">
                        <thead>
                            <tr>
                                <th className="table-thead-tr-th-1"></th>
                                <th className="table-thead-tr-th-1">Emiten</th>
                                <th className="table-thead-tr-th-1">{colVal1}</th>
                                <th className="table-thead-tr-th-1">{colVal2}</th>
                                <th className="table-thead-tr-th-1">{colVal3}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map((item, index) => (
                                    <tr key={item.no || startIndex + index}>
                                        <td className="table-tbody-tr-td-1">
                                            {startIndex + index + 1}.
                                        </td>
                                        <td className="table-tbody-tr-td-1 font-semibold">
                                            {item.emiten}
                                        </td>
                                        <td className="table-tbody-tr-td-1">
                                            {item.arus_kas_operasional || item.val1 || "-"}
                                        </td>
                                        <td className="table-tbody-tr-td-1">
                                            {item.arus_kas_investasi || item.val2 || "-"}
                                        </td>
                                        <td className="table-tbody-tr-td-1">
                                            {item.arus_kas_pendanaan || item.val3 || "-"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="table-tbody-tr-td-1 text-center text-gray-500 py-3"
                                    >
                                        Tidak ada data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-xs text-slate-500">
                    <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="parent-button-fit-1 disabled:cursor-not-allowed transition"
                    >
                        Prev
                    </button>
                    <span>
                        Hal <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
                    </span>
                    <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="parent-button-fit-1 disabled:cursor-not-allowed transition"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}