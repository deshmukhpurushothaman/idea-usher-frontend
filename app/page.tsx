import BlogList from '@/components/BlogList';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <BlogList />
      </main>
    </div>
  );
}
