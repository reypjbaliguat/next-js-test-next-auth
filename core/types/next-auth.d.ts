import { BusinessType } from "./bussiness";

interface UserSession {
  id: string;
  email: string;
  email_verified: boolean;
  access_token: string;
  refresh_token: string;
  business: {
    id: string;
    type: BusinessType;
  };
  error?: string;
}

declare module "next-auth" {
  interface Session {
    user: UserSession;
  }

  interface User {
    username: string;
    access_token: string;
    refresh_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    refresh_token: string;
    user: UserSession;
  }
}
