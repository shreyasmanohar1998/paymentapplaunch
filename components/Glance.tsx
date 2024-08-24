'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
	mockup1,
	mockup2,
	mockup3,
	mockup4,
	mockup6,
} from '@/public/assets/features';

const content = [
	{
		text: 'Quick credit card payments at your fingertips.',
		image: mockup4,
	},
	{
		text: 'Instant recharges, always connected.',
		image: mockup2,
	},
	{
		text: 'Fastag recharges made easy.',
		image: mockup3,
	},
	{
		text: 'Instant Fastag recharge for smooth travel',
		image: mockup3,
	},
	{
		text: 'Gas bill payments made easy',
		image: mockup1,
	},
	{
		text: 'Secure with Bharat Bill Payments',
		image: mockup6,
	},
];

export default function Component() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const activeIndexProgress = useTransform(
		scrollYProgress,
		[0, 1],
		[0, content.length - 1]
	);

	// const activeIndex = useTransform(imageIndex, (latest) => Math.round(latest));

	useEffect(() => {
		const unsubscribe = activeIndexProgress.onChange((latest) => {
			setActiveIndex(Math.round(latest));
		});
		return unsubscribe;
	}, [activeIndexProgress]);

	const textVariants = {
		active: {
			opacity: 1,
			color: '#000000',
			transition: { duration: 0.5, ease: 'easeInOut' },
		},
		adjacent: {
			opacity: 0.5,
			color: '#CCCCCC',
			transition: { duration: 0.5, ease: 'easeInOut' },
		},
		hidden: {
			opacity: 0,
		},
	};

	return (
		<div className="min-h-screen bg-white" ref={containerRef}>
			<div className="sticky top-10 flex items-center justify-between h-screen">
				<div className="w-1/2 pl-12">
					{content.map((item, index) => (
						<motion.h2
							key={index}
							className="text-3xl font-bold mb-8"
							variants={textVariants}
							animate={
								Math.abs(activeIndex - index) < 0.5
									? 'active'
									: Math.abs(activeIndex - index) < 1.5
									? 'adjacent'
									: 'hidden'
							}
						>
							{item.text}
						</motion.h2>
					))}
				</div>
				<div className="w-1/2 h-full flex items-center justify-center">
					{content.map((item, index) => (
						<div
							key={index}
							style={{
								display: activeIndex === index ? 'block' : 'none',
								width: '100%',
								height: '100%',
								position: 'relative',
							}}
						>
							<Image
								src={item.image}
								alt={`Feature ${index + 1}`}
								layout="fill"
								objectFit="contain"
								className="p-5"
							/>
						</div>
					))}
				</div>
			</div>
			<div style={{ height: `${(content.length - 0.5) * 100}vh` }} />
		</div>
	);
}
