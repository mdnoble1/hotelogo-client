/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'
import UseAuth from "../hooks/UseAuth";

const Login = () => {
  const { signInUser, signInWithGoogle } = UseAuth();

  const navigate = useNavigate();

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    // log in user from firebase

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: "Email and Password Dosen't Match",
          icon: 'error',
          confirmButtonText: "Let's Try Agin"
        })
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: "Email and Password Dosen't Match",
          icon: 'error',
          confirmButtonText: "Let's Try Agin"
        })
      });
  };

  return (
    <div className="lg:pb-12 drop-shadow-2xl">
      <div className="lg:w-1/3 bg-[#ea001e] mx-auto pt-16 lg:pt-32 lg:p-1 lg:rounded-b-md lg:mt-12">
        <div className="py-12 lg:py-32 bg-white rounded-t-3xl rounded-b-sm lg:mt-12">
          <h2 className="font-semibold text-4xl text-black text-center mb-12">
            Login to Your Account
          </h2>
          <div className="border border-[#ea001e] w-11/12 lg:w-3/4 mx-auto mb-6"></div>
          <form onSubmit={handleLogin} className="card-body lg:w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg text-black">
                  Email Address
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                className="input input-bordered rounded-lg bg-gray-100"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg text-black">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="input input-bordered rounded-lg bg-gray-100 w-full"
                  required
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
                Login
              </button>
            </div>
            <p className="font-medium text-xl text-center">or</p>
            <div>
              <button
                onClick={handleLoginWithGoogle}
                className="btn btn-outline w-full rounded-lg font-semibold text-xl normal-case hover:text-[#ea001e]"
              >
                <FaGoogle></FaGoogle>Sign In With Google
              </button>
            </div>
          </form>
          <div>
            <p className="font-semibold text-black text-center">
              Don’t Have An Account ? Please{" "}
              <NavLink to="/register" className="text-[#ea001e]">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
