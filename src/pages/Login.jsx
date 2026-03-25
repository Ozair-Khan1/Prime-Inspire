import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../backend/AuthContext";
import api from "../utils/api";

function Login() {

    const {setUser} = useAuth();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [loginData, setLoginData] = useState({
        email : '',
        otp : ''
    });
    const [error, setErrors] = useState(false);
    const [nullError, setNullError] = useState(false);
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [coderError, setCodeError] = useState(false);
    const [timer, setTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const{name, value} = e.target;
        setLoginData({...loginData, [name]: value})
        setErrors(false)
        setNullError(false)
        
    }

    const handleSendCode = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await api.post('/login', {email: loginData.email})

            setStep(2)

            setCanResend(false)

            setTimer(60)

            setIsSubmitting(false)
        } catch (error) {
            if(error.status === 404) {
                setErrors(true)
            }
        } finally {
            setIsSubmitting(false)
        }
    }

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
                        <img src="\Logo.png" alt="Logo" className="img-fluid"/>
                    </a>
                </div>
            </div>
        </section>
         <section style={{marginTop : "100px"}}>
                    <div className="container shadow border-2 align-items-center">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp" className="img img-fluid"/>
                            </div>
                                {step === 1 ? (
                                    <form className="col-md-6 d-flex align-items-center justify-content-center" onSubmit={handleSendCode}>
                                    <div className="col-md-8">
                                        <p className="fs-2 fw-semibold d-flex justify-content-center">Log in to continue your learning journey</p>
                                        <div className="form-floating mt-4">
                                            <input type="email" id="floatingInput" placeholder="email" name="email" onChange={handleInput} className={`form-control border-3 ${error ? "is-invalid" : ""} ${nullError ? "is-invalid" : ""}`}/>
                                            <label htmlFor="floatingInput p-0">Email</label>
                                            {error && (
                                                <p className="text-danger d-block">No Email Exists</p>
                                            )}
                                            {nullError && (
                                                <p className="text-danger d-block">Please Enter Your Email</p>
                                            )}
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4 w-100 fw-semibold" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <div className="d-flex align-items-center justify-content-center gap-2">
                                                    Logging in
                                                    <div class="spinner-border spinner-border-sm text-white" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="d-flex align-items-center justify-content-center gap-2">
                                                    Login
                                                </div>
                                            )}
                                        </button>
                                        <div className="d-flex align-items-center justify-content-center mt-3">
                                            <hr className="w-25"/>
                                            <p className="mt-3 px-2 opacity-50">Other Sign In Options</p>
                                            <hr className="w-25"/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a href="https://www.google.com/" target="_blank" className="fs-2 border border-primary rounded-3 p-1">
                                                <FcGoogle className="d-flex"/>
                                            </a>
                                             <a href="https://www.facebook.com/" target="_blank" className="text-primary fs-2 border border-primary rounded-3 p-1 ms-3">
                                                <FaFacebook className="d-flex"/>
                                            </a>
                                             <a href="https://www.apple.com/" target="_blank" className="text-dark fs-2 border border-primary rounded-3 p-1 ms-3">
                                                <FaApple className="d-flex"/>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <p>Didn't Have a Account ? <a href="/SignUp" className="link-offset-2">Sign Up</a></p>
                                        </div>
                                    </div>
                                </form>
                                ) : (
                                    <form onSubmit={handleVerifyCode} className="col-md-6 d-flex align-items-center justify-content-center">
                                            <div className="col-md-9">
                                                <div className="text-center text-break">
                                                    <p className="fs-4 m-0 text-center">We sent a 6-digit code to</p>
                                                    <p className="text-center m-0 fs-4 fw-semibold">{loginData.email}</p>
                                                </div>
                                                <div className="form-floating mt-4">
                                                    <input type="text" id="floatingInput2" placeholder="Code" name="otp" value={otp} onChange={(e) => {setOtp(e.target.value, setNullError(false), setCodeError(false))}} className={`form-control border-3 ${error.email ? "is-invalid" : ""} ${nullError ? "is-invalid" : ""}`}/>
                                                    <label htmlFor="floatingInput p-0">Code</label>
                                                    {coderError && (
                                                        <p className="text-danger d-block">Invalid Code</p>
                                                    )}
                                                    {nullError && (
                                                        <p className="text-danger d-block">Please enter the code</p>
                                                    )}
                                                    <div className="d-grid gap-2 mt-4">
                                                        <button type="submit" className="btn btn-primary mt-4 w-100 fw-semibold" disabled={isSubmitting}>
                                                            {isSubmitting ? "Verifying" : "Verify"}
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
    )
}

export default Login