// Example webhook receiver (Node / Vercel)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const event = req.body;
  console.log('Received webhook:', event);
  // In live mode: verify provider signatures (Stripe/PayFast/Coinbase) and then mark order paid.
  return res.status(200).json({ ok: true });
}
