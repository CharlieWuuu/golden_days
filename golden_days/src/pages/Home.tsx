import HeroBanner from '../components/home/HeroBanner';
import FeatureIntro from '../components/home/FeatureIntro';
import FeaturedArticles from '../components/home/FeaturedArticles';
import FeaturedProducts from '../components/home/FeaturedProducts';

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <FeatureIntro />
            <FeaturedArticles />
            <FeaturedProducts />
        </div>
    );
}
