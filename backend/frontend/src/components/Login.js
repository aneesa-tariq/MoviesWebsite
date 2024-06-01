import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';
import { useSelector } from "react-redux";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(({ app }) => app.isLoading);
  //loginHandle
  const loginHandler = () => {
    setIsLogin(!isLogin); //or setIsLogin(!isLogin)
  }
  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");

      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        dispatch(setLoading(false));
      }
    }
    else {
      //register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      console.log(user);
      try {
        const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user,
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        dispatch(setLoading(false));
    }
    }
    setEmail("");
    setFullName("");
    setPassword("");

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh] bg-cover' src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="" />
      </div>
      <form onSubmit={getInputData} className='absolute mt-32 ml-[32rem] w-3/12 bg-black opacity-90 pl-12 pb-12 pr-12 pt-5 rounded-md'>
        <h1 className='text-white mb-5 ml-20 text-3xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {!isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} className='mb-3 p-3 outline-none rounded-sm bg-gray-800 text-white' type="text" placeholder='Enter Your Full Name' />}
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='mb-3 p-3 outline-none rounded-sm bg-gray-800 text-white' type="email" placeholder=' Email ' />
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='p-3 outline-none rounded-sm bg-gray-800 text-white' type="password" placeholder='Password' />
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-5'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button>
          <p className='text-white'>{isLogin ? "New to Netflix?" : "Already have an account?"}
            <span className='ml-1 text-blue-400 font-medium cursor-pointer' onClick={loginHandler}>{isLogin ? "Signup" : "Login"}</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
