// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryclient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
