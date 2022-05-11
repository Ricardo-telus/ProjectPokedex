import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Pokes from './components/Search';
import MyPoke from './components/MyPoke';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Bar from "./components/bar";
import { useSelector } from 'react-redux';
function App() {
  const userReducer = useSelector(store => store.user)
  return (
    <>
    {userReducer?.active&&<Bar/>}
    <Routes>      
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokes" element={<Pokes />} />
          <Route path="/mypoke" element={<MyPoke />} />
          </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />

    </Routes>
    </>
  );
}
export default App;

function RequireAuth() {
  let auth = useSelector(store => store.user)
  let location = useLocation();

  if (!auth.active) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}