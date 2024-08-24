import Glance from '@/components/Glance';
import Hero from '@/components/Hero';
import HoldingHand from '@/components/HoldingHand';
import Marquee from '@/components/Marquee';
import Seamless from '@/components/Seamless';

export default function Home() {
	return (
		<main>
			<Hero />
			<Marquee />
			<Glance />
			<Seamless />
			<HoldingHand />
		</main>
	);
}
