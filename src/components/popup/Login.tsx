import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

import '../../styles/popup/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) navigate("/dashboard");
  // }, [user, loading]);

  return (
    <main className="Login">
      <div className="OnboardingStep Onboarding__step">
        <div className="Step">
          <div className="Art"></div>
          <div className="Step__content">
            <h1 className="Title">Log in</h1>
            <p className="UserAgreement">
              By continuing, you agree to our User Agreement and Privacy Policy.
            </p>
            <form className="LoginForm">
              <div className="Sso">
                <div className="sso-buttons">
                  <div className="btn-wrapper">
                    <div className="google-sso">
                      <div className="relative_div">
                        <div />
                        <div className="iframe">
                          <div className="btn-body">
                            <div className="btn-container">
                              <div className="btn" onClick={signInWithGoogle}>
                                <div className="btn-box">
                                  <img className="btn-image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" />
                                  <div className="btn_txt_container">
                                    <div className="btn_continue">Continue as Brian</div>
                                    <div className="btn_email_container">
                                      <div className="btn_email">brian.jr.okelly@gmail.com</div>
                                    </div>
                                  </div>
                                  <div className="google_img_container">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="google_icon">
                                    <g>
                                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                      <path fill="none" d="M0 0h48v48H0z"></path>
                                    </g>
                                  </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Sso__divider">
                  <span className="Sso__dividerLine"></span>
                  <span className="Sso__dividerText">or</span>
                  <span className="Sso__dividerLine"></span>
                </div>
              </div>
              <fieldset className="AnimatedForm__field">
                <input id="loginUsername" className="AnimatedForm__textInput" type="text" name="username" 
                  required placeholder="    " data-empty="true" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label className="AnimatedForm__textInputLabel" htmlFor="loginUsername">Username</label>
              </fieldset>
              <fieldset className="AnimatedForm__field s-margin">
                <input id="loginPassword" className="AnimatedForm__textInput" type="password" name="password"
                   required placeholder="    " data-empty="true" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="AnimatedForm__textInputLabel" htmlFor="loginPassword">
                  Password
                </label>
              </fieldset>
              <div className="two-modes-separator"></div>
              <fieldset className="AnimatedForm__field s-margin">
                <button className="AnimatedForm__submitButton" type="submit" onClick={() => logInWithEmailAndPassword(email, password)}>
                  Log In
                </button>
              </fieldset>
              <div className="BottomText secondary-text login-bottom-text">
                <span className="BottomLink secondary-text">Forgot your username or </span>
                <Link to="/popup/reset" className="BottomLink secondary-text link">password</Link>
                <span className="BottomLink secondary-text">?</span>
              </div>
              <div className="BottomText register">
                New to Reddit? <Link to="/popup/register" className="BottomLink secondary-text link">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;