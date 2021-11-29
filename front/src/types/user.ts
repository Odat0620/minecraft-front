export type CurrentUserType = {
  id: number | null;
  name: string;
  email: string;
  profile: string;
  avatar: string;
};

export type UserType = {
  id: number;
  name: string;
  profile: string;
  avatar: string;
  createdAt: Date;
};
