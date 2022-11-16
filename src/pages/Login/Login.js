import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h2 className=' text-xl font-semibold text-accent text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Email</span>
                        </label>
                        <input {...register("email")} type="email" className="input input-bordered input-primary w-full max-w-xs text-accent required:" />     
                    </div>                 
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Password</span>
                        </label>
                        <input {...register("password")} type="password" className="input input-bordered input-primary w-full max-w-xs text-accent required:" />
                        <span className="label-text text-accent">Forget Password?</span>
                    </div>                 
                    <input className='btn btn-accent w-full max-w-xs' value='Login' type="submit" />
                </form>
                <p className='text-accent'>New to Doctors Portal? <Link className='text-secondary link' to="/signup">Create new account</Link></p>
                <div className="divider text-accent">OR</div>
                <button className='btn btn-outline btn-primary font-bold  w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
           </div>
        </div>
    );
};

export default Login;