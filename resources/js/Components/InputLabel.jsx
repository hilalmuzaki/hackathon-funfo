export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-black1 dark:text-white1 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
