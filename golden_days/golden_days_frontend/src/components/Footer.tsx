import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export default function Footer() {
    return (
        <section className={style.Footer}>
            <p>想更認識金時光？</p>
            <div>
                <Link to="/about">關於我們</Link>

                <p>聯絡我們</p>
                <p>加入我們</p>
            </div>
        </section>
    );
}
