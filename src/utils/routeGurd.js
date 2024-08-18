import Cookies from "universal-cookie";
const cookies = new Cookies();

const isAuthenticated = () => {
  const user = getLoggedInUser();
  if (!user) {
    deleteCookies();
    return false;
  } else {
    return true;
  }
};

const getLoggedInUser = () => {
  const userName = cookies.get("name");
  const userId = cookies.get("userId");
  const role = cookies.get("role");

  let userData = { userName, userId, role };

  return userName && userId && role ? userData : null;
};

const deleteCookies = () => {
  cookies.remove("name", { path: "/" });
  cookies.remove("role", { path: "/" });
  cookies.remove("userId", { path: "/" });
  cookies.remove("phone", { path: "/" });
};

export { isAuthenticated, getLoggedInUser, deleteCookies };