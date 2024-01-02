import useRandomData from "../lib/useRandomData";
import styles from './gaugeChart.module.css';

const GaugeChart = () => {

    const dataset = useRandomData({ n: 15 });

    return <div className={styles.container}>
        <div className={styles.halfcircle}>
        </div>
        <div className={styles.test}>{dataset.at(-1)?.y}</div>
    </div>
};

export default GaugeChart;
