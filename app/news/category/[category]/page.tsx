import { fetchfakeLightNewsByCategory } from '@/app/lib/db';
import { notFound } from 'next/navigation';
import { notoSansSC } from '@/app/ui/fonts';

export default async function Page(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const category = decodeURIComponent(params.category);
    const newsItems = await fetchfakeLightNewsByCategory(category);
    if (newsItems == null) {
        notFound();
    }

    return (
        <main>
            <div className="rounded-xl p-3 shadow-sm mt-8">     
                <h4 className={`ml-2 text-lg bg-gray-50 font-medium text-center ${notoSansSC.className}`}>{category}</h4>
                <div className="mt-2 text-center" >
                    {newsItems.map((item) => (
                        <div key={item.id} className="news-item p-1 hover:cursor-pointer">
                            <span className="news-title text-sm">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}