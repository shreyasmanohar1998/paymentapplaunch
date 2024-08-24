import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import whiteBrandLog from '@/public/assets/white-logo.png';

const Header = () => {
	const navLinks = [
		{ title: 'bill payments', path: '/' },
		{ title: 'offers', path: '/about' },
		{ title: 'recharge', path: '/services' },
		{ title: 'credit card', path: '/contact' },
	];

	return (
		<header className="px-4 md:px-12 py-3 md:py-5 sticky top-0 z-50 text-white bg-black opacity-90">
			<div className="flex items-center justify-between">
				<Image
					src={whiteBrandLog}
					alt="Logo"
					width={100}
					height={100}
					className="w-20 h-8 md:w-28 md:h-10 object-contain"
				/>
				<div className=" items-center space-x-8 hidden md:flex">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className="tracking-wide capitalize font-semibold  antialiased"
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
