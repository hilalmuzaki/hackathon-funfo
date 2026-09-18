import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex rounded-2xl items-center px-4 py-1 border-b-2 border-transparent text-sm font-medium leading-normal transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-primary/10 text-black1'
                    : 'hover:bg-primary/10 text-black1/50 hover:text-black1') +
                className
            }
        >
            {children}
        </Link>
    );
}
