import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section>
        <div className="container shadow border border-2 rounded-2">
          <div className="row align-items-center">
            <div className="col-lg-6 py-2">
              <img
                src="https://i0.wp.com/primeinspire.com/wp-content/uploads/2024/11/Team-Meeting-in-an-Office.jpg?resize=1024%2C683&ssl=1"
                alt=""
                className="img-fluid rounded-2"
              />
            </div>
            <div className="col-lg-6 p-4">
              <span className="display-6 fw-semibold text-black">
                Empowering Learners, One Course at a Time
              </span>
              <p className="lead mt-2 text-black">
                At Prime Inspire, we’re dedicated to making high-quality tech
                knowledge accessible to all, supporting students at every step
                of their learning journey.
              </p>
              <Link
                to="/Courses"
                className="btn btn-primary rounded-pill py-3 d-inline-flex justify-content-center align-items-center text-center"
              >
                Explore Our Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-4">
        <div className="container shadow border border-2 rounded-2">
          <div className="row justify-content-center">
            <div className="col-lg">
              <p className="lead text-black p-4 fs-6">
                <strong>Prime Inspire</strong> began as <cite>ZINFOMATIC</cite>{" "}
                in 2015, with a mission to help learners unlock their potential
                in graphic design, web design, and web development. Since then,
                the world has transformed, and so have we. When COVID-19 changed
                the landscape of learning, we adapted by bringing our courses
                online. Now, through our partnership with Udemy, we proudly
                reach over 250,000 students worldwide, with more than 150,000
                5-star reviews highlighting the impact of our practical,
                student-centered approach.
                <br />
                <br />
                Our commitment to quality drives everything we do. Each course
                is designed to be hands-on and accessible, ensuring that
                students not only learn but can apply their skills confidently.
                Whether you’re diving into graphic design or mastering the
                latest web development techniques, Prime Inspire is here to
                support you every step of the way
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
