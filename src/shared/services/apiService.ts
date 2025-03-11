import { call as apiCall } from '@/shared/api/openFetchWrapper';

export async function fetchData() {
  try {
    const result = await apiCall('GET', '/endpoint', { param1: 'value' });
    return result;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
} 