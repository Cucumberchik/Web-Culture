"use server";

import axios from "axios";

const checkUser = async (token: string, date: string) => {
  const { data } = await axios.get<GetUserType[]>(
    "https://api.elchocrud.pro/api/v1/d5a97158cb277485a991fbbfd8e389b4/users_data"
  );
  const user: any = data.find((el) => el.token === token);
  

  return +date > +user?.date_token || !user
    ? {
        status: false,
        user: null,
      }
    : {
        status: true,
        user: {
          username: user.username,
          displayName: user.displayName,
          photoURL: user.photoURL,
          user_id: user.user_id,
          provider: user.provider,
          email: user.email,
        },
      };
};

export default checkUser;
