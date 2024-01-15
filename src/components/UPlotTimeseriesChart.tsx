import { useEffect, useMemo, useRef, useState } from "react";
import uPlot, { AlignedData, Options } from "uplot";
import useRandomData from "../lib/useRandomData";
import { useElementSize } from "../lib/useElementSize";
import '../../node_modules/uplot/dist/uPlot.min.css';

const UPlotTimeseriesChart = () => {

    const dataset = useRandomData({ n: 20, interval: 2000 });

    const data: AlignedData = useMemo(() => {
        const x = dataset.map(p => p.x.valueOf() / 1000);
        const y = dataset.map(p => p.y);
        return [x, y];
    }, [dataset]);

    const containerRef = useRef<HTMLDivElement>(null);
    const size = useElementSize(containerRef, 10);

    const uPlotRef = useRef<HTMLDivElement>(null);
    const [uPlotInstance, setUPlotInstance] = useState<uPlot>();

    const options: Options = useMemo(() => ({
        width: 0,
        height: 0,
        series: [
            {},
            { label: 'data', stroke: 'darkslategray', width: 2 },
        ]
    }), []);

    useEffect(() => {
        if (!uPlotRef.current) return;
        const u = new uPlot(options, undefined, uPlotRef.current);
        setUPlotInstance(u);
        return u.destroy;
    }, [uPlotRef, options]);

    useEffect(() => {
        if (!uPlotInstance) return;
        uPlotInstance.setData(data);
    }, [uPlotInstance, data]);

    useEffect(() => {
        if (!uPlotInstance || !size) return;
        uPlotInstance.setSize(size);
    }, [uPlotInstance, size]);

    return <>
        <div ref={containerRef} style={{ height: 0, minHeight: '100%' }}>
            <div
                style={{ marginTop: -30 }}
                ref={uPlotRef}
            />
        </div>
    </>
};

export default UPlotTimeseriesChart;
