import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createFakeEcpayForm } from '../services/payment';

type CartItem = {
    id: string;
    name: string;
};

type FormData = {
    name: string;
    phone: string;
    address: string;
    note: string;
};

export default function Checkout() {
    const navigate = useNavigate();

    const [cart, setCart] = useState<CartItem[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        address: '',
        note: '',
    });

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCart(JSON.parse(stored));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ 模擬後端回傳綠界 HTML 表單
        const form = createFakeEcpayForm();

        const fullHTML = `
      ${form}
      <script>document.getElementById('ecpay-form').submit();</script>
    `;

        localStorage.setItem('paymentForm', fullHTML);
        navigate('/payment');
    };

    return (
        <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
            {/* 📝 表單 */}
            <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>收件人資訊</h2>
                <input name="name" placeholder="姓名" value={formData.name} onChange={handleChange} required />
                <input name="phone" placeholder="電話" value={formData.phone} onChange={handleChange} required />
                <input name="address" placeholder="地址" value={formData.address} onChange={handleChange} required />
                <textarea name="note" placeholder="備註（可選）" value={formData.note} onChange={handleChange} />
                <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#333', color: '#fff', border: 'none' }}>
                    前往付款
                </button>
            </form>

            {/* 🛒 購物清單 */}
            <div style={{ flex: 1 }}>
                <h2>購物清單</h2>
                {cart.length === 0 ? (
                    <p>你的購物車是空的</p>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
