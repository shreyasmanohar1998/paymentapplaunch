import type { Metadata, Viewport } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Analytics } from "@vercel/analytics/react"

const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lexendDeca.className}>
				<Header />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
