// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav style={{ width: 'calc(100% - 2rem)', padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/articles">文章清單</Link>
                </li>
                {/* <li>
                    <Link to="/articles/abc">文章內文</Link>
                </li> */}
                <li>
                    <Link to="/experiences">活動清單</Link>
                </li>
                {/* <li>
                    <Link to="/experiences/xyz">活動說明</Link>
                </li> */}
                <li>
                    <Link to="/goods">商品清單</Link>
                </li>
                {/* <li>
                    <Link to="/goods/456">商品資訊</Link>
                </li> */}
                <li>
                    <Link to="/about">關於我們</Link>
                </li>
                <li>
                    <Link to="/cart">購物車</Link>
                </li>
                {/* <li>
                    <Link to="/checkout">收件資訊</Link>
                </li>
                <li>
                    <Link to="/payment">付款頁面</Link>
                </li> */}
                {/* <li>
                    <Link to="/orders">訂單紀錄</Link>
                </li> */}
                {/* <li>
                    <Link to="/orders/123">個別訂單</Link>
                </li> */}
            </ul>
            {isLoggedIn ? (
                <a onClick={logout} style={{ cursor: 'pointer' }}>
                    登出
                </a>
            ) : (
                <Link to="/account/login">登入</Link>
            )}
        </nav>
    );
}
