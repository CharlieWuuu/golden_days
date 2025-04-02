import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Articles() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>文章清單</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id} style={{ marginBottom: '1rem' }}>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <Link to={`/articles/${article.id}`}>閱讀更多</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
