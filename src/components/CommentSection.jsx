import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments for the given postId
    // This is a placeholder, replace with actual data fetching logic
    setComments([
      { id: 1, content: 'Great post!', author: 'User1', timestamp: '2024-07-01T12:34:56' },
      { id: 2, content: 'Thanks for sharing!', author: 'User2', timestamp: '2024-07-02T14:56:78' },
    ]);
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement comment submission logic here
    console.log('New comment:', newComment);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border p-2 w-full"
          placeholder="Write a comment..."
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentSection;
