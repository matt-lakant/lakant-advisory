import { Article } from '@/lib/articles';

interface ArticlesClientProps {
  articles: Article[];
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  if (articles.length === 0) {
    return null;
  }

  // Show only the most recent 3 articles (or fewer if there are less than 3)
  const displayArticles = articles.slice(0, 3);

  return (
    <section id="articles" className="bg-neutral-50/40">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Articles</h2>
        
        {/* Articles Container - Same grid layout as Approach section */}
        <div className="grid md:grid-cols-3 gap-5">
          {displayArticles.map((article) => (
            <div key={article.title} className="rounded-3xl border p-6">
              <div className="text-xs text-neutral-500 mb-2">
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-neutral-700">{article.subtitle}</p>
              {article.linkedinUrl && (
                <a 
                  href={article.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-bold text-black hover:text-neutral-800"
                >
                  Read on LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

