import { useState, useEffect } from 'react';

/**
 * Custom hook that debounces the input value.
 * 
 * @param {any} value - The value to be debounced.
 * @param {number} [delay=500] - The delay in milliseconds before updating the debounced value.
 * @returns {any} The debounced value.
 */
const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timeoutId);
        };

    }, [value, delay])

    return debouncedValue
}

export default useDebounce;
