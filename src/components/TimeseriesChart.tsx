import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

const initialData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890, 2390, 3490];
const initialLabels = [...Array(14).keys()].map(key => new Date(Date.now() + key * 1000));

// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const TimeseriesChart = () => {

    const [data, setData] = useState(initialData);
    const [lables, setLabels] = useState(initialLabels);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(currentData => [...currentData.slice(1), randomBetween(1000, 4000)]);
            setLabels(currentLabels => [...currentLabels.slice(1), new Date(Date.now() + currentLabels.length * 1000)]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return <LineChart
        height={300}
        series={[
            { data, label: 'data' },
            // { data: uData, label: 'uv' },
        ]}
        xAxis={[{ scaleType: 'time', data: lables }]}
        slotProps={{
            legend: {
              direction: 'column',
              position: { vertical: 'middle', horizontal: 'right' },
              padding: -10,
            },
          }}
        sx={{ pl: 1, pr: 2 }}
    />
};

export default TimeseriesChart;
