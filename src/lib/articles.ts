import fs from 'fs';
import path from 'path';

export interface Article {
  date: string;
  title: string;
  subtitle: string;
  linkedinUrl?: string;
  tags: string[];
}

export function getArticles(): Article[] {
  try {
    const articlesDir = path.join(process.cwd(), 'articles');
    
    // Check if articles directory exists
    if (!fs.existsSync(articlesDir)) {
      return [];
    }

    const files = fs.readdirSync(articlesDir);
    const articles: Article[] = [];

    files.forEach(file => {
      if (file.endsWith('.json')) {
        try {
          const filePath = path.join(articlesDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const article = JSON.parse(fileContent) as Article;
          articles.push(article);
        } catch (error) {
          console.error(`Error reading article file ${file}:`, error);
        }
      }
    });

    // Sort articles by date (most recent first)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}

export function getLatestArticles(count: number = 10): Article[] {
  return getArticles().slice(0, count);
}
