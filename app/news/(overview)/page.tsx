import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchfakeLightNews } from '@/app/lib/db';
import NewsWrapper from '@/app/ui/news/newswrapper';
 
export default async function Page() {
  return (
    <main>    
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <Suspense>
          <NewsWrapper />
        </Suspense>
      </div>
    </main>
  );
}