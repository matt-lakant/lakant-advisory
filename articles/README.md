# Articles

This folder contains your blog articles in JSON format. Each article is a separate JSON file.

## Adding a New Article

1. Create a new JSON file with the naming convention: `YYYY-MM-DD-article-title.json`
2. Use the following structure:

```json
{
  "date": "2024-12-15",
  "title": "Your Article Title",
  "subtitle": "A brief description of what the article covers.",
  "linkedinUrl": "https://linkedin.com/posts/your-post-url",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

## File Naming Convention

- Format: `YYYY-MM-DD-article-title.json`
- Example: `2024-12-15-ai-strategy-asset-managers.json`
- The date in the filename should match the date in the JSON content

## Required Fields

- `date`: Publication date in YYYY-MM-DD format
- `title`: Article title
- `subtitle`: Brief description/subtitle
- `tags`: Array of relevant tags

## Optional Fields

- `linkedinUrl`: Link to the LinkedIn post (if published)

## How It Works

- Articles are automatically loaded and sorted by date (most recent first)
- Only the latest 3 articles are displayed on the homepage
- The Articles section only appears when there are articles to show
- The Articles navigation link only appears when articles exist

## Example Article

See `2024-12-15-ai-strategy-asset-managers.json` for a complete example.

## Publishing Workflow

1. Write your article content
2. Create the JSON file in this folder
3. Test locally with `npm run dev`
4. Commit and push to GitHub
5. The article will automatically appear on your website
