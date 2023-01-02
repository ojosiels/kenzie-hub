import axios from "axios";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../components/ToastConfig";
import api from "../services/api";
import { iTechData } from "./TechContext";

interface iUserProviderProps {
  children: ReactNode;
}

interface iUserContext {
  userInfo: iUserInfo;
  setUserInfo: Dispatch<SetStateAction<iUserInfo>>;
  userLogin: (data: iLoginUserData) => Promise<void>;
  userRegister: (data: iRegisterUserData) => Promise<void>;
  techList: iTechData[];
  setTechList: Dispatch<SetStateAction<iTechData[]>>;
  loading: boolean;
}

interface iUserInfo {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechData[];
}

interface iLoginUserData {
  email: string;
  password: string;
}

export interface iRegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}
export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps): JSX.Element => {
  const [userInfo, setUserInfo] = useState<iUserInfo>({} as iUserInfo);
  const [techList, setTechList] = useState<iTechData[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const userLogin = async (data: iLoginUserData) => {
    try {
      const res = await api.post("/sessions", data);
      api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;

      window.localStorage.setItem("@KENZIEHUB:token", res.data.token);
      setUserInfo(res.data.user);
      setTechList(res.data.user.techs);

      toastSuccess("Login successfully done");

      navigate("/home", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error.message);
      }
    }
  };

  const userRegister = async (data: iRegisterUserData) => {
    try {
      await api.post("/users", data);
      toastSuccess("Registration successfully complete");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastError(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@KENZIEHUB:token");
    const loadUser = async () => {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUserInfo(data);
          setTechList(data.techs);
        } catch (error) {
          console.log(error);
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userLogin,
        userRegister,
        techList,
        setTechList,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
