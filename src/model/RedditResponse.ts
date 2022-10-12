import { Children } from "./Children";

interface Data {
  children: Children;
}

export default interface RedditResponse {
  data: Data;
}
