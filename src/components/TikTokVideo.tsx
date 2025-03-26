
import React from 'react';
import { ExternalLink, Eye, Heart, MessageCircle, Bookmark, Clock } from 'lucide-react';

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
    <div className="glass-card p-5 transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnail or placeholder */}
        <div className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
          {video.thumbnail ? (
            <img 
              src={video.thumbnail} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Video info */}
        <div className="flex-1">
          {/* Caption and link */}
          <div className="mb-3">
            {video.caption && (
              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{video.caption}</p>
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
              <p className="text-xs text-gray-500 flex items-center">
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
              <Eye className="w-4 h-4 mr-1 text-gray-500" />
              <span className="text-sm font-medium">{video.views}</span>
            </div>
            
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1 text-tiktok-pink" />
              <span className="text-sm font-medium">{video.likes}</span>
            </div>
            
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1 text-tiktok-blue" />
              <span className="text-sm font-medium">{video.comments}</span>
            </div>
            
            <div className="flex items-center">
              <Bookmark className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm font-medium">{video.saves}</span>
            </div>
            
            <div className="flex items-center ml-auto">
              <Clock className="w-4 h-4 mr-1 text-gray-400" />
              <span className="text-xs text-gray-500">{video.uploadDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokVideo;
