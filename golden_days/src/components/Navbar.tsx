// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav style={{ width: 'calc(100% - 2rem)', padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            <Link to="/">首頁</Link>
            <div style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <Link to="/articles">文章清單</Link>
                <Link to="/experiences">活動清單</Link>
                <Link to="/goods">商品清單</Link>
                <Link to="/about">關於我們</Link>
                <Link to="/cart">購物車</Link>{' '}
                {isLoggedIn ? (
                    <a onClick={logout} style={{ cursor: 'pointer' }}>
                        登出
                    </a>
                ) : (
                    <Link to="/account/login">登入</Link>
                )}
            </div>
        </nav>
    );
}
