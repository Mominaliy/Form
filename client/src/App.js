import './App.css';
import {Routes, Route } from "react-router-dom";
import Login from './LoginPage';
import SignUp from './SignupPage';
import Dashboard from './Dashboard';



function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
  );
}

export default App;
