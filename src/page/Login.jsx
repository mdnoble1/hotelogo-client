/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import UseAxios from "../hooks/UseAxios";
import logo from "../assets/images/logo1.png";

const Login = () => {
  // const [ email , setEmail] = useState('');
  // const [ password , setPassword] = useState('');
  const { signInUser, signInWithGoogle } = UseAuth();
  const navigate = useNavigate();
  const axios = UseAxios();

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    // log in user from firebase

    try {
       signInUser(email, password);

      //  const user = await

      //  console.log(user.user.email)

      // const res = await axios.post("/auth/access-token", {
      //   email: user.user.email,
      // });

      // console.log(res);

      e.target.reset();
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Email and Password Doesn't Match",
        icon: "error",
        confirmButtonText: "Let's Try Agin",
      });
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Email and Password Doesn't Match",
        icon: "error",
        confirmButtonText: "Let's Try Agin",
      });
    }
  };

  return (
    <div className="my-12 lg:mt-32">
      <div className="flex justify-center items-baseline">
        <NavLink to={"/"}>
          <img className="w-48 mb-10 lg:mb-0" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="lg:pb-12 drop-shadow-2xl">
        <div className="w-11/12 lg:w-1/3 mx-auto border-2 border-[#D31027] rounded-md lg:mt-12">
          <div className="py-12 bg-white rounded-md">
            <h2 className="font-bold text-4xl text-black text-center">Login</h2>
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
                <button
                  type="submit"
                  className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#D31027] hover:bg-red-400 hover:text-black"
                >
                  Login
                </button>
              </div>
              <p className="font-medium text-xl text-center">or</p>
              <div>
                <button
                  onClick={handleLoginWithGoogle}
                  className="btn btn-outline w-full rounded-lg font-semibold text-xl normal-case hover:text-[#D31027]"
                >
                  <FaGoogle></FaGoogle>Sign In With Google
                </button>
              </div>
            </form>
            <div>
              <p className="font-semibold text-black text-center">
                Don’t Have An Account ? Please{" "}
                <NavLink to="/register" className="text-[#D31027]">
                  Register
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
