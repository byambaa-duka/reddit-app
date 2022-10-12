import { Children } from "../model/Children";
import Post from "../model/Post";
import Result from "./Result";
import "./ResultList.css";

interface Props {
  posts: Children[];
}

const ResultsList = ({ posts }: Props) => {
  return (
    <div className="ResultsList">
      <ul>
        {posts.map((post) => (
          <Result post={post.data}></Result>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
