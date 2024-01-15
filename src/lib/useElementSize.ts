import { RefObject, useEffect, useMemo, useState } from "react";
import { getThrottled } from "./getThrottled";

export const useElementSize = (elementRef: RefObject<Element>, delay = 200) => {
    const [size, setSize] = useState<{ height: number, width: number }>();

    const throttledSetSize = useMemo(() => {
        return getThrottled((height: number, width: number) => {
            setSize({ height, width });
        }, delay);
    }, [delay]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(observerEntries => {
            if (observerEntries.length !== 1) return;
            if (observerEntries[0].contentBoxSize.length !== 1) return;

            const height = observerEntries[0].contentBoxSize[0].blockSize;
            const width = observerEntries[0].contentBoxSize[0].inlineSize;

            throttledSetSize(height, width);
        });

        if (elementRef.current) {
            resizeObserver.observe(elementRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [throttledSetSize, elementRef]);

    return size;
}
