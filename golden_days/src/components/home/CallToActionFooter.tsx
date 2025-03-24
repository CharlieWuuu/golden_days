import { Link } from 'react-router-dom';

export default function CallToActionFooter() {
    return (
        <section style={{ padding: '2rem', background: '#eee', textAlign: 'center' }}>
            <p>想更認識金時光？</p>
            <button>
                <Link to="/about">關於我們</Link>
            </button>
            <button>聯絡我們</button>
            <button>加入我們</button>
        </section>
    );
}
