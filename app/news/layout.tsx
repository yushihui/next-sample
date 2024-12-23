import Navbar from '@/app/ui/news/nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}