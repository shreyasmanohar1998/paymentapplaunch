import React from 'react';
import { Button } from './ui/button';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import holdingHandImg from '@/public/assets/holding-phone.png';
import Image from 'next/image';
import { Cover } from '@/components/ui/cover';

const HoldingHand = () => {
	return (
		<div className="pt-6">
			<div className="flex justify-between max-w-screen-lg mx-auto ">
				<div className="flex flex-col justify-start gap-7 items-center">
					<h2 className="font-semibold text-4xl text-center leading-[50px]">
						Make secure payments <br /> at <Cover>lightning speed</Cover>
					</h2>
					<p className="text-center font-medium max-w-lg">
						Discover the sleek and user-friendly app, designed to make managing
						your payments effortless.
					</p>
					<Button size={'lg'} className="text-3xl p-10 rounded-3xl">
						<IoLogoGooglePlaystore className="mr-4" />
						<div className="flex flex-col items-start capitalize">
							<span className="text-base">download on</span>
							Play Store
						</div>
					</Button>
					<Button size={'lg'} className="text-3xl p-10 rounded-3xl">
						<FaApple className="mr-4" />
						<div className="flex flex-col items-start capitalize">
							<span className="text-base">download on</span>
							App Store
						</div>
					</Button>
				</div>
				<Image
					src={holdingHandImg}
					alt="holding-hand"
					width={400}
					height={400}
					// className="size-52 md:size-0"
				/>
			</div>
		</div>
	);
};

export default HoldingHand;
