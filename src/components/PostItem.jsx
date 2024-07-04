import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/post/${post.id}`} className="text-blue-500">
        Read more
      </Link>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
