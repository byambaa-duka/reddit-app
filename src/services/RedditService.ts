import axios from "axios";
import RedditResponse from "../model/RedditResponse";

export const getPostsBySubreddit = (term: string): Promise<RedditResponse> => {
  return axios
    .get("https://www.reddit.com/r/" + term + "/.json", {})
    .then((response) => {
      console.log(response.data.data.children);
      return response.data.data.children;
    });
};
