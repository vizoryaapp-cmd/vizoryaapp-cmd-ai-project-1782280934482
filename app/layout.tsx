import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Modern Restoran Menüsü',
  description: 'Altın sarısı ve gri tonlarında modern ve şık bir restoran menüsü sitesi',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}