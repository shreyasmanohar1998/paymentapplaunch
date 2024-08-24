'use client';

import Image from 'next/image';
import SeamlessImg from '@/public/assets/seamless.png';
import {
	TextRevealCard,
	TextRevealCardDescription,
	TextRevealCardTitle,
} from '@/components/ui/text-reveal-card';

export default function Seamless() {
	return (
		<div className="flex mt-40 mb-10 min-h-80">
			<div className="w-1/2 flex-1 ">
				<div className="h-full relative bg-gray-300">
					<Image
						src={SeamlessImg}
						alt="Seamless Digital Transactions"
						width={320}
						height={300}
						className="object-contain absolute left-1/2 transform -translate-x-1/2 bottom-0"
					/>
				</div>
			</div>

			{/* Right Side - Content */}
			{/* <div className="w-1/2 space-y-8 bg-black	p-10 text-white">
				<h2 className="text-3xl md:text-4xl font-bold">
					Seamless Digital Transactions
				</h2>
				<p className="max-w-screen-sm leading-8 tracking-wide">
					Our app's wallet feature offers convenience and security for all your
					payments. Manage your transactions effortlessly in one place.
				</p>

				<ul className="list-disc list-inside flex gap-10">
					<div className="space-y-3">
						<li>Instant Payments</li>
						<li>Track Expenses</li>
					</div>
					<div className="space-y-3">
						<li>Easy Top-Ups</li>
						<li>Secure</li>
					</div>
				</ul>
			</div> */}
		</div>
	);
}
