import { useContext } from "react";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Pokes from './components/Search';
import MyPoke from './components/MyPoke';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Bar from "./components/bar";
import AuthContext from "./context/AuthProvider";
function App() {
  const { auth} = useContext(AuthContext);
  return (
    <>
    {auth?.user&&<Bar/>}
    <Routes>      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokes" element={<Pokes />} />
          <Route path="/mypoke" element={<MyPoke />} />
        </Route>        

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    </>
  );
}
export default App;