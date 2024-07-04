import PropTypes from 'prop-types';

const CommentItem = ({ comment }) => {
  return (
    <div className="border p-2 rounded mb-2">
      <p className="text-gray-700">{comment.content}</p>
      <p className="text-sm text-gray-500">by {comment.author} on {new Date(comment.timestamp).toLocaleString()}</p>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentItem;
