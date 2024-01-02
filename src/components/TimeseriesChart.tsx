import { ResponsiveLine } from "@nivo/line";
import useRandomData from "../lib/useRandomData";
import { useEffect, useMemo, useRef, useState } from "react";

type Callback<T extends (...args: Parameters<T>) => ReturnType<T>> = (...args: Parameters<T>) => ReturnType<T>;

const getThrottled = <T extends Callback<T>>(callback: T, delay: number) => {
    let isThrottleTimerRunning = false;
    let debounceTimerId: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>) => {
        if (!isThrottleTimerRunning) {
            isThrottleTimerRunning = true;
            callback(...args);
            setTimeout(() => {
                isThrottleTimerRunning = false;
                callback(...args);
            }, delay);
        }

        clearTimeout(debounceTimerId);
        debounceTimerId = setTimeout(() => callback(...args), delay);
    };
}

const TimeseriesChart = () => {

    const dataset = useRandomData({ n: 15 });

    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ height: 0, width: 0 });

    const throttledSetSize = useMemo(() => {
        return getThrottled((height: number, width: number) => {
            setSize({ height, width })
        }, 100);
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(observerEntries => {
            if (observerEntries.length !== 1) return;
            if (observerEntries[0].contentBoxSize.length !== 1) return;

            const height = observerEntries[0].contentBoxSize[0].blockSize;
            const width = observerEntries[0].contentBoxSize[0].inlineSize;

            throttledSetSize(height, width);
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [throttledSetSize]);

    return <>
        <div ref={containerRef} style={{ width: '100%', height: 0, minHeight: '100%' }}>
            <div style={{ height: size.height, width: size.width }}>
                <ResponsiveLine
                    data={[{ id: 'data', data: dataset }]}
                    xScale={{ type: 'time', format: 'native', useUTC: false }}
                    yScale={{ type: 'linear' }}

                    margin={{ top: 10, right: 80, bottom: 50, left: 60 }}

                    axisLeft={{
                        legend: 'random data',
                        legendPosition: 'middle',
                        legendOffset: -50,
                    }}
                    axisBottom={{
                        tickValues: 'every 5 seconds',
                        tickRotation: 60,
                        format: (value: Date) => {
                            const isoString = value.toISOString().split('T');
                            return isoString[1].split('.000Z')[0];
                        }
                    }}

                    colors={{ scheme: 'spectral' }}
                    isInteractive={true}
                    animate={false}

                    pointSize={10}
                    pointColor="white"
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}

                    legends={[{
                        anchor: 'right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 20,
                    }]}
                />
            </div>
        </div>
    </>
};

export default TimeseriesChart;
