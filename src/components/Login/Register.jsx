import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, signWithGoogle, signInGitGub } =
      useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

   
    const handleRegister = (event) =>{
      event.preventDefault();
      setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (password.length < 6) {
          setError("Please Add at least 6 characters in your password");
          return;
        }
        
        createUser(email, password)
          .then(result =>{
            const user = result.user
            navigate(from, { replace: true });
            form.reset();
          })
          .catch(err => setError(err.message))
    }

    const handleGoogleLogin = () => {
      signWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          // console.log(loggedUser);
        })
        .catch((err) => console.log(err));
    };
  const handleGithubLogin = () => {
    signInGitGub()
      .then((result) => {
        const loginUser = result.user;
        setUserName(loginUser.displayName);
      })
      .catch((error) => console.log(error));
  };
    

    const handleAccepted =(event) =>{
        setAccepted(event.target.checked)
    }

    return (
      <div className="min-w-screen min-h-screen bg-[#0c0c0c] flex justify-center items-center">
        <div className="w-[350px] text-[#d0d2d6] p-2">
          <div className="bg-[#0c0c0c] p-4 rounded-md">
            <h2 className="text-xl mb-3">Welcome to Gericht</h2>
            <p className="text-sm mb-3">Please register to your account</p>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="name">Name</label>
                <input
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                  type="text"
                  name="name"
                  placeholder="name"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                />
                <p className="text-red-500">
                  <small>{error}</small>
                </p>
              </div>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="password">Photo URL</label>
                <input
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  id="photo"
                  required
                />
              </div>
              <div className="flex items-center w-full gap-3 mb-3">
                <input
                  onClick={handleAccepted}
                  className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  required
                />
                <label htmlFor="checkbox">
                  I agree to privacy policy & terms
                </label>
              </div>
              <button
                disabled={!accepted}
                className="bg-[#f5efdb] w-full hover:shadow-blue-500/50 hover:shadow-lg text-[#0c0c0c] rounded-md px-7 py-2 mb-3"
              >
                Sign Up
              </button>
              <div className="flex items-center mb-3 gap-3 justify-center">
                <p>
                  Already have an account ? <Link to="/login">Login here</Link>
                </p>
              </div>
              <div className="w-full flex justify-center items-center mb-3">
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                <div className="w-[10%] flex justify-center items-center">
                  <span className="pb-1">Or</span>
                </div>
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div
                  onClick={handleGoogleLogin}
                  className="w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden"
                >
                  <span>
                    <AiOutlineGooglePlus />
                  </span>
                </div>
                <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span>
                    <FiFacebook />
                  </span>
                </div>
                <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span>
                    <CiTwitter />
                  </span>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className="w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden"
                >
                  <span>
                    <AiOutlineGithub />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;