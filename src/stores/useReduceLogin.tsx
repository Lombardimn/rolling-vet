import { create } from "zustand";

//Store
interface IReduceToogle {
  isLogin: boolean;
  loginChange: (logged: boolean) => void;
}

export const useReduceLogin = create<IReduceToogle>((set) => ({
  isLogin: false,
    loginChange: (logged) => {
    set({ isLogin: !logged });
  },
}));