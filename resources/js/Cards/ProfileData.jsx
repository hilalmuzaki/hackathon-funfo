import { Link } from "@inertiajs/react";

export default function ProfileData() {
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
                        <p className="body-size-1">Toni Kroos</p>
                    </div>

                    <div className="div-context-child-1">
                        <p className="info-1">Nama pengguna</p>
                        <p className="body-size-1">toni.kr8s</p>
                    </div>

                    <div className="div-context-child-1">
                        <p className="info-1">Email</p>
                        <p className="body-size-1">toni@kroos.com</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
