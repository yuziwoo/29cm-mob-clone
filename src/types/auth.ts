export type UserInfo = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  providerId: string;
  isAdmin?: boolean;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type UserProfileUpdateProps = {
  displayName: string;
  photoURL: string;
};

export type AdminList = string[];
