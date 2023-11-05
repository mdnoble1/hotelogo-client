import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center my-[-60px] w-[96%] mx-auto">
      <div className="w-[385px] h-[580px] shadow-2xl rounded-none p-[29px]">
        <h1 className="text-4xl font-serif text-orange-600 text-center font-bold">
          Login
        </h1>
        <form className="card-body">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link href="#" alt="" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-orange-500 rounded-full px-6 py-3 border-none font-bold text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <p className="text-center">
          <small>New to HoteloGo</small>{" "}
          <Link className="text-orange-600 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
