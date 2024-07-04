import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    // Fetch the existing post data using the id
    // This is a placeholder, replace with actual data fetching logic
    const post = {
      title: 'Sample Post Title',
      content: 'This is a sample post content.',
      category: 'Sample Category',
      tags: 'sample, tags',
    };
    setTitle(post.title);
    setContent(post.content);
    setCategory(post.category);
    setTags(post.tags);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement post update logic here
    console.log({ id, title, content, category, tags });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Tags:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
