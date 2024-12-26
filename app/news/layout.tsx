import Navbar from '@/app/ui/news/nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto flex-grow p-6 md:p-12">{children}</div>
    </div>
  );
}