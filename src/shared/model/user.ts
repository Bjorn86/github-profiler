export type User = {
  login: string;
  avatarUrl: string | null;
  pageUrl: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitterUrl: string | null;
  repos: number;
  followers: number;
  following: number;
  createdAt: string;
};

export type GithubUser = {
  login: string;
  avatar_url: string | null;
  html_url: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
