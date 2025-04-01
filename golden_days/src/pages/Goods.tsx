import { Link } from 'react-router-dom';
import { goods } from '../data/goods';
import { CardItem } from '../types/CardItem';

export default function Goods() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>商品清單</h1>
            <ul>
                {goods.map((item: CardItem) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                        <Link to={`/goods/${item.id}`}>商品資訊</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
