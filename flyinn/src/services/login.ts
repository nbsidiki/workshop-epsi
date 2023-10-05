import fetch from "@utils/fetch";
import { setJwtToken, deleteJwtToken } from "@utils/session";

const endPoint = ``;

const endPoints = {
  login: `${endPoint}/authentication`,
  passwordLost: `${endPoint}/users/forgot-password`,
  passwordChange: `${endPoint}/change-password`,
  logout: `${endPoint}/logout`,
  me: `${endPoint}/me`,
  updateLostPassword: `${endPoint}/users/update-lost-password`,
  updatePassword: `${endPoint}/users/update-password`,
  updateEmail: `${endPoint}/users/update-email`,
  askUpdateEmail: `${endPoint}/users/ask-update-email`,
  users: `${endPoint}/users`,
};

export interface IUser {
  id: string;
  email: string;
  roles: string[];
  enabled: boolean;
  contactId: string;
  firstName: string;
  login: string;
  lastName: string;
  needChangePassword: boolean | undefined;
}

export interface ILoginResponse {
  authentification: {
    strategy: string;
  };
  user: IUser;
  accessToken: string;
}

export const login = async (
  username: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const response: ILoginResponse = await fetch(endPoints.login, "post", {
      login: username,
      password,
      strategy: "local",
    });

    setJwtToken(response.accessToken);

    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    deleteJwtToken();
  } catch (error) {
    throw error;
  }
};

export const updateUserById = async (
  userId: string,
  updatedDatas: Partial<IUser>
) => {
  return fetch(`${endPoints.users}/${userId}`, "patch", updatedDatas);
};

export const askUpdateEmail = async (newEmail: string) => {
  try {
    await fetch(endPoints.askUpdateEmail, "post", {
      email: newEmail,
    });
  } catch (error) {
    throw error;
  }
};

export const updateEmail = async (
  login: string,
  password: string,
  token: string,
  newEmail: string
) => {
  try {
    await fetch(endPoints.updateEmail, "post", {
      login,
      checkPassword: password,
      token,
      newEmail,
    });
  } catch (error) {
    throw error;
  }
};

export const updateLostPassword = async (
  newPassword: string,
  token: string
) => {
  try {
    await fetch(endPoints.updateLostPassword, "post", {
      password: newPassword,
      token,
    });
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
) => {
  try {
    await fetch(endPoints.updatePassword, "post", {
      password: newPassword,
      currentPassword,
    });
  } catch (error) {
    throw error;
  }
};

export const passwordLost = (contactId: string) =>
  fetch(endPoints.passwordLost, "post", { contactId });

export const me = () => fetch(endPoints.me, "get");
