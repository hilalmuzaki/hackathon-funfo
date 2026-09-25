import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full border border-primary/50 dark:border-coPrimary/50 bg-transparent focus:border-primary dark:focus:border-coPrimary focus:ring-primary dark:focus:ring-coPrimary rounded-xl lg:rounded-2xl dark:[color-scheme:dark] ' +
                className
            }
            ref={localRef}
        />
    );
});
