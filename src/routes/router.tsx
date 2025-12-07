// routes/AppRoutes.tsx
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/03_home';
import Login from '@/pages/01_login';
import Register from '@/pages/02_register';
import NavbarGuest from '@/components/layout/01_navbarGuest';

// Before Auth
const BeforeAuthLayout = () => (
  <div>
    <NavbarGuest />
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  </div>
);

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}
