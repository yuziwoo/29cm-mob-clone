export type UserInfo = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  providerId: string;
  isAdmin?: boolean;
};

export type AdminList = string[];
