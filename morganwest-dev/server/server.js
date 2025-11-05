const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const apiKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

console.log('Server starting...');
console.log('Database ID:', databaseId ? 'Found' : 'Missing');
console.log('API Key:', apiKey ? 'Found' : 'Missing');

app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching from Notion database...');
    
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Notion API error:', errorData);
      throw new Error(`Notion API error: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('Success! Found', data.results?.length || 0, 'results');
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: error.message,
      details: error.toString()
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});