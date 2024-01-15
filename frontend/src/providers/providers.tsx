'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export function Providers({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'light']}
        >
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
