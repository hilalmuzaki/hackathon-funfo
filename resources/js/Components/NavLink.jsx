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
                'flex gap-3 rounded-2xl items-center px-4 py-1 border-b-2 border-transparent text-base font-medium leading-normal transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-primary/10 text-black1 dark:bg-coPrimary/10 dark:text-white1'
                    : 'hover:bg-primary/10 text-black1/50 hover:text-black1 dark:hover:bg-coPrimary/10 dark:text-white1/50 dark:hover:text-white1') +
                className
            }
        >
            {children}
        </Link>
    );
}
