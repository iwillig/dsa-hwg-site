import type { RequestInit } from 'node-fetch';
import AbortController from 'abort-controller';

// https://dmitripavlutin.com/timeout-fetch-request/#2-timeout-a-fetch-request

export const fetchWithTimeout = async (
  resource: string,
  options: RequestInit & { timeout: number; }
) => {
  const { timeout } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);

  return response;
};
