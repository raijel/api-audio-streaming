import "e";

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      role: string;
    }
  }
}
