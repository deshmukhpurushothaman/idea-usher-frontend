import BlogCard from './BlogCard';
import Pagination from './Pagination';

export interface PostData {
  content_text: string;
  user_id: number;
  title: string;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
}

async function fetchBlogs(page: number, limit: number = 30) {
  const offset = (page - 1) * limit;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_POSTS_BASE_URL}?page=${page}&limit=${limit}&offset=${offset}`,
    { cache: 'no-store' } // Avoid caching for up-to-date results
  );
  const data = await res.json();
  return { blogs: data.blogs, total: data.total_blogs };
}

export default async function BlogList({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const { blogs, total } = await fetchBlogs(currentPage, 15);

  return (
    <div>
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: PostData) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination total={total} currentPage={currentPage} />
    </div>
  );
}
