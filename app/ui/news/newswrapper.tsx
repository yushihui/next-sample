import { fetchfakeLightNews } from '@/app/lib/db';
import { NewsCard } from './card';
  
  
  export default async function NewsWrapper() {
    const newsItems = await fetchfakeLightNews();
    return (
      <>
        <NewsCard category="风声雨声, 家国大事" news={newsItems} />
        <NewsCard category="专家教授, 药婆码农" news={newsItems} />
        <NewsCard category="茶余饭后, 清谈误国" news={newsItems} />
        <NewsCard category="茶余饭后, 清谈误国" news={newsItems} />
      </>
    );
  }
