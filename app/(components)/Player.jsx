import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function Player() {
  const [videoData, setVideoData] = useState({ link: '', title: '', description: '' });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch video data from the API when the component mounts
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    try {
      const res = await axios.get('https://asset-server.bdcare.vip/vedio');
      // Assuming the API response contains an array of videos and we're interested in the first one
      if (res.data.length > 0) {
        const { link, title, description } = res.data[0]; // Update this based on your actual data structure
        setVideoData({ link, title, description });
      }
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2">
      <div className="w-full max-w-6xl h-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 h-[60vh]">
          <ReactPlayer
            url={videoData.link}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={true}
          />
        </div>

        {/* <div className="p-4">
          <h2 className="text-2xl font-bold">{videoData.title}</h2>
          <p className="mt-2 text-gray-600">{videoData.description}</p>
        </div> */}
      </div>
    </div>
  );
}
