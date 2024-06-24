"use server";

import axios from "axios";

const generateRandomString = (length: number): string => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const PostUser = async (login_user: LoginUserType) => {
  const randomToken = generateRandomString(26);

  const api: string =
    "https://api.elchocrud.pro/api/v1/d5a97158cb277485a991fbbfd8e389b4/users_data";

  const { data } = await axios.get<GetUserType[]>(api);

  if (data.some((user) => user.user_id == login_user.user_id)) {
    const user: GetUserType | undefined = data.find(
      (user) => user.user_id == login_user.user_id
    );

    await axios.patch<GetUserType>(`${api}/${user?._id}`, {

      token: randomToken,
      date_token: login_user.date,
    });

    return randomToken;
  } else {
    await axios.post<GetUserType>(`${api}/`, {
      displayName: login_user.displayName,
      username: login_user.username,
      user_id: login_user.user_id,
      photoURL: login_user.photoURL,
      provider: login_user.provider,
      token: randomToken,
      date_token: login_user.date,
    });

    return randomToken;
  }
};

export default PostUser;
