// routes/AppRoutes.tsx
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/03_home';
import Login from '@/pages/01_login';
import Register from '@/pages/02_register';
import NavbarGuest from '@/components/layout/01_navbarGuest';
import { Toaster } from 'react-hot-toast';
import NavbarUser from '@/components/layout/02_navbarUser';

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

// Auth
const AuthLayout = () => (
  <div>
    <Toaster position='top-right' />
    <main>
      <Outlet />
    </main>
  </div>
);

// After Auth
const AfterAuthLayout = () => {
  return (
    <div>
      <NavbarUser />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default function Router() {
  return (
    <Routes>
      {/* Before Auth */}
      <Route element={<BeforeAuthLayout />}>
        <Route path='/' element={<Home />} />
      </Route>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

      {/* After Auth */}
      <Route element={<AfterAuthLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}
