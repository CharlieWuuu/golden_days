import HeroBanner from '../components/home/HeroBanner';
import { FeatureCards } from '../components/home/FeaturedCards';
import { articles } from '../data/articles';
import { events } from '../data/events';
import { goods } from '../data/goods';

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <HeroBanner />
            <FeatureCards CardItemList={articles} CardType_EN="articles" CardType_TW="文章" />
            <FeatureCards CardItemList={events} CardType_EN="events" CardType_TW="活動" />
            <FeatureCards CardItemList={goods} CardType_EN="goods" CardType_TW="商品" />
        </div>
    );
}
