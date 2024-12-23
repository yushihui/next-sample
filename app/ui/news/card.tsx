import { LightNewsItem } from '@/app/lib/definitions';
import { notoSansSC } from '@/app/ui/fonts';
export function NewsCard({
    category,
    news,
  }: {
    category: string;
    news:LightNewsItem[]
  }) {

    return (
      <div className="rounded-xl p-3 shadow-sm">    
        <h4 className={`ml-2 text-lg bg-gray-50 font-medium ${notoSansSC.className}`}>{category}</h4> 
        <div className="mt-2">
        {news.map((item) => (
          <div key={item.id} className="news-item p-1 hover:cursor-pointer">
            <span className="news-title text-sm">{item.title}</span>
          </div>
        ))}
      </div>
      </div>
    );
  }