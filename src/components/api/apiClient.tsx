import { createClient } from 'microcms-js-sdk';

export const apiClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_API_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!
});