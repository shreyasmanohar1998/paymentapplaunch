import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { categories } from '@/public/assets/marqueeImages';

const Marquee = () => {
	return (
		<div className="z-20 rounded-md flex flex-col py-5 antialiased bg-white w-full items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				items={categories as any}
				direction="right"
				speed="slow"
				pauseOnHover={false}
			/>
		</div>
	);
};

export default Marquee;
