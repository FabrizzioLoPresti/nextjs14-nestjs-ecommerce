import { type Profile, DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export type GithubProfileType = {
  login: string;
  id: number | string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: string;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: Plan;
} & Profile

export type Plan = {
  name: string;
  space: number;
  collaborators: number;
  private_repos: number;
}

export type ProductType = {
  id?: string;
  name: string;
  description?: string;
  images_url: string[];
  list_price: number;
  stock: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  Categories?: Category;
}

export type CategoryType = {
  id?: string;
  name: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ShoppingCartType = {
  id: string;
  user_id: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  ShoppingCartDetails: ShoppingCartDetailType[];
}

export type ShoppingCartDetailType = {
  id: string;
  shopping_cart_id: string;
  product_id: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  Products: ProductType;
}

export type FilterType = {
  sort?: string;
  category?: string;
}