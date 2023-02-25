import { apiInstance } from "./apiConfig";

/**
 * @description willbe used for the login operation
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
  console.log("payload", data);
  return new Promise(async (resolve, reject) => {
    try {
      let registerData = await apiInstance.post("/register", data);
      resolve(registerData);
    } catch (error) {
      reject(error);
    }
  });
};
