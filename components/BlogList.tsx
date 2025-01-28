import BlogCard from './BlogCard';
import Pagination from './Pagination';

async function fetchBlogs(page: number, limit: number = 10) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts?page=${page}&limit=${limit}`
  );
  const data = await res.json();
  return data.blogs;
}

export default async function BlogList() {
  const blogs = await fetchBlogs(1, 15);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination total={50} currentPage={1} />
    </div>
  );
}
