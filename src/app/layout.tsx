"use client";

import {
  ChakraProvider
} from '@chakra-ui/react';
import { Inter } from '@next/font/google'
import '../styles/globals.css';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.variable}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
