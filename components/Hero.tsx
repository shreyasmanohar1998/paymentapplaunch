'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import HeroImg from '@/public/assets/hero.png';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import { AuroraBackground } from './ui/aurora-background';

const Hero = () => {
	return (
		<AuroraBackground>
			<div className="z-10 max-md:px-4 pt-10 w-full flex flex-col items-center gap-10 md:gap-14 justify-start border-b border-neutral-200">
				<div className="space-y-7">
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						className="text-2xl md:text-4xl font-bold text-center text-neutral-900 mb-4"
					>
						The Key to Effortless Payments
					</motion.h1>
					<motion.h5
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						className="max-w-md text-center mx-auto text-sm"
					>
						Zero hassle, maximum ease. Experience hassle-free bill payments with
						Nexpe—where simplicity meets convenience.
					</motion.h5>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.9 }}
						className="flex items-center justify-center space-x-4 md:space-x-7"
					>
						<button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
							<div className="text-lg flex items-center gap-1 capitalize">
								<IoLogoGooglePlaystore className="text-base md:text-xl mr-2" />
								play store
							</div>
							<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
								<div className="relative h-full w-10 bg-white/20"></div>
							</div>
						</button>
						<button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
							<div className="text-lg flex items-center gap-1 capitalize">
								<FaApple className="text-base md:text-xl mr-2" />
								app store
							</div>
							<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
								<div className="relative h-full w-10 bg-white/20"></div>
							</div>
						</button>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.1 }}
				>
					<Image
						width={500}
						height={500}
						alt="hero-display"
						src={HeroImg}
						className="size-52 md:w-auto md:h-80"
					/>
				</motion.div>
			</div>
		</AuroraBackground>
	);
};

export default Hero;
