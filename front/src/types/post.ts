export type PostType = {
  id: number;
  title: string;
  userId: number;
  likeCounts: number;
  version: Array<"Java版" | "統合版">;
  image: string;
  body: string;
  material: string;
  recipe: Array<{
    processTitle: string;
    processBody: string;
    processImage: string;
  }>;
  comments: Array<{
    id: number;
    postId: number;
    userId: number;
    body: string;
    createdAt: Date;
    user: {
      id: number;
      name: string;
      avatar?: string;
    };
  }>;
  createdAt: Date;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
};

export type PostListType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  likeCounts: number;
  commentCounts: number;
  version: Array<"Java版" | "統合版">;
  image: string;
  createdAt: Date;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
};
