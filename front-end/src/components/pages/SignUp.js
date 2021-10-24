import React, {useState} from 'react';
import '../../App.css';
import PaymentForm from '../PaymentForm';

export default function SignUp() {
  const adminUser = {
    email:"admin@gmai.com",
    password: "1234"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = detais => {
      console.log(detais);
  }

  const Logout = () =>{
      console.log("Log out")
  }

  return (
    <div className="Payment">
        {(user.email != "") ? (
            <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button>logout</button>
            </div>
        ) : (
          <PaymentForm Login={Login} error={error} />
        )}
    </div>
);
}
