'use client';

import { useEffect, useState } from 'react';

const API = 'https://mini-blog-backend-3g6e.onrender.com/admin/posts';
const adminId = 'admin123'; // Simulated admin ID

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API, { headers: { 'admin-id': adminId } })
      .then(res => res.json())
      .then(setPosts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return setError('Title and Body are required');
    if (body.trim().split(' ').length < 3) return setError('Body must have at least 3 words');

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API}/${editId}` : API;
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'admin-id': adminId
      },
      body: JSON.stringify({ title, body })
    });

    if (res.ok) {
      const updatedPost = await res.json();
      if (editId) {
        setPosts((prev) =>
          prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
        );
      } else {
        setPosts((prev) => [updatedPost, ...prev]);
      }

      setTitle('');
      setBody('');
      setEditId(null);
      setError(null);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: { 'admin-id': adminId }
    });

    if (res.ok) {
      // ✅ Instantly remove the deleted post from UI
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Create'} Post
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Your Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="border p-4 mb-2 rounded bg-white">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => handleEdit(post)} className="text-blue-500">Edit</button>
              <button onClick={() => handleDelete(post.id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
