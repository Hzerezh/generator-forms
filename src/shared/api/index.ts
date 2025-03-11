import createClient from 'openapi-typescript-fetch';

const client = createClient<any>();

// Задайте базовый URL для всех запросов
client.fetchOpts.baseUrl = 'https://api.example.com'; // Замените на нужный URL

export default client;
