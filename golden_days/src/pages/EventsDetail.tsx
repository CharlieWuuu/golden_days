import { useParams } from 'react-router-dom';
import { events } from '../data/events';

export default function ExperienceDetail() {
    const { id } = useParams();
    const exp = events.find((e) => e.id === id);
    console.log(events);

    if (!exp) return <h1>找不到這個活動 😢</h1>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{exp.title}</h1>
            <p>{exp.content}</p>
        </div>
    );
}
