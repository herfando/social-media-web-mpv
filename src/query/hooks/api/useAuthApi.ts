import { Register, Login } from '@/query/services/authService';
import type {
  registerSchemaType,
  loginSchemaType,
} from '@/validation/authSchema';
import { type UseFormReturn } from 'react-hook-form';

interface AuthApiParams {
  registerForm: UseFormReturn<registerSchemaType>;
  loginForm: UseFormReturn<loginSchemaType>;
}

export const useAuthApi = ({ registerForm, loginForm }: AuthApiParams) => {
  // Submit handler register
  const submitRegister = async () => {
    const data = registerForm.getValues();
    const { confirmPassword, ...payload } = data; // hapus confirmPassword
    try {
      const res = await Register(payload);
      console.log('Success register:', res.data);
      registerForm.reset();
    } catch (err) {
      console.error('Error register:', err);
    }
  };

  // Submit handler login
  const submitLogin = async () => {
    const data = loginForm.getValues();
    try {
      const res = await Login(data);
      console.log('Success login:', res.data);
      loginForm.reset();
    } catch (err) {
      console.error('Error login:', err);
    }
  };

  return { submitRegister, submitLogin };
};
