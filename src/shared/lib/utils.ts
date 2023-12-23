import { GithubUser, User } from '../model/user';

export const saveDataToLS = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLS = <T>(key: string): T | null => {
  const data: string | null = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;

export const extractUser = (user: GithubUser): User => ({
  login: user.login,
  avatarUrl: user.avatar_url,
  pageUrl: user.html_url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  twitterUrl: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  createdAt: user.created_at,
});
