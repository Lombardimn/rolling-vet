import { create } from "zustand";

//Store
interface IReduceUser {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Object;
    location: Object;
    image: string;
    episode: string[];
    url: string;
    created: string;
    rol: string;
  userDataChange: (user: IReduceUser ) => void;
}

export const useReduceUser = create<IReduceUser>((set) => {
  return {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {},
    location: {},
    image: '',
    episode: [],
    url: '',
    created: '',
    rol: '',
    userDataChange: (user: IReduceUser) => set(user)
  }
})




