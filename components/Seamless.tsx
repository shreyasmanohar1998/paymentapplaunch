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

			<TextRevealCard
				text="Simplify Bills with NexPe"
				revealText="Trusted Secure Payments"
				className="rounded-none w-1/2 p-10"
			>
				<TextRevealCardTitle className="text-4xl font-semibold">
					Seamless Digital Transactions
				</TextRevealCardTitle>
				<TextRevealCardDescription>
					Our app's wallet feature offers convenience and security for all your
					payments. Manage your transactions effortlessly in one place.
				</TextRevealCardDescription>
			</TextRevealCard>
		</div>
	);
}
