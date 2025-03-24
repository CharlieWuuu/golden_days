import { Link } from 'react-router-dom';
import { goods } from '../data/goods';

export default function Goods() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>商品清單</h1>
            <ul>
                {goods.map((item) => (
                    <li key={item.id} style={{ marginBottom: '1rem' }}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Link to={`/goods/${item.id}`}>商品資訊</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
