
import '../styles/globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Mini Blog',
  description: 'Blog Manager with Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
