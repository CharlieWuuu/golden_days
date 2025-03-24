import { useParams } from 'react-router-dom';
import { experiences } from '../data/experiences';

export default function ExperienceDetail() {
    const { id } = useParams();
    const exp = experiences.find((e) => e.id === id);

    if (!exp) return <h1>找不到這個活動 😢</h1>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{exp.title}</h1>
            <p>{exp.detail}</p>
        </div>
    );
}
