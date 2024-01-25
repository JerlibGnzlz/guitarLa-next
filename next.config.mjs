/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'res.cloudinary.com',
                port: ''
            }

        ]

    }
};

export default nextConfig;
