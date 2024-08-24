/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{

        unoptimized:true,
        remotePatterns:[
{
    
    protocol:"https",
    hostname:"i.ibb.co",
}
        ]
   
    },
    output:"export",
};

export default nextConfig;
