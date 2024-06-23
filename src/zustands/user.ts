
import { auth } from "@/firebase/configure";
import { User, onAuthStateChanged } from "firebase/auth";
import { create } from "zustand";

interface UseUserType {
  user: User | null;
  checkUser: () => void;
}

const useUser = create<UseUserType>((set) => ({
  user: null,
  checkUser: () => onAuthStateChanged(auth, (user) => set({ user })),
}));

export default useUser;
