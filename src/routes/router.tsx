// routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/03_home';
import Login from '@/pages/01_login';
import Register from '@/pages/02_register';
import { useSelector } from 'react-redux';
import { type RootState } from '@/redux/store';

export default function Router() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Routes>
      <Route path='/' element={token ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}
