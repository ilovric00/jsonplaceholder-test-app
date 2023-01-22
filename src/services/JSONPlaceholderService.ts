import { API_URL } from 'config/constants';
import Comment from 'types/comment';
import Post from 'types/post';
import User from 'types/user';

export default class JSONPlaceholderService {
  public static getUsers = async (): Promise<User[] | null> => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const json: User[] = await response.json();

      return json;
    } catch {
      return null;
    }
  };

  public static getPosts = async ({ start, limit }: { start: number; limit: number }): Promise<Post[] | null> => {
    try {
      const response = await fetch(`${API_URL}/posts?_start=${start}&_limit=${limit}`);
      const json: Post[] = await response.json();

      return json;
    } catch {
      return null;
    }
  };

  public static getPostComments = async ({ postId }: { postId: number }): Promise<Comment[] | null> => {
    try {
      const response = await fetch(`${API_URL}/posts/${postId}/comments`);
      const json: Comment[] = await response.json();

      return json;
    } catch {
      return null;
    }
  };
}
