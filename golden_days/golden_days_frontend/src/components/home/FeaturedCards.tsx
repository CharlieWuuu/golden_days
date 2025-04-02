import { Link } from 'react-router-dom';
import { CardItem } from '../../types/CardItem';
import styles from './FeaturedCards.module.scss';

type FeatureCardsProps = {
    CardItemList: CardItem[];
    CardType_EN: string;
    CardType_TW: string;
};

export function FeatureCards({ CardItemList, CardType_EN, CardType_TW }: FeatureCardsProps) {
    return (
        <section className={styles.FeatureCards}>
            <h2>精選{CardType_TW}</h2>
            <div className={styles.Divider}></div>
            <ul>
                {CardItemList.slice(0, 3).map((CardItem) => (
                    <li key={CardItem.id}>
                        <h3>{CardItem.title}</h3>
                        <p>{CardItem.summary}</p>
                        <Link to={`/${CardType_EN}/${CardItem.id}`}>檢視{CardType_TW}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
