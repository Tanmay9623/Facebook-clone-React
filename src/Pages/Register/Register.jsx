import './Register.css'
 
export const Register = () => {
  return (
    <>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className='loginDesc'>
            Connect With Friends and The World Around You On FaceBook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" 
            placeholder='UserName'
            />
            <input type="text" className="loginInput" 
            placeholder='Email'
            />
            <input type="text" className="loginInput" 
            placeholder='Password'
            />
            <input type="text" className="loginInput" 
            placeholder='Confirm Password'
            />
            <button className="loginButton">LogIn</button>
            <button className="loginRegisterButton">Create A New Account</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}