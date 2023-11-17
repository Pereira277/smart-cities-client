import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="grid place-items-center w-screen bg-base-300 px-2 h-screen">
      <div className="flex w-full justify-center">
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 -mt-14 lg:mt-0">
          <form className="card-body">
            <h2 className="card-title">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <NavLink to="/register" className="btn btn-primary">
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
