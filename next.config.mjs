/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			// {
			// 	protocol: 'https',
			// 	hostname: 'via.placeholder.com',
			// },
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	output: 'export',
};

export default nextConfig;
