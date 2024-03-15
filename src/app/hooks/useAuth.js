import { setAddUser, setRemoveUser } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setAddUser(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setRemoveUser());
  };

  return { login, logout };
};
