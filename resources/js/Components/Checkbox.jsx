export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'border border-primary/50 dark:border-coPrimary/50 bg-transparent focus:border-primary dark:focus:border-coPrimary focus:ring-primary dark:focus:ring-coPrimary rounded-md ' +
                className
            }
        />
    );
}
