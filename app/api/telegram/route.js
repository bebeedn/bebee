// API route для отправки сообщений в Telegram бот
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;

    // Токен и Chat ID для Telegram бота (из переменных окружения или хардкод)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8759484422:AAF7O9Olhqz7sORWbD-EZNJ5EhNl_YVhCjI';
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '385279086';

// Выбор бота в зависимости от источника
let TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID;

switch (source) {
  case 'Садочок':
    TELEGRAM_BOT_TOKEN = '8759484422:AAF7O9Olhqz7sORWbD-EZNJ5EhNl_YVhCjI';
    TELEGRAM_CHAT_ID = '385279086';
    break;
  case 'Школа':
    TELEGRAM_BOT_TOKEN = '8694250798:AAFwEz4DNhnSi1GZUZggKyQtWcbh0xW82eA';
    TELEGRAM_CHAT_ID = '320867328';
    break;
  case 'Додаткові заняття':
    TELEGRAM_BOT_TOKEN = 'ВАШ_ТОКЕН_ДЛЯ_ДОП_ЗАНЯТИЙ';
    TELEGRAM_CHAT_ID = 'ВАШ_CHAT_ID_ДЛЯ_ДОПОВНЕНЬ';
    break;
  default:
    TELEGRAM_BOT_TOKEN = '8759484422:AAF7O9Olhqz7sORWbD-EZNJ5EhNl_YVhCjI';
    TELEGRAM_CHAT_ID = '385279086';
}


    
    // Формируем текст сообщения
    const telegramMessage = `
🔔 <b>Нова заявка з сайту BeBee</b>

📍 <b>Джерело:</b> ${source || 'Не вказано'}

👤 <b>Ім'я:</b> ${name}
📞 <b>Телефон:</b> ${phone}
${email ? `📧 <b>Email:</b> ${email}` : ''}
${message ? `\n💬 <b>Повідомлення:</b>\n${message}` : ''}
    `.trim();

    // Отправляем сообщение в Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', data);
      return Response.json(
        { success: false, error: 'Помилка відправки в Telegram' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json(
      { success: false, error: 'Помилка сервера' },
      { status: 500 }
    );
  }
}
