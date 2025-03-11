import client from './index';

/**
 * Формирует URL с query-параметрами, если они заданы.
 * @param url - базовый URL запроса
 * @param params - объект параметров
 * @returns окончательный URL с query-параметрами
 */
function buildUrlWithQuery(url: string, params: Record<string, any>): string {
  if (params && Object.keys(params).length > 0) {
    const qs = new URLSearchParams(params).toString();
    return url + (url.includes('?') ? '&' : '?') + qs;
  }
  return url;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Обёртка для openapi-typescript-fetch.
 * Поведение аналогично axios‑обёртке:
 * - для GET-запросов параметры передаются в виде query-параметров,
 * - для остальных методов – в теле запроса.
 *
 * @param method - HTTP-метод ('GET', 'POST', 'PUT', 'DELETE' или 'PATCH')
 * @param url - URL эндпоинта (будет дополняться переменной VITE_SERVER_LINK)
 * @param params - параметры запроса
 * @param isFile - true, если отправляется файл (используется FormData)
 * @returns Объект { data, error }
 */
export async function call(
  method: HttpMethod,
  url: string,
  params: any = {},
  isFile: boolean = false
): Promise<{ data: any; error: string | null }> {
  // Получаем базовый URL из переменной окружения
  const serverLink = import.meta.env.VITE_SERVER_LINK || '';
  const fullUrl = serverLink + url;

  // Формирование заголовков запроса
  const headers: Record<string, string> = {
    'Content-Type': isFile ? 'multipart/form-data' : 'application/json',
  };

  let finalUrl = fullUrl;
  const options: RequestInit = {
    method,
    headers,
  };

  if (method === 'GET') {
    finalUrl = buildUrlWithQuery(fullUrl, params);
  } else if (method === 'DELETE' || method === 'PATCH') {
    // Для DELETE или PATCH отправляем данные в теле запроса
    options.body = isFile ? params : JSON.stringify(params);
  } else if (method === 'POST' || method === 'PUT') {
    options.body = isFile ? params : JSON.stringify(params);
  }

  try {
    const response = await client(finalUrl, options);
    return { data: response.data, error: null };
  } catch (error: any) {
    console.error('Ошибка запроса:', error);
    return { data: null, error: error?.message || 'Unknown error' };
  }
} 