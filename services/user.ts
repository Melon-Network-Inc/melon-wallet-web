import { Melon_Wallet_API } from './index';

export const forgetPasswordApi = async (email: string): Promise<any> => {
  return Melon_Wallet_API.get(`/auth/forgetPassword/${email}`);
};

interface IChangePassword {
  code: string;
  payload: {
    confirm_password: string;
    password: string;
  };
}

export const changePasswordApi = async (
  data: IChangePassword,
): Promise<any> => {
  const payload = data.payload;
  const code = data.code;
  return Melon_Wallet_API.post(`/auth/resetPassword?code=${code}`, payload);
};
