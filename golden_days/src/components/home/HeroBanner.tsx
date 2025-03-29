import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.scss';
import { useEffect, useRef } from 'react';
export default function HeroBanner() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrollY = window.scrollY;
            heroRef.current.style.setProperty('--bg-offset', `${scrollY * 0.2}px`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section ref={heroRef} className={styles.HeroBanner}>
            <div>
                <h1>金時光</h1>
                <p>金瓜石、九份、水湳洞的生活風景</p>
            </div>
            <button>
                <Link to="/articles">立即探索地方故事</Link>
            </button>
        </section>
    );
}
