import axios from "axios";
import { NavLink } from "react-router-dom";
import { TSignInSchema, signInSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Login() {
  const url = "http://localhost:3000/login";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userData = {
      email: data.email,
      password: data.password,
    };
    console.log(userData);

    try {
      const res = await axios.post(url, userData);
      console.log(res.data);
      if (res.data) {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div className="grid place-items-center w-screen bg-base-300 px-2 h-screen">
      <div className="flex w-full justify-center">
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 -mt-14 lg:mt-0">
          <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="card-title">Login</h2>
            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">
                  {`${errors.email.message}`}
                </span>
              )}
            </div>
            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500">{`${errors.password.message}`}</span>
              )}
            </div>
            {/* SUBMIT */}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary disabled:btn-disabled"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
          <div className="px-8 pb-8">
            <div className="divider">OR</div>
            <NavLink to="/Register" className="btn btn-primary w-full">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
