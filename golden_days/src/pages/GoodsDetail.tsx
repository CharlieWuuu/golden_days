import { useParams } from 'react-router-dom';
import { goods } from '../data/goods';

export default function GoodsDetail() {
    const { id } = useParams();
    const item = goods.find((g) => g.id === id);

    if (!item) return <h1>找不到這個商品 😢</h1>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{item.name}</h1>
            <p>{item.detail}</p>
        </div>
    );
}
