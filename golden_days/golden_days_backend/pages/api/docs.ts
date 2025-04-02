// 📁 pages/api/docs.ts
import { createSwaggerSpec } from 'next-swagger-doc';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const spec = createSwaggerSpec({
        apiFolder: 'pages/api', // 👈 會自動抓這裡的註解
        definition: {
            openapi: '3.0.0',
            info: {
                title: '金時光 API 文件',
                version: '1.0',
            },
        },
    });

    res.status(200).json(spec);
}
