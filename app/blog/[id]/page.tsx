import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`
  );
  const blog = await res.json();

  return {
    title: blog.blog.title,
    description: blog.blog.description,
  };
}

async function fetchBlogData(id: string) {
  const blogRes = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  const blog = await blogRes.json();
  return { blog: blog.blog };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { blog } = await fetchBlogData(params.id);

  return (
    <div className="container mx-auto my-8">
      <img
        src={blog.photo_url}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm mb-4">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>
        <div className="py-2 px-4 text-lg bg-green-700 rounded-3xl">
          {blog.category}
        </div>
      </div>
      <div className="text-2xl font-bold mb-4">Description</div>
      <div className="mb-8">{blog.description}</div>

      <div className="text-2xl font-bold mb-4">Content</div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.content_html }}
      />
    </div>
  );
}
