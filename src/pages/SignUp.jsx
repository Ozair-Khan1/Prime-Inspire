import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../backend/AuthContext";
import api from "../utils/api";
import { useEffect } from "react";

function Signup() {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [usernameExist, setUsernameExist] = useState(false);

  const [existError, setExistError] = useState(false);

  const [step, setStep] = useState(1);

  const [nullError, setNullError] = useState(false);

  const [otp, setOtp] = useState('');

  const [coderError, setCodeError] = useState(false);

  const [timer, setTimer] = useState(0);

  const [canResend, setCanResend] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
  });
  const [error, setErrors] = useState({
    fullname: false,
    email: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));

    setExistError(false);
    setUsernameExist(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      fullname: formData.fullname.trim() === "",
      email: formData.email.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).includes(true);

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    try {
      await api.post('/register', formData)

      setStep(2);

      setCanResend(false)
      
      setTimer(60)

      setIsSubmitting(false);
    } catch (error) {
      if(error.status === 409) {
        setExistError(true)
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (e) => {
          e.preventDefault();
          setIsSubmitting(true)
  
          if (otp.trim() === "") {
              setNullError(true);
              setIsSubmitting(false)
              return
          }

          try {
            const res = await api.post('/verify', {otp: otp})

            setUser(res.data)

            navigate('/')
          } catch (error) {
            if(error.status === 401) {
                alert('Session expired. Please register again.')
            } else if (error.status === 402) {
                alert('Invalid or expired session token.')
            } else if (error.status === 400) {
                alert('OTP expired or not found')
            } else if (error.status === 406) {
                setCodeError(true)
            }
          } finally {
            setIsSubmitting(false)
          }
      } 

       useEffect(() => {
              let interval;
      
              if (timer > 0) {
                  interval = setInterval(() => {
                      setTimer((prev) => prev - 1);
                  }, 1000);
              } else {
                  setCanResend(true);
                  clearInterval(interval)
              }
              return () => clearInterval(interval)
        }, [timer]);

       const handleResend = async (e) => {
        e.preventDefault();
        if (!canResend) return;

         try {

          await api.post('/resend-code')

          setCanResend(false)
          
          setTimer(60)
        } catch (error) {
            console.log(error)
        }
      }

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row border-bottom">
            <a href="/" className="nav-img">
              <img src="\Logo.png" alt="Logo" className="img-fluid" />
            </a>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "100px" }}>
        <div className="container shadow border-2 align-items-center">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
                className="img img-fluid"
              />
            </div>
            {step === 1 ? (
              <form
                className="col-md-6 d-flex align-items-center justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="col-md-8">
                  <p className="fs-2 fw-semibold d-flex justify-content-center">
                    Sign up with email
                  </p>
                  <div className="form-floating">
                    <input
                      type="text"
                      id="floatingInput"
                      placeholder="Name"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInput}
                      className={`form-control border-3 ${
                        error.fullname ? "is-invalid" : ""
                      }`}
                    />
                    <label htmlFor="floatingInput p-0">Name</label>
                    {error.fullname && (
                      <p className="invalid-feedback">Please Enter Your Name</p>
                    )}
                    {usernameExist && (
                      <p className="text-danger d-block">This User Exists</p>
                    )}
                  </div>
                  <div className="form-floating mt-4">
                    <input
                      type="email"
                      id="floatingInput"
                      placeholder="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInput}
                      className={`form-control border-3 ${
                        error.email ? "is-invalid" : ""
                      } ${existError ? "is-invalid" : ""}`}
                    />
                    <label htmlFor="floatingInput p-0">Email</label>
                    {error.email && (
                      <p className="invalid-feedback">
                        Please Enter Your Email
                      </p>
                    )}
                    {existError && (
                      <p className="text-danger d-block">This Email Exists</p>
                    )}
                  </div>
                  <div className="form-check d-flex ms-3 mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input border-3 fs-4"
                      id="checkBox"
                    />
                    <label
                      htmlFor="checkBox"
                      className="form-check-label ms-3 user-select-none"
                    >
                      Send me special offers, personalized recommendations, and
                      learning tips.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 w-100 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                Creating
                                <div class="spinner-border spinner-border-sm text-white" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                Create
                                
                            </div>
                    )}
                  </button>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <hr className="w-25" />
                    <p className="mt-3 px-2 opacity-50">
                      Other Sign In Options
                    </p>
                    <hr className="w-25" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      className="fs-2 border border-primary rounded-3 p-1"
                    >
                      <FcGoogle className="d-flex" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="text-primary fs-2 border border-primary rounded-3 p-1 ms-3"
                    >
                      <FaFacebook className="d-flex" />
                    </a>
                    <a
                      href="https://www.apple.com/"
                      target="_blank"
                      className="text-dark fs-2 border border-primary rounded-3 p-1 ms-3"
                    >
                      <FaApple className="d-flex" />
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <span className="fw-light">
                      By signing up, you agree to our{" "}
                      <a className="link-offset-3">Terms of Use</a> and{" "}
                      <a className="link-offset-3">Privacy Policy</a>.
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <p>
                      Already Have An Account ? <a href="/Login">Login</a>
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleVerifyCode}
                className="col-md-6 d-flex align-items-center justify-content-center"
              >
                <div className="col-md-9">
                  <div className="text-center text-break">
                    <p className="fs-4 m-0 text-center">
                      We sent a 6-digit code to
                    </p>
                    <p className="text-center m-0 fs-4 fw-semibold">
                      {formData.email}
                    </p>
                  </div>
                  <div className="form-floating mt-4">
                    <input
                      type="text"
                      id="floatingInput2"
                      placeholder="Code"
                      name="otp"
                      value={otp}
                      onChange={(e) => {
                        setOtp(
                          e.target.value,
                          setNullError(false),
                          setCodeError(false),
                        );
                      }}
                      className={`form-control border-3 ${
                        coderError ? "is-invalid" : ""
                      } ${nullError ? "is-invalid" : ""}`}
                    />
                    <label htmlFor="floatingInput p-0">Code</label>
                    {coderError && (
                      <p className="text-danger d-block">Invalid Code</p>
                    )}
                    {nullError && (
                      <p className="text-danger d-block">
                        Please enter the code
                      </p>
                    )}
                    <div className="d-grid gap-2 mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary mt-4 w-100 fw-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                Verifying
                                <div class="spinner-border spinner-border-sm text-white" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                Verify
                            </div>
                        )}
                      </button>
                      <div className="d-flex justify-content-end">
                          <button type="button" className="btn btn-success mt-4 resend-btn fw-semibold" onClick={handleResend} disabled={!canResend || isSubmitting}>
                              {canResend ? 'Resend Code' : `Resend in ${timer}`}
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
