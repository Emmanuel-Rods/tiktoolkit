
import React from 'react';
import { Users, Heart, User } from 'lucide-react';

interface ProfileProps {
  userInfo: {
    username: string;
    subtitle: string;
  };
  stats: {
    following: string;
    followers: string;
    likes: string;
  };
}

const TikTokProfile: React.FC<ProfileProps> = ({ userInfo, stats }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 animate-scale-in">
      <div className="glass-card overflow-hidden">
        <div className="bg-gradient-to-r from-tiktok-blue to-tiktok-pink h-16"></div>
        <div className="px-6 pb-6 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-md">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="mt-14 text-center">
            <h2 className="text-xl font-bold">@{userInfo.username}</h2>
            <p className="text-sm text-gray-500 mt-1">{userInfo.subtitle}</p>
            
            <div className="flex justify-center mt-5 space-x-6">
              <div className="text-center">
                <p className="stat-value">{stats.following}</p>
                <p className="stat-label flex items-center justify-center gap-1">
                  <Users className="w-3 h-3" /> Following
                </p>
              </div>
              
              <div className="text-center">
                <p className="stat-value">{stats.followers}</p>
                <p className="stat-label flex items-center justify-center gap-1">
                  <Users className="w-3 h-3" /> Followers
                </p>
              </div>
              
              <div className="text-center">
                <p className="stat-value">{stats.likes}</p>
                <p className="stat-label flex items-center justify-center gap-1">
                  <Heart className="w-3 h-3" /> Likes
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center space-x-2">
              <span className="profile-chip bg-tiktok-blue/10 text-tiktok-blue">TikTok Creator</span>
              <span className="profile-chip tiktok-gradient text-white">{stats.followers} Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokProfile;
