import useSWR, { SWRResponse } from "swr";

import { client } from "@/api/axiosClient";
import { CurrentUserType, UserType } from "@/types/user";

export const useCurrentUser = (): SWRResponse<CurrentUserType, Error> => {
  return useSWR("/me", (endpoint) => client.get(endpoint).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    onErrorRetry: (_error, _key, _config, _revalidate, { retryCount }) => {
      if (retryCount === 1) return;
    },
  });
};

export const useUserById = ({ userId }: { userId?: string }): SWRResponse<UserType, Error> => {
  const endpoint = userId != null ? `/users/${userId}` : null;
  return useSWR(endpoint, (endpoint) => client.get(endpoint).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};
