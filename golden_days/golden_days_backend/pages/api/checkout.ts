/**
 * @swagger
 * /api/checkout:
 *   post:
 *     summary: 產生綠界金流表單
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: 回傳 HTML 表單字串
 */

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = '<form>這裡是綠界表單</form>';
    res.status(200).json({ form });
}
