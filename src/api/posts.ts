import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getPosts = async (userId: number) => {
  return client.get<Post[]>(`/posts?userId=${userId}`);
};