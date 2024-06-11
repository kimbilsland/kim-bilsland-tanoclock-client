import "./CommentCounter.scss";

const CommentCounter = ({ comments }) => {
  const commentCount = comments.length;

  for (let i = 0; i < commentCount; i++) 
  
  return <h3>{commentCount} Comments</h3>;
};

export default CommentCounter;
