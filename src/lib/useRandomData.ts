import { useEffect, useState } from "react";

const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

type Args = {
    n: number,
    interval?: number,
    min?: number,
    max?: number,
};

type DataPoint = { x: Date, y: number };

const useRandomData = ({
    n,
    interval = 5000,
    min = 0,
    max = 5000,
}: Args): DataPoint[] => {

    const initialDataPoints = [...Array(n).keys()]
        .reverse()
        .map(key => ({
            x: new Date(Date.now() - key * interval),
            y: randomBetween(min, max)
        }));

    const [dataPoints, setDataPoints] = useState<DataPoint[]>(initialDataPoints);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDataPoint = {
                x: new Date(Date.now()),
                y: randomBetween(min, max),
            }
            setDataPoints(currentDataPoints => [...currentDataPoints.slice(1), newDataPoint])
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval, min, max, n]);

    return dataPoints;
}

export default useRandomData;
