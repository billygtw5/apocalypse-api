export default async function handler(req, res) {
  const { chatId, type } = req.query;

  if (!chatId || !type) {
    return res.status(400).json({ error: "Parameter chatId dan type wajib" });
  }

  try {
    const response = await fetch(`https://cella-saja.mydigital-store.me/permen?chatId=${encodeURIComponent(chatId)}&type=${type}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal kirim bug", detail: err.toString() });
  }
}
