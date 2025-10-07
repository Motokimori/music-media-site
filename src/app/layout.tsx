import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './custom.scss';
import Header from '@/components/Header';
import { Container } from 'react-bootstrap';

export const metadata: Metadata = {
  title: 'Music Media — Discover Albums & Artists',
  description:
    'Explore featured albums, discover new artists, and stay up to date with the latest in music culture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-body-tertiary text-light d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 py-4">{children}</main>
        <footer className="mt-auto py-4 border-top border-secondary-subtle bg-dark text-secondary">
          <Container className="d-flex flex-column flex-md-row justify-content-between gap-3">
            <div>
              <strong>Music Media</strong>
              <p className="mb-0 small">
                Curating the freshest sounds, interviews, and reviews for fans around the globe.
              </p>
            </div>
            <div className="text-md-end">
              <p className="mb-1 small">Made with ♫ for music lovers.</p>
              <p className="mb-0 small">© {currentYear} Music Media. All rights reserved.</p>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
