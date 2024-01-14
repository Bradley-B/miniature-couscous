type Callback<T extends (...args: Parameters<T>) => ReturnType<T>> = (...args: Parameters<T>) => ReturnType<T>;

export const getThrottled = <T extends Callback<T>>(callback: T, delay: number) => {
    let isThrottleTimerRunning = false;
    let debounceTimerId: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>) => {
        if (!isThrottleTimerRunning) {
            isThrottleTimerRunning = true;
            callback(...args);
            setTimeout(() => {
                isThrottleTimerRunning = false;
            }, delay);
        }

        clearTimeout(debounceTimerId);
        debounceTimerId = setTimeout(() => callback(...args), delay);
    };
}
