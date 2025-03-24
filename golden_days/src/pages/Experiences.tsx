import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';

export default function Experiences() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>活動清單</h1>
            <ul>
                {experiences.map((exp) => (
                    <li key={exp.id} style={{ marginBottom: '1rem' }}>
                        <h3>{exp.title}</h3>
                        <p>{exp.description}</p>
                        <Link to={`/experiences/${exp.id}`}>活動說明</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
