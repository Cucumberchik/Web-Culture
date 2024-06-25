import checkUser from "@/serverActions/checkUser";
import { create } from "zustand";

interface UseUserType {
  user: UserType | null;
  token: string;
  setUser: (token: string, date: string) => Promise<boolean>;
  setToken: (t: string) => void;
}

const useUser = create<UseUserType>((set) => ({
  user: null,
  token: "",
  setUser: async (token, date) => {
    const response = await checkUser(token, date);
    set({ user: response.user });

    return response.status;
  },
  setToken: (token) => set({ token }),
}));

export default useUser;
