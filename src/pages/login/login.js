import { useState, React } from "react";
import "./login.css";
import { login, logout } from "../../reducers/user_slice";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';









const LoginPage = () => {
  const [newUserData, setNewUserData] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.user.value.user_data);
  return (
    <div>
      {userData}
      <input onChange={(e) => setNewUserData(e.target.value)} />
      <button onClick={()=>dispatch(login({user_data:newUserData}))}>
        Submit Login
      </button>
    </div>
  );
};

export default LoginPage;
