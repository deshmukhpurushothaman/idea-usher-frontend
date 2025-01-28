'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition"
    >
      <Link href={`/blog/${blog.id}`}>
        <img
          src={blog.photo_url}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold text-white mb-2">{blog.title}</h2>
        <p className="text-gray-300 mb-2">{blog.description}</p>
        <span className="text-sm text-gray-500">Category: {blog.category}</span>
      </Link>
    </motion.div>
  );
}
