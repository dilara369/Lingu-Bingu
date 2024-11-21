import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
const Register = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, GoogleLogin } = useContext(AuthContext);
  // value hiseve authInfo ke pathiye ekhanee distructure kore niyechi
  const handeRegister = (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      seterrorMessage(
        "password should be 1 uppercase & 1 lowercase & 1 digit & One special character from @$!%*?& &  at least 6 digit"
      );
    }

    createUser(email, password, name, photo)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handeRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="Name"
                  name="Name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Photo</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="btn btn-xs absolute right-4 top-12"
                  >
                    {showPassword ? <BsEyeSlashFill /> : <IoEyeSharp />}
                  </button>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <br />
              <p className="text-black font-semibold text-center">Or</p>
              <br />
              <button className="btn " onClick={handleGoogleLogin}>
                {" "}
                Register with Google{" "}
              </button>
            </form>
            {errorMessage && (
              <p className="text-red-500 px-6 py-3">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
