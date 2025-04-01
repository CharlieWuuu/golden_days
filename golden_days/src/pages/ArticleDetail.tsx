import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticleDetail() {
    const { id } = useParams();

    const article = articles.find((a) => a.id === id);

    if (!article) {
        return <h1>找不到這篇文章 😢</h1>;
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}
