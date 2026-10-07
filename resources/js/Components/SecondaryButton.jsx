export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `parent-button-fit-1 font-medium text-sm ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
