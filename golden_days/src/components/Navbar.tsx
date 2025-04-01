// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import style from './Navbar.module.scss';

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav className={style.Navbar}>
            <Link to="/">首頁</Link>
            <div>
                <Link to="/articles">文章清單</Link>
                <Link to="/events">活動清單</Link>
                <Link to="/goods">商品清單</Link>
                <Link to="/about">關於我們</Link>
                <Link to="/cart">購物車</Link>
                {isLoggedIn ? <a onClick={logout}>登出</a> : <Link to="/account/login">登入</Link>}
            </div>
        </nav>
    );
}
