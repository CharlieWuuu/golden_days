import { Link } from 'react-router-dom';
import { events } from '../data/events';
import { CardItem } from '../types/CardItem';

export default function Events() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>活動清單</h1>
            <ul>
                {events.map((exp: CardItem) => (
                    <li key={exp.id} style={{ marginBottom: '1rem' }}>
                        <h3>{exp.title}</h3>
                        <p>{exp.summary}</p>
                        <Link to={`/events/${exp.id}`}>活動說明</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
