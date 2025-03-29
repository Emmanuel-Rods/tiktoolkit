
import React from 'react';
import { ExternalLink, Eye, Heart, MessageCircle, Bookmark, Clock, Video } from 'lucide-react';

interface VideoProps {
  video: {
    link: string;
    views: string;
    likes: string;
    comments: string;
    saves: string;
    uploadDate: string;
    thumbnail?: string;
    caption?: string;
    music?: string;
  };
}

const TikTokVideo: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="glass-card p-5 transition-all duration-300 hover:shadow-xl animate-fade-in dark:bg-gray-800/70 dark:backdrop-blur-lg dark:border-gray-700/30">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnail or placeholder */}
        <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
          {video.thumbnail ? (
            <img 
              src={video.thumbnail} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
              <Video className="w-12 h-12 text-gray-300 dark:text-gray-500" />
            </div>
          )}
        </div>
        
        {/* Video info */}
        <div className="flex-1">
          {/* Caption and link */}
          <div className="mb-3">
            {video.caption && (
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-2 line-clamp-2">{video.caption}</p>
            )}
            <a 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-tiktok-blue hover:underline"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              {video.link.substring(0, 40)}...
            </a>
          </div>
          
          {/* Music info */}
          {video.music && (
            <div className="mb-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                {video.music}
              </p>
            </div>
          )}
          
          {/* Stats */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium dark:text-white">{video.views}</span>
            </div>
            
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1 text-tiktok-pink" />
              <span className="text-sm font-medium dark:text-white">{video.likes}</span>
            </div>
            
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1 text-tiktok-blue" />
              <span className="text-sm font-medium dark:text-white">{video.comments}</span>
            </div>
            
            <div className="flex items-center">
              <Bookmark className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm font-medium dark:text-white">{video.saves}</span>
            </div>
            
            <div className="flex items-center ml-auto">
              <Clock className="w-4 h-4 mr-1 text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{video.uploadDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokVideo;
