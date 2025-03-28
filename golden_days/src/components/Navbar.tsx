// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: 'calc(100% - 2rem)',
                padding: '1rem',
                borderBottom: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
                zIndex: 1000,
            }}>
            <Link to="/" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                首頁
            </Link>
            <div style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <Link to="/articles" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                    文章清單
                </Link>
                <Link to="/experiences" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                    活動清單
                </Link>
                <Link to="/goods" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                    商品清單
                </Link>
                <Link to="/about" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                    關於我們
                </Link>
                <Link to="/cart" style={{ color: 'white', textShadow: '0px 0px 8px black' }}>
                    購物車
                </Link>{' '}
                {isLoggedIn ? (
                    <a onClick={logout} style={{ cursor: 'pointer', color: 'white', textShadow: '0px 0px 8px black' }}>
                        登出
                    </a>
                ) : (
                    <Link to="/account/login">登入</Link>
                )}
            </div>
        </nav>
    );
}
