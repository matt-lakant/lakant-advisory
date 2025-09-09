import fs from 'fs';
import path from 'path';

export interface Config {
  showArticles: boolean;
}

export function getConfig(): Config {
  try {
    const configPath = path.join(process.cwd(), 'config.ini');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Simple INI parser
    const lines = configContent.split('\n');
    const config: Config = { showArticles: false };
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('show_articles=')) {
        const value = trimmed.split('=')[1].trim().toUpperCase();
        config.showArticles = value === 'Y' || value === 'YES' || value === 'TRUE';
      }
    }
    
    return config;
  } catch (error) {
    console.error('Error loading config:', error);
    return { showArticles: false };
  }
}
