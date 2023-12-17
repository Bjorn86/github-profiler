export type User = {
  login: string;
  id: number;
  avatarUrl: string;
  pageUrl: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitterUrl: string;
  repos: number;
  followers: number;
  following: number;
  createdAt: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
