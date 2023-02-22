import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './pages/home/home_page';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register'
import { Provider } from 'react-redux';
import { Store } from './store';
 const App = () => {
  return (
    <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element ={<RegisterPage/>}/>
      </Routes>
    </Router>
    </Provider> 
  )
}

export default App;
