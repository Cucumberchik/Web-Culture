"use server";

import axios from "axios";
const checkUser = async (user: any) => {
    // await PostUser(user);
    const token: string = user.sid;

    const userId: string = user.mid;

    const response = await axios.get("https://api.vk.com/method/users.get?", {
      params: {
        user_ids: userId,
        fields: "photo_400",
        access_token: token,
        v: "5.199",
      },
    });
    return response
  };

export default checkUser