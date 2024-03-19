export interface IPost {
  title: string;
  body: string;
  id: number;
}

export type PostsResponse = [] | IPost[];
