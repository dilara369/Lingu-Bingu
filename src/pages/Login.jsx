import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const Login = () => {
  const { loginUser , GoogleLogin,resetPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef=useRef(null);
  const passRef=useRef(null);
  const [passwordError, setPasswordError] = useState('');
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
        navigate("/");
      
      })

      .catch((error) => {console.log("Error", error.message)
       alert('Didnot login successfully');
      })
  };

  const handleGoogleLogin = () =>{
    GoogleLogin()
    .then(res=>{
      navigate(location.state?.from || '/')
    })  }

    const handleForgetpass = () => {
      const email = emailRef.current.value;
  
      if (!email) {
        alert("Please enter an email");
        return;
      }
      resetPass(email);
      handlePasswordValidation();
    };
  
    // Password Validation for login
    const handlePasswordValidation = () => {
      const password = passRef.current.value;
  
     
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
        );
      } else {
        setPasswordError(""); // Clear error message if valid
      }
    };
    

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
                  ref={emailRef}
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
                  ref={passRef}
                  className="input input-bordered"
                  required
                />
                <label onClick={handleForgetpass} className="label">
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
