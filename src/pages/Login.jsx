import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { loginUser , GoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // e.target.reset() its for clean
        navigate("/home");
        // you have to create a home component and make sure the path
      })

      .catch((error) => console.log("Error", error.message));
  };

  const handleGoogleLogin = () =>{
    GoogleLogin()
    .then(res=>{
      navigate(location.state?.from || '/')
    })  }



  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
            

           
            <form onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  type=""
                  name="password"
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
              <div className="form-control mt-6 space-y-3 ">
                <button className="btn btn-primary">Login</button>
                
              </div>
              
            </form>
          
         <button className="btn mt-2" onClick={handleGoogleLogin}>Login With Google</button>
            <p className="text-blue-950">
                Haven't Any account?{" "}
                <NavLink className="font-bold" to="/ragister">
                  Register Now
                </NavLink>
              </p>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
