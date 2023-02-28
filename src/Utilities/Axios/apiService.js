import { apiInstance } from "./apiConfig";

/**
 * @description will be used for the login operation
 * @param data ({email:string,password:string})
 * @param registerData({fame:string,lname:string,phone:string,address:string,city:string,state:string,zip:string,email:string,password:string})
 */
export const loginUserService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let loginData = await apiInstance.post("/login", data);
      resolve(loginData);
    } catch (error) {
      reject(error);
    }
  });
};

export const registerUserService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let registerData = await apiInstance.post("/register", data);
      resolve(registerData);
    } catch (error) {
      reject(error);
    }
  });
};

export const getCategories = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = await apiInstance.get("/category");
      resolve(categories);
    } catch (error) {
      reject(error);
    }
  });
};

export const getMenuItems = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let menuList = await apiInstance.get("/get-items");
      resolve(menuList);
    } catch (error) {
      reject(error);
    }
  });
};

export const getCategoryItems = async (slug) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await apiInstance.get(`/category/${slug}`);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
