'use client';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apollo';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
