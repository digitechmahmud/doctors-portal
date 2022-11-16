import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleRegister = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h2 className=' text-xl font-semibold text-accent text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" className="input input-bordered input-primary w-full max-w-xs text-accent " />
                        {errors.name?.type === 'required' && <p className='text-red-600' role="alert">Your name is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" className="input input-bordered input-primary w-full max-w-xs text-accent " />
                        {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email address ia required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Password</span>
                        </label>
                        <input {...register("password", {
                            required: 'Password required', minLength: { value: 6, message: 'Password must be 6 character or longer' }
                        })} type="password" className="input input-bordered input-primary w-full max-w-xs text-accent " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full max-w-xs' value='Sign Up' type="submit" />
                </form>
                <p className='text-accent'>Already have an account? <Link className='text-secondary link' to="/login">Login</Link></p>
                <div className="divider text-accent">OR</div>
                <button className='btn btn-outline btn-primary font-bold  w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;