import { auth } from "./index.js"

export const createWishList = async (userLogin) => {

  const login = auth.login;

  if (!userLogin) {
    userLogin = login;
  };

  // const user = await getUser(userLogin);

}