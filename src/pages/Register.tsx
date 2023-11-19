import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignUpSchema, signUpSchema } from "../lib/types";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userData = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    console.log(userData);

    try {
      const res = await axios.post("http://localhost:3000/register", userData);
      console.log(res);
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
            <h2 className="card-title">Register</h2>
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
            {/* NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">{`${errors.name.message}`}</span>
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
            {/* CONFIRM PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">{`${errors.confirmPassword.message}`}</span>
              )}
            </div>
            {/* SUBMIT */}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary disabled:btn-disabled"
                disabled={isSubmitting}
              >
                Register
              </button>
            </div>
          </form>
          <div className="px-8 pb-8">
            <div className="divider">OR</div>
            <NavLink to="/login" className="btn btn-primary w-full">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
