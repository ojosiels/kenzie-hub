import axios from "axios";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toastError, toastSuccess } from "../components/ToastConfig";
import api from "../services/api";
import { UserContext } from "./UserContext";

interface iTechContext {
  addTech: (data: iTechData) => Promise<void>;
  removeTech: (removedTech: iTechData) => Promise<void>;
  addTechModal: boolean;
  setAddTechModal: Dispatch<SetStateAction<boolean>>;
}

interface iTechProviderProps {
  children: ReactNode;
}

export interface iTechData {
  id?: string;
  title: string;
  status: string;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechProviderProps): JSX.Element => {
  const { techList, setTechList } = useContext(UserContext);
  const [addTechModal, setAddTechModal] = useState(false);

  const addTech = async (data: iTechData) => {
    try {
      const res = await api.post("/users/techs", data);

      toastSuccess("Technology successfully registered");

      setTechList([...techList, res.data]);

      //setAddTechModal(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error.message);
      }
    }
  };

  const removeTech = async (removedTech: iTechData) => {
    try {
      await api.delete(`/users/techs/${removedTech.id}`);

      const newTechList = techList.filter(
        (tech: iTechData) => tech !== removedTech
      );
      setTechList(newTechList);

      toastSuccess("Technology deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ addTech, removeTech, addTechModal, setAddTechModal }}
    >
      {children}
    </TechContext.Provider>
  );
};
