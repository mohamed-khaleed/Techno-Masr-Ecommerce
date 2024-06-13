"use client"
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LoginFormInputs {
  username: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormInputs>({ mode: 'onChange' });
  const login = useAuthStore(state => state.login);
  const navigate=useNavigate()
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.username, data.password);
      setError(null);
      navigate('/');
    } catch (err) {
      setError('Failed to login');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center h-screen bg-white px-20">
    <h2 className="text-5xl font-bold text-mainColor mb-6">Login To Account</h2>
    <p className="text-lg text-lightBlack mb-6">Let’s get started with your 30-day free trial.</p>
    
    <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-lightBlack">Username</label>
        <input
          type="text"
          id="username"
          {...register('username', { required: 'Username is required' })}
          className="mt-1 block w-full rounded-md border-mainColor border-solid border-[2px] shadow-sm sm:text-sm px-6 py-3"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
      </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-lightBlack">Password</label>
      <input
        type="password"
        id="password"
        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
        className="mt-1 block w-full rounded-md border-mainColor border-solid border-[2px] shadow-sm sm:text-sm px-6 py-3"
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <button
      type="submit"
      className={`w-full bg-mainColor text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor mt-4 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={!isValid}
    >
      Login
    </button>
  </form>
  )
}

export default LoginForm
