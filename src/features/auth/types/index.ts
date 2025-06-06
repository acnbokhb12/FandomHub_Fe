export interface SigninPayload {
    username: string;
    password: string;
}

interface UserInfo {
  id: number;
  name: string;
  email: string;
  // thêm các field khác nếu có
}

type SigninSuccess = {
  success: true;
  data: {
    token: string;
    user: UserInfo
  };
};

type SigninFail = {
  success: false;
  message: string;
};
export type SigninResponse = SigninSuccess | SigninFail;