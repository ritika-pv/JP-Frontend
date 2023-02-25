import { apiInstance } from "./apiConfig";

/**
 * @description willbe used for the login operation
 * @param data ({email:string,password:string})
 * @author Abhishek Chaturvedi
 */
export const loginUserService = async (data) => {
  return new Promise(async(resolve, reject) => {
    try {
      let loginData = await apiInstance.post("/login", data)
      resolve(loginData);
    } catch (error) {
      reject(error);
    }

  });

};
