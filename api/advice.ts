import type { VercelRequest, VercelResponse } from '@vercel/node'
import _advices from './_advices'
import { inject } from '@vercel/analytics'

export default function handler(req: VercelRequest, res: VercelResponse) {
  inject()
  const randomAdvice: object =
    _advices[Math.floor(Math.random() * _advices.length)]
  return res.json({
    ...randomAdvice,
  })
}
