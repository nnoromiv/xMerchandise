/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};

export default nextConfig;