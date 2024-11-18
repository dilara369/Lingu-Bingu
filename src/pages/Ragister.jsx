import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [errorMessage ,seterrorMessage] = useState('')
 const navigate =useNavigate()
 const {createUser}=useContext(AuthContext)
// value hiseve authInfo ke pathiye ekhanee distructure kore niyechi
    const handeRegister =(e)=>{
        e.preventDefault();
        const name =e.target.Name.value
        const email= (e.target.email.value)
        const password=(e.target.password.value)
        console.log(name,email,password)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password))
        {
          seterrorMessage('password should be 1 uppercase & 1 lowercase & 1 digit & One special character from @$!%*?& &  at least 8 digit')
        }


        createUser(email,password)
        .then((result)=> { console.log(result.user)
         navigate('/');
        })
        .catch (error =>  {
        //  seterrorMessage(error.message)
          
        }
        
        )
          
    } 

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handeRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" name='Name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
     
      </form>
      {
        errorMessage && <p className='text-red-500 px-6 py-3'>{errorMessage}</p>
      }
    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;