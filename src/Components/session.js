export const startSession = (user) => {
  sessionStorage.setItem("email", user.email);
  sessionStorage.setItem("accessToken", user.accessToken);
  sessionStorage.setItem("userId", user.uid);
}

export const getSession = () => {
  return {
    email: sessionStorage.getItem("email"),
    accessToken: sessionStorage.getItem("accessToken"),
    uid: sessionStorage.getItem("userId"),
  }
}

export const endSession = () => {
  sessionStorage.clear();
}

export const isLoggedIn = () => {
  return getSession().accessToken;
}