import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import { TITLE } from '../constants/title';

export const metadata: Metadata = {
  title: {
    template: `%s | ${TITLE}`,
    default: 'Next Movies',
  },
  description: 'The best movies to watch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
