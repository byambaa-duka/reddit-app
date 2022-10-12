import { useEffect, useState } from "react";
import { Children } from "../model/Children";
import Post from "../model/Post";
import { getPostsBySubreddit } from "../services/RedditService";
import "./Main.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [posts, setPosts] = useState<Children[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      getPostsBySubreddit("aww").then((response) => {
        console.log(response);
        setPosts(response);
      });
    } else {
      getPostsBySubreddit("aww").then((response) => {
        console.log(response);
        setPosts(response);
      });
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm onFormSubmit={setSearchTerm} />
      <ResultList posts={posts} />
    </div>
  );
};

export default Main;
