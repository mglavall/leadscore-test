import { User } from "./user.model";

export interface Session {
  user: User;
  token: {
    expires: string;
    authToken: string;
  };
}
