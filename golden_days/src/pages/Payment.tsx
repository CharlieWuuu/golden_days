import { useEffect } from 'react';

export default function Payment() {
    useEffect(() => {
        const html = localStorage.getItem('paymentForm');
        if (!html) return;

        const temp = document.createElement('div');
        temp.innerHTML = html;

        const form = temp.querySelector('form');
        if (form) {
            document.body.appendChild(form);
            (form as HTMLFormElement).submit();
        }
    }, []);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>正在轉接到金流頁面...</h1>
        </div>
    );
}
