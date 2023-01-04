import React, { useRef } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { login } from '../redux/apiCalls';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const dispatch = useDispatch();
    const { isloading, error } = useSelector(state => state.user);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            emailRef.current.value === "" ||
            passwordRef.current.value === ""
          )
            return toast.error("All fields are mandatory", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        login(dispatch, data);
       
    }


    return (
        <div className='flex justify-center items-center mt-20 '>
            <div className='bg-gray md:p-14 md:w-[500px] w-100 shadow-xl bg-white rounded-md'>
                <form className='flex justify-center items-center flex-col p-6 gap-5 '>
                    <h1 className='font-bold text-2xl text-blue-600'>Login</h1>
                    <input type='email' name='email' ref={emailRef} className=' p-2 w-full border border-blue-400 ' placeholder="Enter Email"/>
                    <input type='password' name='password' ref={passwordRef} className=' p-2 w-full border border-blue-400' placeholder="Enter password"/>
                    <button type='submit' onClick={handleSubmit} className='p-2 w-full bg-blue-600 text-white' >Login</button>
                    <h1>Don't have an account? <Link to='/register'><span className='font-bold text-blue-600'>Register</span></Link></h1>
                    {isloading && <Spinner />}
                    {error?.length !== 0 && <h1 className='text-xl font-bold text-blue-600 text-center'>{error}</h1>}
                </form>
            </div>
        </div>
    )
}

export default Login