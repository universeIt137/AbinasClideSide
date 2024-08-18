import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import useAxiosPublic from "../hooks/useAxiosPublic";
const cookies = new Cookies();

export const login = async (data) => {
  const axiosPublic = useAxiosPublic();
  const response = await axiosPublic
    .post("/user/login", data)
    .catch((error) => {
      toast.error("error");
      throw error.response.data;
    });

  let userData = response.data.data;
  cookies.set('accessToken', userData.accessToken, {path: '/'});
  cookies.set("name", userData.name, { path: "/" });
  cookies.set("userId", userData._id, { path: "/" });
  cookies.set("role", userData.role, { path: "/" });
  cookies.set("phone", userData.phone, { path: "/" });
  cookies.set("memberId", userData.id, { path: "/" });

  return response.data;
};
export const registration = async (data) => {
  const axiosPublic = useAxiosPublic();
  const response = await axiosPublic
    .post("/user/signup", data)
    .catch((error) => {
      toast.error("error! use deffrent phone");
      throw error.response.data;
    });

  let userData = response.data.data;
  cookies.set('accessToken', userData.accessToken, {path: '/'});
  cookies.set("name", userData.name, { path: "/" });
  cookies.set("userId", userData._id, { path: "/" });
  cookies.set("role", userData.role, { path: "/" });
  cookies.set("phone", userData.phone, { path: "/" });
  cookies.set("memberId", userData.id, { path: "/" });

  return response.data;
};

export const logout = async () => {
  const axiosPublic = useAxiosPublic();
  const response = await axiosPublic
    .post("/user/logout")
    .then((res) => {
      cookies.remove("name", { path: "/" });
      cookies.remove("userId", { path: "/" });
      cookies.remove("role", { path: "/" });
      cookies.remove("phone", { path: "/" });
      cookies.remove("memberId", { path: "/" });
      cookies.remove('accessToken', {path: '/'});
      return res.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
  return response.data;
};
