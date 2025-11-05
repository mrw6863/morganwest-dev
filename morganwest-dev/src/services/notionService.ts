import { Client } from '@notionhq/client';

// const notion = new Client({
//   auth: process.env.REACT_APP_NOTION_API_KEY,
// });

// const databaseId = process.env.REACT_APP_NOTION_DATABASE_ID || '';

export interface NotionPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  content?: string;
}

export const fetchNotionPosts = async (): Promise<NotionPost[]> => {
  try {
    console.log('Fetching posts from server...');
    const response = await fetch('http://localhost:3001/api/posts');
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Server response:', data);
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    if (!data.results || !Array.isArray(data.results)) {
      console.error('Invalid response structure:', data);
      throw new Error('No results found in response');
    }
    
    console.log('Number of results:', data.results.length);

    return data.results.map((page: any) => {
      console.log('Processing page:', page.id);
      const properties = page.properties;
      
      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
        description: properties.Description?.rich_text?.[0]?.plain_text || '',
        image: properties.Image?.url || '',
        date: properties.Date?.date?.start || new Date().toISOString(),
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        content: properties.Content?.rich_text?.[0]?.plain_text || '',
      };
    });
  } catch (error) {
    console.error('Error fetching Notion posts:', error);
    return [];
  }
};