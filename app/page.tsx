'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Public Blog Posts</h1>
        <button
          onClick={() => router.push('/admin')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Post (Admin)
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow p-4 mb-4 rounded hover:shadow-lg transition"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-lg font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm">{post.body.slice(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}
