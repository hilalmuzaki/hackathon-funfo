import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Test() {
    return (
        <AuthenticatedLayout>
            <div className="test">Test Page</div>
        </AuthenticatedLayout>
    );
}
