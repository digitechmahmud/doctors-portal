import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user, userLogin } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data);
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
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
                        <input {...register("email", { required: true })} type="email" className="input input-bordered input-primary w-full max-w-xs text-accent " />  
                        {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email address ia required</p>}
                    </div>                 
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Password</span>
                        </label>
                        <input {...register("password", {
                            required: 'Password required', minLength: { value: 6, message:'Password must be 6 character or longer'} })} type="password" className="input input-bordered input-primary w-full max-w-xs text-accent " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
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