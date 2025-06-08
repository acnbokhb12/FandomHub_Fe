export type SigninPayload = {
  username: string,
  password: string;
}

export type RegisterPayLoad = {
  email: string,
  userName: string,
  password: string,
  birthDay: Date
}

type UserInfo = {
  id: number;
  name: string;
  email: string;
  // thêm các field khác nếu có
}

type AuthSuccess = {
  success: true;
  data: {
    token: string;
    refreshToken: string;
    user: UserInfo
  };
};

type AuthFail = {
  success: false;
  message: string;
};
export type AuthResponse = AuthSuccess | AuthFail;
