// import React from "react";

// const LoginPage = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login</h2>
//       <form>
//         <div>
//           <input type="text" placeholder="Username" name="username" required />
//         </div>
//         <br />
//         <div>
//           <input type="password" placeholder="Password" name="password" required />
//         </div>
//         <br />
//         <button type="button">Submit</button>
//       </form>
//       <br />
//       <a href="/RegistrationPage">New User Click here</a>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import "./assets/styles.css"; // Assuming you have styles applied

export default function LoginPage() {
  // State to manage username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission (does nothing for now)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin} className="form-content">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">Login</button>
        </form>
        <p className="form-footer">
          New user?{" "}
          <a href="/register" className="form-link">Register here</a>
        </p>
      </div>
    </div>
  );
}