import Post from "../model/Post";
import "./Result.css";

interface Props {
  post: Post;
}

const Result = ({ post }: Props) => {
  console.log(post);
  return (
    <li className="Result">
      <h2>{post.data.title}</h2>
      <img src={post.data.thumbnail} alt={post.data.title} />
    </li>
  );
};

export default Result;
