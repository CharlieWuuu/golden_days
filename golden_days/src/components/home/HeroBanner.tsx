import { Link } from 'react-router-dom';
export default function HeroBanner() {
    return (
        <section style={{ padding: '4rem', textAlign: 'center', background: '#fdf6e3' }}>
            <h1>金時光</h1>
            <p>金瓜石、九份、水湳洞的生活風景</p>
            <button>
                <Link to="/articles">立即探索地方故事</Link>
            </button>
        </section>
    );
}
