import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type CartItem = {
    id: string;
    name: string;
};

export default function Cart() {
    const { isLoggedIn } = useAuth();
    const [cart, setCart] = useState<CartItem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) setCart(JSON.parse(stored));
    }, []);

    const handleRemove = (id: string) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const goToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>購物車</h1>
            {isLoggedIn ? (
                cart.length === 0 ? (
                    <p>你的購物車是空的。</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} style={{ marginBottom: '1rem' }}>
                                    {item.name}
                                    <button onClick={() => handleRemove(item.id)} style={{ marginLeft: '1rem', color: 'red' }}>
                                        移除
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={goToCheckout}
                            style={{
                                marginTop: '2rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                            }}>
                            前往結帳
                        </button>
                    </>
                )
            ) : (
                <p>請先登入</p>
            )}
        </div>
    );
}
