import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartBody from "./Cards/CartBody";
import { UseCart } from "./store/cartReducer";
import {AnimatePresence, spring} from "framer-motion";
import { useState } from "react";
import { useAuth } from "./backend/AuthContext";
import { motion } from "framer-motion";

function Navbar() {

  const [show, setShow] = useState(true)

  const {user, logout} = useAuth();

  const { cart, dispatch } = UseCart();
  JSON.parse(localStorage.getItem(cart)) || [];
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + (Number(item.price) || 0), 0);
  };
  const calculateDiscount = (cartItems) => {
    return calculateTotal(cartItems) * 0.1;
  };

  const calculateFinal = (cartItems) => {
    return calculateTotal(cartItems) - calculateDiscount(cartItems);
  };
  

  const [showAccountOptions, setShowAccountOptions] = useState(false);

  const onClickCart = () => {
    if (user) {
      dispatch({
        type : 'CLEAR_CART'
      });
    } else if (cart.length > 0) {
      setShowAccountOptions(true);
    }
  }

  const onSignUpClick = () => {
    setShowAccountOptions(false);
    window.location.href = "/signup";
  }

  const onLoginClick = () => {
    setShowAccountOptions(false);
    window.location.href = "/login";
  }

  const handleLogout = async () => {
    await logout();
    window.location.reload()
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <nav className="nav-underline navbar navbar-expand-lg bg-light fixed-top border-bottom border-2">
        <div className={`${show ? 'container-fluid' : 'container'} justify-content-center`}>
          <Link to="/" className="navbar-brand">
            <img src="https://primeinspire.com/wp-content/uploads/2024/11/Prime-Inspire-Logo.svg" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-expanded={!show}
            aria-label="toggle-navigation"
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <AnimatePresence>
            <motion.div
              animate={show ? '' : {y : [-200, 0], opacity : [0, 1]}} 
              exit={show && {y : [0, -200], opacity : [1, 0]}}
              transition={{type : "tween", duration : 0.2}}
              className={`collapse navbar-collapse blur-filter ${show ? '' : 'show'}`}
              id="navbar-content"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/Home"
                    className={({ isActive }) =>
                      `nav-link text-decoration-none ${isActive ? "active" : ""}`
                    }
                    onClick={() => setShow(true)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className={({ isActive }) =>
                      `nav-link text-decoration-none ${isActive ? "active" : ""}`
                    }
                    onClick={() => setShow(true)}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="Courses"
                    className={({ isActive }) =>
                      `nav-link text-decoration-none ${isActive ? "active" : ""}`
                    }
                    onClick={() => setShow(true)}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="Contact"
                    className={({ isActive }) =>
                      `nav-link text-decoration-none ${isActive ? "active" : ""}`
                    }
                    onClick={() => setShow(true)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="d-block d-lg-flex d-xl-flex align-items-center gap-2 me-3">
                {user ? (
                  <div className="d-flex d-lg-block d-xl-block flex-column gap-2">
                  <button
                    type="submit"
                    className="btn btn-warning account-btns d-inline-flex align-items-center justify-content-center text-center"
                    onClick={handleLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-in-right me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                      />
                    </svg>
                    Log Out
                  </button>
                  </div>
                ) : (
                  <div className="d-flex d-lg-block d-xl-block flex-column gap-2">
                  <a
                    type="submit"
                    className="btn btn-warning account-btns d-inline-flex align-items-center justify-content-center text-center"
                    href="/SignUp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill-add me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                    Sign Up
                  </a>
                  <a
                    type="submit"
                    className="btn btn-success account-btns d-inline-flex align-items-center justify-content-center text-center ms-2"
                    href="/Login"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                      <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                    Login In
                  </a>
                </div> 
                )}
              </div>
              <div className="cart ms-1 mt-2 mt-lg-0 mt-xl-0 pe-0 pe-lg-3 pe-xl-3">
                <button
                  className="btn position-relative"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasResponive"
                  aria-controls="offcanvasTop"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>
      <div style={{ marginTop: "145px" }}>
        <Outlet />
      </div>
      <footer className="site-footer container-fluid">
        <div className="row bg-dark justify-content-center py-4">
          <div className="col-lg-2 col-md-4 mt-lg-0 mt-3">
            <img
              src="https://primeinspire.com/wp-content/uploads/2024/11/Prime-Inspire-Logo-dark.svg"
              style={{ height: "40px", width: "150px" }}
              className="img"
            />
            <address className="text-light text-opacity-75 mt-3">
              Bhittai Colony, Karachi, Sindh, Pakistan
            </address>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ozairk.home@gmail.com"
              target="_blank"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              ozairk.home@gmail.com
            </a>
          </div>
          <div className="col-lg-2 col-md-4 ms-lg-5 mt-lg-0 mt-3">
            <h5 className="text-light fs-5">Quick Links</h5>
            <ul className="list-group w-25">
              <Link to="/Home" className="text-decoration-none w-25 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  Home
                </li>
              </Link>
              <Link to="/About" className="text-decoration-none w-25 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  About
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mt-lg-0 mt-3">
            <h5 className="text-light fs-5">Education</h5>
            <ul className="list-group w-75">
              <Link to="/Courses" className="text-decoration-none w-25 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  Courses
                </li>
              </Link>
              <Link to="/Blog" className="text-decoration-none w-50 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  Tips & Trick
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 mt-lg-0 mt-3">
            <h5 className="text-light fs-5">Other Pages</h5>
            <ul className="list-group w-25">
              <Link to="/Disclaimer" className="text-decoration-none w-25 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  Disclaimer
                </li>
              </Link>
              <Link to="/Contact" className="text-decoration-none w-25 mt-1">
                <li className="list-group-item p-0 bg-dark border-0 text-light">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center bg-black py-4">
          <div className="col-lg-2 col-md-4">
            <p className="fw-bold text-light text-center m-0">
              Copyright © 2026 Prime Inspire
            </p>
          </div>
        </div>
      </footer>
      {/* Cart Body */}
      <div
        className="offcanvas offcanvas-top h-auto"
        tabIndex="-1"
        id="offcanvasResponive"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <span className="offcanvas-title fs-1 fw-semibold" id="offcanvasTopLabel">
            Cart
          </span>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container h-100">
            <div className="row h-100 justify-content-center g-0">
              <div
                className="col-md-4 overflow-auto"
                style={{ maxHeight: "80vh" }}
              >
                <div className="p-3">
                    <AnimatePresence>
                        {cart && cart === 0 ? (
                        <p>No courses added yet.</p>
                        ) : (
                        cart.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ x: 50, scale: 0, opacity : 0 }}
                                transition={{ type : spring}}
                                className="py-4"
                            >
                            <CartBody
                            key={item.id || index}
                            img={item.image}
                            title={item.title}
                            courseType={item.courseType}
                            price={item.price}
                            discount={item.discount}
                            dispatch={() =>
                                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                            }
                            />
                            </motion.div>
                        ))
                        )}
                </AnimatePresence>
                </div>
              </div>
              <div className="col-md-4 bg-light p-3 align-items-center d-flex justify-content-center g-0">
                <div className="sticky-top w-100">
                  <h5 className="mb-4">Order Summary</h5>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Price ({cart.length} items):</span>
                    <span className="fw-bold text-dark">
                      RS {Math.floor(calculateTotal(cart))}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount (10%):</span>
                    <span>- RS {Math.floor(calculateDiscount(cart))}</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4">
                    <span className="h5 fw-bold">Total:</span>
                    <span className="h5 fw-bold text-primary">
                      RS {calculateFinal(cart)}
                    </span>
                  </div>

                  <div className="d-flex">
                  <button className="btn btn-warning w-100 py-2 fw-semibold shadow-sm rounded-pill" onClick={onClickCart}>
                    Checkout Now
                  </button>
                  <button className="btn btn-danger w-50 py-2 fw-semibold shadow-sm rounded-pill" onClick={() => dispatch({type : "CLEAR_CART"})}>
                    Discard
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAccountOptions && (
        <motion.div className="modal show fade d-block" data-bs-backdrop="static" role="dialog" tabIndex="-1" aria-hidden="true" style={{backdropFilter : "blur(4px)"}} animate={{opacity : [0,1], y : [-300, 0]}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body d-flex justify-content-center">
                <p className="fs-4" style={{letterSpacing : '0.5px'}}>Please login or sign up to access courses</p>
                <button className="btn-close" aria-label="Close" onClick={() => setShowAccountOptions(false)}></button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" onClick={onSignUpClick}>
                  Sign up
                </button>
                <button type="button" className="btn btn-success" onClick={onLoginClick}>
                  Login in
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
