"use server";

import axios from "axios";

const GetToken = async (code: string) => {
  const clientId = "51962972";
  const clientSecret = "AgwKkilmeZSDpCt3BclT";
  const redirectUri = "http://localhost:3000/auth/vk-auth"; // Тот же redirectUri, что и в запросе авторизации

  try {
    const response = await axios.post(
      "https://oauth.vk.com/access_token",
      null,
      {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          code: code,
        },
      }
    );

    const accessToken = response.data.access_token;
    const userId = response.data.user_id;

    return response.data; // Возвращаем данные от VK API
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    throw error; // Пробрасываем ошибку для обработки на верхних уровнях
  }
};

export default GetToken;
