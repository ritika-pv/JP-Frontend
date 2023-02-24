let key ='userData';

module.exports = {

    setUserData : async(userData)=>{
        localStorage.setItem(key,userData);
    },

    getUserata : async()=>{
       return localStorage.getItem(key);
    }
}