import { data } from "react-router-dom";
import CourseCard from "../Cards/CourseCard";
import { useState, useEffect } from "react";
import { course } from "../backend/courses.jsx";
import { useAuth } from "../backend/AuthContext.jsx";
import { motion } from "framer-motion";

function Courses() {

  const courses = course;

  const {user} = useAuth();

  const [showModal, setShowModal] = useState(false);

  const freeCoursesLink = () => {
    if (user) {
      window.open("https://www.udemy.com/course/front-end-web-development-complete-guide-step-by-step/#overview", "_blank");
    } else {
      setShowModal(true);
    }
  }

  const youtubeCoursesLink = (link) => {
    if (user) {
      window.open(link, "_blank");
    } else {
      setShowModal(true);
    }
  }

  const onSignUpClick = () => {
    setShowModal(false);
    window.location.href = "/signup";
  }

  const onLoginClick = () => {
    setShowModal(false);
    window.location.href = "/login";
  }

  const freeCourses = courses.filter((course) => course.type === "Free").length;
  const premiumCourses = courses.filter(
    (course) => course.type === "Premium",
  ).length;
  const allCourses = courses.length;
  const [filter, setFilter] = useState("All");
  const filteredCourse = courses.filter((course) => {
    if (filter === "All") return true;

    return course.type === filter || course.courseType === filter;
  });
  const [apiCourses, setApiCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const topics = ["JS", "React", "Angular", "Python", "Django", "WordPress", "Photoshop", "Unity", "UnrealEngine 5", "Godot", "After Effects"];
  useEffect(() => {

  const fetchDynamicCourses = async () => {
  if (!filter || filter === "All" || filter === "Premium" || filter === "Free" || filter === "undefined") return;

  setLoading(true);

  try {
    const TEMP_KEY = import.meta.env.VITE_TEMP_KEY 
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${filter}+course&type=playlist&maxResults=6&key=${TEMP_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if(data.items) {
      setApiCourses(data.items || []);
    }

    if (data.error) {
      console.error("YouTube API Error Details:", data.error.message);
      console.error("Reason:", data.error.errors[0].reason);
      setLoading(true)
      if(data.error.errors[0].reason === "quotaExceeded") {
        setError('Our Api Quata Exceeded')
      }
      return;
    }

  } catch (err) {
    console.log("Network error:", err);
    setError(true)
  } finally {
    if(!data.error) {
      setLoading(false);
    }
  }
  };

  fetchDynamicCourses();
}, [filter]);

  return (
    <>
      <section>
        <div className="container shadow border-2 rounded-2">
          <div className="row align-items-center">
            <div className="col-lg-6 p-5">
              <span className="display-6 fw-semibold">
                Turn Your Skills Into Success with 25+ Premium Courses
              </span>
              <p className="mt-2">
                Learn Web Development, Design, and Digital Skills from Start to
                Mastery—All in One Place.
              </p>
              <span className="fw-bold fs-5">
                Key Details (bullet-style for clarity and persuasion)
              </span>
              <ul className="mt-3">
                <li className="mt-1">
                  <strong>25+ Expert-Led Courses</strong> covering coding,
                  design, tools, and real-world projects
                </li>
                <li className="mt-1">
                  <strong>Step-by-Step Learning</strong> from beginner basics to
                  advanced techniques
                </li>
                <li className="mt-1">
                  <strong>Portfolio-Ready Projects</strong> to showcase your
                  skills to clients and employers
                </li>
                <li className="mt-1">
                  <strong>Learn at Your Own Pace—</strong> lifetime access, no
                  deadlines
                </li>
                <li className="mt-1">
                  <strong>Join Thousands of Students</strong> already growing
                  their careers through these courses
                </li>
              </ul>
              <span className="fw-bold mt-3">
                Browse All Courses and Start Learning Today
              </span>
            </div>
            <div className="col-lg-6 py-2 shadow">
              <img
                src="https://i0.wp.com/primeinspire.com/wp-content/uploads/2024/11/Top-Udemy-Premium-Courses-for-Career-Growth.jpg?resize=1024%2C538&ssl=1"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container shadow border-2 rounded-2">
          <div className="row">
            <div className="col-md-3 justify-content-start shadow border-2 rounded-2 p-0">
              <div className="list-group">
                <div className="list-group-item fw-bold">Course Categories</div>
                <button
                  className="list-group-item list-group-item-action text-center d-flex justify-content-between align-items-center"
                  onClick={() => setFilter("All")}
                >
                  All
                  <span className="badge rounded-pill text-bg-warning">
                    {allCourses}
                  </span>
                </button>
                <button
                  className="list-group-item list-group-item-action text-center d-flex justify-content-between align-items-center"
                  onClick={() => setFilter("Premium")}
                >
                  Premium Course
                  <span className="badge rounded-pill text-bg-warning">
                    {premiumCourses}
                  </span>
                </button>
                <button
                  className="list-group-item list-group-item-action text-center d-flex justify-content-between align-items-center"
                  onClick={() => setFilter("Free")}
                >
                  Free Course
                  <span className="badge rounded-pill text-bg-warning">
                    {freeCourses}
                  </span>
                </button>
              </div>
              <div className="list-group">
                <div className="list-group-item fw-bold">Courses By Topic</div>
                {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setFilter(topic)}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  {topic}
                  <span className="badge rounded-pill text-bg-warning">
                    {apiCourses.length} 
                  </span>
                </button>
              ))}
              </div>
            </div>
            <div className="col-md-9 shadow border-2 rounded-2">
              <div className="row">
                <span className="fw-bold mt-3">List Of {filter} Courses</span>
               {loading ? (
                <div className="text-center my-5 w-100">
                  <div className="spinner-border text-warning"></div>
                  <p>Loading {filter} courses...</p>
                </div>
              ) : error ? (
                <div className="alert alert-danger mt-3 shadow-sm" role="alert">
                  <h4 className="alert-heading">Notice!</h4>
                  <p>{error}</p>
                  <hr />
                  <p className="mb-0">While we wait for the YouTube API to reset, feel free to check out our static "All" courses!</p>
                </div>
              ) : topics.includes(filter) ? (
                apiCourses.map((item) => {
                  const youtubeLink = `https://www.youtube.com/playlist?list=${item.id.playlistId}`;
                  
                  return (
                      <div className="col-md-4 mt-3" key={item.id.playlistId}>
                          <CourseCard 
                              title={item.snippet.title} 
                              image={item.snippet.thumbnails.high.url} 
                              link={youtubeCoursesLink.bind(null, youtubeLink)}
                              type="YouTube"
                          />
                      </div>
                  );
              })
              ) : (
                filteredCourse.map((course, index) => (
                  <div className="col-md-4 mt-3" key={index}>
                    <CourseCard key={course.id} {...course}
                      link={freeCoursesLink}
                     />
                  </div>
                ))
              )}
              </div>
            </div>
          </div>
        </div>
        {showModal && (
        <motion.div className="modal show fade d-block" data-bs-backdrop="static" role="dialog" tabIndex="-1" aria-hidden="true" style={{backdropFilter : "blur(4px)"}} animate={{opacity : [0,1], y : [-300, 0]}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body d-flex justify-content-center">
                <p className="fs-4" style={{letterSpacing : '0.5px'}}>Please login or sign up to access courses</p>
                <button className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
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
      </section>
    </>
  );
}

export default Courses;
