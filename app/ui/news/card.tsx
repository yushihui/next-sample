import { LightNewsItem } from '@/app/lib/definitions';
import { notoSansSC } from '@/app/ui/fonts';
import Link from "next/link";
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
          <Link key={item.id} href={`/news/${item.id}`} className="block px-2 py-1 hover:bg-gray-100">
          <span className="news-title text-sm">{item.title}</span>
        </Link>
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/news/category/${category}`} className="block px-6 py-2 hover:bg-gray-100">
          <span className="text-sm text-black-500 hover:underline cursor-pointer" title="更多">...</span>
        </Link>
        
      </div>
      </div>
    );
  }