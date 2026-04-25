import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fetch GitHub repositories
app.get('/api/projects', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users/siddhantkumar101/repos?sort=updated&per_page=10');
    
    // Format the data to include only what we need
    const projects = response.data.map(repo => ({
      id: repo.id,
      title: repo.name,
      desc: repo.description || 'No description provided.',
      tech: repo.language ? [repo.language] : ['Various'], // Use language as tech stack for now
      github: repo.html_url,
      live: repo.homepage || repo.html_url, // Use homepage if available, else fallback to github link
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated_at: repo.updated_at
    }));

    // Filter out forks if desired, or sort them
    // Here we'll just return the recent 10 updated repos
    res.json(projects);
  } catch (error) {
    console.error('Error fetching from GitHub:', error.message);
    res.status(500).json({ error: 'Failed to fetch projects from GitHub' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
