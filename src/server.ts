
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sample data for demonstration
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
      caption: "When you're a designer but also a developer #frontenddeveloper #webdeveloper #webdesign",
      music: "original sound - adilet.sw"
    },
    {
      link: "https://www.tiktok.com/@adilet.sw/video/7482815762252451127",
      views: "31.7K",
      likes: "1439",
      comments: "70",
      saves: "499",
      uploadDate: "1w ago",
      caption: "AI tools for developers in 2024 #ai #developer #coding",
      music: "original sound - adilet.sw"
    }
  ]
};

// Home route
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'TikToolkit - TikTok Profile Analyzer',
    data: null,
    error: null,
    isLoading: false
  });
});

// Search route
app.post('/search', (req, res) => {
  const { username } = req.body;
  
  // Simulate an API call with a timeout
  setTimeout(() => {
    if (!username) {
      return res.render('index', { 
        title: 'TikToolkit - TikTok Profile Analyzer',
        data: null, 
        error: 'Username is required',
        isLoading: false
      });
    }
    
    // For demo purposes, we're just returning the sample data
    // In a real app, you would make an API call to get the data
    res.render('index', { 
      title: 'TikToolkit - TikTok Profile Analyzer',
      data: sampleData, 
      error: null,
      isLoading: false
    });
  }, 1500);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
