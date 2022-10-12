interface PostChild {
  title: string;
  thumbnail?: string;
  url: string;
}

export default interface Post {
  data: PostChild;
}
