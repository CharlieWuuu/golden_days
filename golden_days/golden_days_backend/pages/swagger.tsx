// 📁 pages/swagger.tsx
import { useEffect } from 'react';
import Head from 'next/head';

export default function SwaggerCDN() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js';
        script.onload = () => {
            (window as any).SwaggerUIBundle({
                url: '/api/docs',
                dom_id: '#swagger-ui',
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
                <title>金時光 API 文件</title>
            </Head>
            <div id="swagger-ui" />
        </>
    );
}
