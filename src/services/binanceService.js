import axios from 'axios';

const API_URL = 'https://api.binance.com/api/v3';

export async function getOrderBook(pair) {
  try {
    const response = await axios.get(`${API_URL}/depth`, {
      params: {
        symbol: pair,
        limit: 100, // Максимальное количество элементов в стакане
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch order book:', error);
    return null;
  }
}

// Функция для подписки на обновления стакана по WebSocket
// Необходимо реализовать согласно документации Binance
export async function subscribeToOrderBook(pair, onMsgCallback) {
  const wsUrl = `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@depth`;
  const ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('WebSocket connection established');
  };

  ws.onmessage = onMsgCallback;

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };

  return ws;
}
