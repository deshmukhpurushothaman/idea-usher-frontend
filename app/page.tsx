import BlogList from '@/components/BlogList';
import Header from '@/components/Header';

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <div>
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        <BlogList searchParams={searchParams} />
      </main>
    </div>
  );
}
