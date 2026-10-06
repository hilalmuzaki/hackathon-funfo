import { Link, usePage } from "@inertiajs/react";

export default function ProfileData() {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <Link
            href={route("profile.edit")}
            className="hover:opacity-80"
        >
            <div className="card-parent-1">
                <div className="div-context-parent-1">
                    <h2 className="title-size-1 font-bold">
                        Informasi Pribadi
                    </h2>

                    <div className="div-context-child-1">
                        <p className="info-1">Nama</p>
                        <p className="body-size-1">{user?.name || "-"}</p>
                    </div>

                    <div className="div-context-child-1">
                        <p className="info-1">Nama pengguna</p>
                        <p className="body-size-1">{user?.username || user?.name || "-"}</p>
                    </div>

                    <div className="div-context-child-1">
                        <p className="info-1">Email</p>
                        <p className="body-size-1">{user?.email || "-"}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}