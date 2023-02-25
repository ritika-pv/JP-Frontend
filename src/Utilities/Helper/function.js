let key = "userData";

export const setUserData = async (userData) => {
  console.log(":: userData :: ", userData);
  localStorage.setItem(key, JSON.stringify(userData));
};

export const getUserData = async () => {
  return JSON.parse(localStorage.getItem(key));
};
