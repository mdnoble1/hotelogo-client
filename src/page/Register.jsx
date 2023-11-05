import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen font-serif flex justify-center items-center my-[-60px]  w-[96%] mx-auto">
      <div className="w-[385px] h-[580px] shadow-2xl rounded-none p-[29px]">
        <h1 className="text-4xl text-orange-600 text-center font-bold">
          Sign Up
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
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
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-orange-500 rounded-full px-6 py-3 border-none font-bold text-white"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
