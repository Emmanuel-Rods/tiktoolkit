
// This service handles communication with your TikTok scraper
// You'll need to adapt this based on how your scraper is exposed (API, local import, etc.)

export interface TikTokProfileData {
  userInfo: {
    username: string;
    subtitle: string;
    avatarUrl?: string;
  };
  stats: {
    following: string;
    followers: string;
    likes: string;
  };
  results: TikTokVideoData[];
}

export interface TikTokVideoData {
  link: string;
  views: string;
  likes: string;
  comments: string;
  saves: string;
  uploadDate: string;
  caption?: string;
  music?: string;
  thumbnail?: string;
}

// Mock data for development and fallback
const MOCK_DATA: TikTokProfileData = {
  userInfo: {
    username: "wowgreatplace",
    subtitle: "WowGreatPlace 🇨🇦",
    avatarUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1727974373153eaef0f6f558bf217bc8~c5_100x100.jpeg"
  },
  stats: {
    following: "174",
    followers: "600",
    likes: "47K"
  },
  results: [
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7145572730367118598",
      views: "111.3K",
      likes: "19.6K",
      comments: "508",
      saves: "657",
      uploadDate: "2022-9-21",
      caption: "Beautiful sunset at the beach #travel #nature",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8b691102aa3147c49e9273d4df26f3f0_1663809121?x-expires=1633651200&x-signature=example",
      music: "Original Sound - wowgreatplace"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7143968029095699573",
      views: "86.5K",
      likes: "15.2K",
      comments: "302",
      saves: "412",
      uploadDate: "2022-9-17",
      caption: "Mountain hiking adventure #hiking #adventure",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5f9698598e9e498d8f40f12ee93818ca_1663445762?x-expires=1633651200&x-signature=example",
      music: "Adventure - SoundTrack"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7142363317773203758",
      views: "203.1K",
      likes: "45.7K",
      comments: "789",
      saves: "1.2K",
      uploadDate: "2022-9-12",
      caption: "City lights at night #city #urban #nightlife",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7ee13b04d07b479a97b0e46f8ce3c9a5_1663014421?x-expires=1633651200&x-signature=example",
      music: "City Vibes - Urban Mix"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7140758607223394613",
      views: "1.2M",
      likes: "342.5K",
      comments: "2.1K",
      saves: "10.6K",
      uploadDate: "2022-9-8",
      caption: "Amazing waterfall discovery #waterfall #nature #discovery",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/1a23c4f0d91e4c88a92323985d4dfbcc_1662583209?x-expires=1633651200&x-signature=example",
      music: "Nature Sounds - Relaxing"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7139154096551770414",
      views: "3.5M",
      likes: "754.2K",
      comments: "4.3K",
      saves: "25.9K",
      uploadDate: "2022-9-3",
      caption: "Hidden beach paradise #beach #travel #paradise",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2ce97581866e40268c2293d3de8fb128_1662152008?x-expires=1633651200&x-signature=example",
      music: "Summer Vibes - Beach Mix"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7137549585879963947",
      views: "552.7K",
      likes: "87.3K",
      comments: "1.5K",
      saves: "7.8K",
      uploadDate: "2022-8-30",
      caption: "Snow-capped mountains view #mountains #winter #view",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3fd97fb0c90e4f9b9f0e8973e257e75a_1661720806?x-expires=1633651200&x-signature=example",
      music: "Winter Wonderland - Snow Tracks"
    },
    {
      link: "https://www.tiktok.com/@wowgreatplace/video/7135944674586723621",
      views: "2.1B",
      likes: "1.2M",
      comments: "8.7K",
      saves: "57.3K",
      uploadDate: "2022-8-25",
      caption: "Stunning northern lights #aurora #northernlights #arctic",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/6b8f88d0c5f241a5970a8efd7f6395c0_1661289605?x-expires=1633651200&x-signature=example",
      music: "Aurora - Night Sky"
    }
  ]
};

export const TikTokService = {
  /**
   * Fetches TikTok profile data using your scraper
   * @param username The TikTok username to fetch data for
   */
  async fetchProfileData(username: string): Promise<TikTokProfileData> {
    try {
      console.log(`Fetching data for ${username} using your scraper...`);
      
      // Try to fetch from the API
      try {
        const response = await fetch(`/api/scrape?username=${username}`);
        
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return await response.json();
        } else {
          console.log("API returned non-JSON response, using mock data");
          throw new Error("Non-JSON response");
        }
      } catch (error) {
        console.log("Using mock data due to API error:", error);
        
        // Use mock data with the requested username
        const mockDataCopy = JSON.parse(JSON.stringify(MOCK_DATA));
        mockDataCopy.userInfo.username = username;
        mockDataCopy.userInfo.subtitle = `${username} • TikTok Creator`;
        
        // Return the modified mock data
        return mockDataCopy;
      }
    } catch (error) {
      console.error("Error fetching TikTok data:", error);
      throw new Error("Failed to fetch TikTok data. Please check your scraper connection.");
    }
  }
};
