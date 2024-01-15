import useRandomData from "../lib/useRandomData";
import styles from './dataCard.module.css';

const DataCard = () => {

    const dataset = useRandomData({ n: 15 });

    return <div className={styles.container}>
        <svg style={{ width: '60%' }} viewBox="0 0 56 18">
            <text textAnchor="middle" dominantBaseline="middle" x="50%" y="50%">{dataset.at(-1)?.y}</text>
        </svg>
    </div>
};

export default DataCard;
