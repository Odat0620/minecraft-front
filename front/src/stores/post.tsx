import useSWR, { SWRResponse } from "swr";

import { PostListType, PostType } from "@/types/post";
import { client } from "@/api/axiosClient";

export const usePostById = ({ postId }: { postId: string }): SWRResponse<PostType, Error> => {
  return useSWR(`/posts/${postId}`, (endpoint) => client.get(endpoint).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};

export const usePostListSWR = (): SWRResponse<Array<PostListType>, Error> => {
  return useSWR("/posts", (endpoint) => client(endpoint).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};
