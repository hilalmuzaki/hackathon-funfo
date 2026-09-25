export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `parent-button-fit-2 font-medium text-sm ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
