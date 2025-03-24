import HeroBanner from '../components/home/HeroBanner';
import FeatureIntro from '../components/home/FeatureIntro';
import FeaturedArticles from '../components/home/FeaturedArticles';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CallToActionFooter from '../components/home/CallToActionFooter';

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <FeatureIntro />
            <FeaturedArticles />
            <FeaturedProducts />
            <CallToActionFooter />
        </div>
    );
}
