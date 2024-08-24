'use client';
import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import brandLogo from '@/public/assets/white-logo.png';

export default function Footer() {
	const [hoveredLink, setHoveredLink] = useState<number | null>(null);

	const links = [
		'Privacy Policy',
		'Terms & Conditions',
		'Cancellation & Refund Policy',
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const linkVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	};

	const hoverVariants = {
		hover: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 10,
			},
		},
	};

	return (
		<div className="h-[15rem] w-full  bg-neutral-900 relative flex  items-center justify-center antialiased">
			<div className="container mx-auto px-4 z-10">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center">
					<div className="mb-6 md:mb-0">
						<Image src={brandLogo} alt="Nexpe Logo" width={150} height={40} />
					</div>
					<nav className="flex-1">
						<ul className="space-y-2 md:space-y-0 md:space-x-8 text-center md:flex md:justify-center">
							{links.map((link, index) => (
								<motion.li key={index} variants={linkVariants}>
									<motion.a
										href="#"
										className="relative text-sm md:text-base transition-colors duration-200 block"
										onHoverStart={() => setHoveredLink(index)}
										onHoverEnd={() => setHoveredLink(null)}
										variants={hoverVariants}
										whileHover="hover"
									>
										<AnimatePresence>
											{link.split('').map((char, charIndex) => (
												<motion.span
													key={charIndex}
													initial={{ display: 'inline-block' }}
													animate={{
														display: 'inline-block',
														color:
															hoveredLink === index ? '#2DD4BF' : '#FFFFFF',
														scale: hoveredLink === index ? 1.1 : 1,
														y: hoveredLink === index ? -2 : 0,
													}}
													transition={{
														type: 'spring',
														stiffness: 500,
														damping: 10,
														delay: charIndex * 0.03,
													}}
												>
													{char}
												</motion.span>
											))}
										</AnimatePresence>
										{hoveredLink === index && (
											<motion.span
												className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2DD4BF]"
												layoutId="underline"
												initial={{ width: '0%' }}
												animate={{ width: '100%' }}
												transition={{ duration: 0.3 }}
											/>
										)}
									</motion.a>
								</motion.li>
							))}
						</ul>
					</nav>
					<div className="mt-8 md:mt-0 md:ml-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Contact Us
						</h3>
						<motion.a
							href="mailto:support@gonexpe.com"
							className="flex items-center text-white 
								hover:text-[#2DD4BF]
							transition-colors duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Mail className="mr-2 h-5 w-5" />
							<motion.span
								initial={{ backgroundPosition: '0% 100%' }}
								whileHover={{ backgroundPosition: '100% 100%' }}
								transition={{ duration: 0.3 }}
							>
								support@gonexpe.com
							</motion.span>
						</motion.a>
					</div>
				</div>
				<motion.div
					className="text-center text-sm text-gray-400 mt-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}
				>
					© {new Date().getFullYear()} gonexpe. All rights reserved.
				</motion.div>
			</div>

			<BackgroundBeams />
		</div>
	);
}
