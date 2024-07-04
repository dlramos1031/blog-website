import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const PostDetail = () => {
  const { id } = useParams();
  // Fetch the post data using the id
  const post = {
    id,
    title: 'Sample Post Title',
    content: 'This is a sample post content.',
    category: 'Sample Category',
    tags: 'sample, tags',
    author: 'Author Name',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <p className="text-gray-700">Category: {post.category}</p>
      <p className="text-gray-700">Tags: {post.tags}</p>
      <p className="text-gray-700">Author: {post.author}</p>
      <CommentSection postId={id} />
    </div>
  );
};

export default PostDetail;
