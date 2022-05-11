import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Pokes from './components/Search';
import MyPoke from './components/MyPoke';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import { Routes, Route } from 'react-router-dom';
import Bar from "./components/bar";
import { useSelector } from 'react-redux';
function App() {
  const userReducer = useSelector(store => store.user)
  return (
    <>
    {userReducer?.active&&<Bar/>}
    <Routes>      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}

          <Route path="/" element={<Home />} />
          <Route path="/pokes" element={<Pokes />} />
          <Route path="/mypoke" element={<MyPoke />} />
      

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    </>
  );
}
export default App;