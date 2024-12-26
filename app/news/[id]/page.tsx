import { fetchfakeNewsById } from '@/app/lib/db';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const article = await fetchfakeNewsById(id);
    if (article == null) {
        notFound();
    }

    return (
        <main>
            <div className="rounded-xl p-3 mt-8">     
                <h1 className={`ml-2 text-lg text-center font-bold `}>{article.title}</h1>
                <div>
                    <span>关键字：</span>
                    <span>参考：</span>
                    <span>参考：</span>
                </div>
                <div className="mt-2 " >
                    <p>{article.content}</p>
                </div>
            </div>
        </main>
    );
}