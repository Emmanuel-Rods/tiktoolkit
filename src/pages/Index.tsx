
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TikTokProfile from '../components/TikTokProfile';
import TikTokVideo from '../components/TikTokVideo';
import Loader from '../components/Loader';
import { ThemeToggle } from '../components/ThemeToggle';

// Sample data
const sampleData = {
  userInfo: {
    username: "adilet.sw",
    subtitle: "Adilet"
  },
  stats: {
    following: "63",
    followers: "3354",
    likes: "283.9K"
  },
  results: [
    {
      link: "https://www.tiktok.com/@adilet.sw/video/7482813697723845893",
      views: "1.2M",
      likes: "103.2K",
      comments: "1712",
      saves: "7240",
      uploadDate: "1w ago",
      caption: "This is a sample caption for the first video. #tiktok #viral",
      music: "Original Sound - Adilet"
    },
    {
      link: "https://www.tiktok.com/@adilet.sw/video/7482815762252451127",
      views: "31.7K",
      likes: "1439",
      comments: "70",
      saves: "499",
      uploadDate: "1w ago",
      caption: "Another sample caption for the second video. #trending",
      music: "Song - Artist"
    },
    {
      link: "https://www.tiktok.com/@adilet.sw/video/7481004022838289707",
      views: "156.4K",
      likes: "8201",
      comments: "203",
      saves: "1024",
      uploadDate: "2w ago",
      caption: "Third sample caption showing what this might look like.",
      music: "Popular Song - Famous Artist"
    }
  ]
};

const Index = () => {
  const [data, setData] = useState<typeof sampleData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (username: string) => {
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      try {
        // In a real implementation, you would fetch data from your API here
        // For demo purposes, we're using the sample data
        setData(sampleData);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10 relative">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          
          <div className="mb-3 flex justify-center">
            <div className="h-12 w-12 rounded-xl tiktok-gradient flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <path d="M9 18V5l12-2v13"></path>
                <path d="M9 9l12-2"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-gray-800 dark:text-white">
            TikToolkit
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Enter a TikTok username to fetch profile data and video metrics
          </p>
        </header>

        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {loading && <Loader />}

        {error && (
          <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl text-red-500 dark:text-red-400 text-center animate-fade-in">
            {error}
          </div>
        )}

        {data && !loading && (
          <div className="mt-10 space-y-6">
            <TikTokProfile userInfo={data.userInfo} stats={data.stats} />

            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                <span className="mr-2">Recent Videos</span>
                <span className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                  {data.results.length} videos
                </span>
              </h2>
              
              <div className="space-y-4">
                {data.results.map((video, index) => (
                  <TikTokVideo key={index} video={video} />
                ))}
              </div>
            </div>
          </div>
        )}

        <footer className="mt-16 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>TikToolkit — Analyze TikTok content efficiently</p>
          <p className="mt-1">Data shown is for demonstration purposes only</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
