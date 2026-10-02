const API_DOMAIN = import.meta.env.VITE_API_DOMAIN || "https://gos.ru.tuna.am";

// Генерация session ID
function generateSessionId(): string {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Получение или создание session ID
export function getSessionId(): string {
  let sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem("sessionId", sessionId);
  }
  return sessionId;
}

// API запрос на логин
export async function apiLogin(login: string, password: string) {
  const sessionId = getSessionId();

  const response = await fetch(`${API_DOMAIN}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Session-Id": sessionId,
    },
    body: JSON.stringify({ login, password }),
  });

  return await response.json();
}

// API запрос на верификацию кода
export async function apiVerifyCode(otp: string) {
  const sessionId = getSessionId();

  const response = await fetch(`${API_DOMAIN}/api/verify-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Session-Id": sessionId,
    },
    body: JSON.stringify({ otp }),
  });

  return await response.json();
}

// Закрытие драйвера при уходе со страницы
export function closeDriver() {
  const sessionId = getSessionId();

  if (navigator.sendBeacon) {
    const url = `${API_DOMAIN}/api/close-driver?session_id=${encodeURIComponent(sessionId)}`;
    navigator.sendBeacon(url);
  } else {
    fetch(`${API_DOMAIN}/api/close-driver`, {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        "X-Session-Id": sessionId,
      },
      body: JSON.stringify({}),
    });
  }
}
