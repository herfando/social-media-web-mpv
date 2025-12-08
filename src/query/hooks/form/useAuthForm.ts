import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  loginSchema,
  type registerSchemaType,
  type loginSchemaType,
} from '@/validation/authSchema';

export const useAuthForm = () => {
  // 1. Form login
  const loginForm = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  //   2.Form register
  const registerForm = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  return { loginForm, registerForm };
};
