import { useParams } from 'react-router-dom';
import { goods } from '../data/goods';
import { CardItem } from '../types/CardItem';

export default function GoodsDetail() {
    const { id } = useParams();
    const item = goods.find((g) => g.id === id);

    const handleAddToCart = (item: CardItem) => {
        const current = localStorage.getItem('cart');
        const cart = current ? JSON.parse(current) : [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.title} 已加入購物車！`);
    };

    if (!item) return <h1>找不到這個商品 😢</h1>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button style={{ marginLeft: '1rem' }} onClick={() => handleAddToCart(item)}>
                加入購物車
            </button>
        </div>
    );
}
