import type { VercelRequest, VercelResponse } from '@vercel/node'
import _advices from './_advices'

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const randomAdvice: object =
    _advices[Math.floor(Math.random() * _advices.length)]

  res.status(200).json({
    ...randomAdvice,
  })
}
