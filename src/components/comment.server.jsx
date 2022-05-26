import { Link } from '@shopify/hydrogen';
import Toggle from './toggle.client';

const Comment = (props) => {
  return (
    <li className="comment">
      <div className="by">
        <Link to={`/users/${props.comment.user}`}>{props.comment.user}</Link>{' '}
        {props.comment.time_ago} ago
      </div>
      <div
        className="text"
        dangerouslySetInnerHTML={{ __html: props.comment.content }}
      />
      {props.comment.comments.length ? (
        <Toggle>
          {props.comment.comments.map((nested) => (
            <Comment comment={nested} />
          ))}
        </Toggle>
      ) : (
        ''
      )}
    </li>
  );
};

export default Comment;
