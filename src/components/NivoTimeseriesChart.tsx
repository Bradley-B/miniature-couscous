import { ResponsiveLine } from "@nivo/line";
import useRandomData from "../lib/useRandomData";
import { useRef } from "react";
import { useElementSize } from "../lib/useElementSize";

const NivoTimeseriesChart = () => {

    const dataset = useRandomData({ n: 15 });

    const containerRef = useRef<HTMLDivElement>(null);
    const size = useElementSize(containerRef);

    return <>
        <div ref={containerRef} style={{ width: '100%', height: 0, minHeight: '100%' }}>
            <div style={{ height: size?.height, width: size?.width }}>
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

export default NivoTimeseriesChart;
