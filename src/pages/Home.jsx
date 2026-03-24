import { Link} from "react-router-dom"
import TypewriterComponent from "typewriter-effect"
import BlogCards from "../Cards/BlogCards"
import CourseCard from "../Cards/CourseCard"
import { easeOut, motion, spring } from "framer-motion"

function Home () {
const courses = [
    {
      id: 1,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/WordPress-Course.jpg?w=750&ssl=1",
      title: "WordPress for Beginners – Fast & Easy Gutenberg Course",
      courseType: "WordPress",
      type: "Free",
      rating: "564",
      ratingPoints: "(4.3)",
      price: 800,
      discount: 100,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/Adobe-Photoshop-Course.jpg?w=750&ssl=1",
      title: "Photoshop Masterclass – Edit Photos & Design Like a Pro",
      courseType: "Photoshop",
      type: "Free",
      rating: "764",
      ratingPoints: "(4.5)",
      price: 750,
      discount: 80,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 3,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/HTML5-CSS3.jpg?resize=300%2C169&ssl=1",
      title: "HTML5 & CSS3 – Build Responsive Websites from Scratch",
      courseType: "Html & CSS",
      type: "Free",
      rating: "697",
      ratingPoints: "(4.6)",
      price: 1200,
      discount: 150,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 4,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/JavaScript-Mastery.jpg?resize=300%2C169&ssl=1",
      title: "JavaScript Mastery – Learn, Code, and Create Live Forms",
      courseType: "JS",
      type: "Premium",
      rating: "470",
      ratingPoints: "(4.4)",
      price: 1000,
      discount: 150,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 5,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/Angular-Course.jpg?resize=300%2C169&ssl=1",
      title: "Learn to Build Interactive Modern Web Apps with Angular",
      courseType: "Angular",
      type: "Premium",
      rating: "522",
      ratingPoints: "(4.4)",
      price: 1250,
      discount: 100,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 6,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/React-JS.jpg?resize=300%2C169&ssl=1",
      title: "React JS Course: Build Real Apps with Vite + Bootstrap 5",
      courseType: "React",
      type: "Premium",
      rating: "619",
      ratingPoints: "(4.1)",
      price: 1400,
      discount: 250,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
          <i className="bi bi-star text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 7,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/Python-Programming-Course.jpg?resize=300%2C169&ssl=1",
      title: "Python Programming – Practical & In Real-Time",
      courseType: "Python",
      type: "Premium",
      rating: "535 ",
      ratingPoints: "(4.2)",
      price: 1600,
      discount: 200,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 8,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/Django-Course-EMS.jpg?resize=300%2C169&ssl=1",
      title: "Django – Learn to Build EMS Web Application with Django",
      courseType: "Django",
      type: "Free",
      rating: "647 ",
      ratingPoints: "(4.4)",
      price: 1550,
      discount: 150,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 9,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/Bootstrap-5-Course.jpg?resize=300%2C169&ssl=1",
      title: "The Ultimate Bootstrap Guide – Bootstrap 5 from Scratch",
      courseType: "Bootstrap",
      type: "Free",
      rating: "3,241 ",
      ratingPoints: "(4.6)",
      price: 900,
      discount: 100,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
    {
      id: 10,
      image:
        "https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/CodeIgniter-Course.jpg?resize=300%2C169&ssl=1",
      title: "Build an Employee Management System with CodeIgniter 3",
      courseType: "CodeIgniter",
      type: "Free",
      rating: "143 ",
      ratingPoints: "(4.5)",
      price: 1550,
      discount: 200,
      stars: (
        <>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-fill text-warning ms-1"></i>
          <i className="bi bi-star-half text-warning ms-1"></i>
        </>
      ),
    },
  ];
    return (
        <>
            <section>
                <div className="container shadow rounded-2 border-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6 p-4">
                            <span className="display-6 fw-semibold">Your Ultimate Destination to Master,<span className="text-success"><TypewriterComponent options={{
                                strings : ['Web Design', 'Web Development', 'React JS', 'WordPress', 'Angular'],
                                autoStart : true,
                                loop : true,
                                deleteSpeed : 50
                            }}/></span></span>
                            <p className="lead">Unlock the skills of the future with practical, expert-led courses and insightful tech tips, all designed to bring your projects to life.</p>
                            <motion.div
                              initial={{x : -600}}
                              whileInView={{x : 0}}
                              transition={{type : spring}}
                            >
                              <Link to="/Courses" type="button" className="btn btn-primary rounded-pill py-3 d-inline-flex align-items-center justify-content-center text-center">Explore Our Udemy Courses
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-right ms-1 mt-1" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
                                  </svg>
                              </Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 py-2">
                            <img src="https://i0.wp.com/primeinspire.com/wp-content/uploads/2024/11/Learning-to-Code-on-PC.jpg?resize=1024%2C683&ssl=1" className="img-fluid rounded-3 shadow" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 border-bottom">
                <div className="container shadow border border-3 rounded-2">
                    <div className="row g-0 text-lg-start">
                        <div className="col-md-3 col-lg-3 p-4 border-end border-bottom">
                            <div className="mb-2 text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-video3" viewBox="0 0 16 16">
                                    <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold">Expert-Led Training</h5>
                            <p className="text-muted">Learn directly from a seasoned web development expert with years of real-world experience.</p>
                        </div>
                        <div className="col-md-3 col-lg-3 p-4 border-end border-bottom">
                            <div className="mb-2 text-dark">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                               </svg>
                            </div>
                            <h5 className="fw-bold">On-Demand Video Lessons</h5>
                            <p className="text-muted">Access all the high-quality video content at your own pace, anytime and anywhere.</p>
                        </div>
                        <div className="col-md-3 col-lg-3 p-4 border-end border-bottom">
                            <div className="mb-2 text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold">Student Support & Guidance</h5>
                            <p className="text-muted">Have questions? Get responsive support and personalized guidance as you learn.</p>
                        </div>
                        <div className="col-md-3 col-lg-3 p-4 border-end border-bottom">
                            <div className="mb-2 text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                 <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold">Certification</h5>
                            <p className="text-muted">Earn a recognized Udemy certificate that validates your new skills and achievements.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container border border-2 rounded-2 shadow">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-2">
                            <img src="https://i0.wp.com/primeinspire.com/wp-content/uploads/2024/11/Student-Learning-on-Laptop.jpg?resize=1024%2C683&ssl=1" className="img-fluid rounded-3 shadow" />
                        </div>
                        <div className="col-lg-6 p-4">
                            <span className="display-6 fw-semibold">Take the Next Step in Your Tech Journey</span>
                            <p className="lead">Access Easy to learn, hands-on courses crafted by an industry expert. From foundational skills to advanced techniques, start building your future in web technology today.</p>
                            <Link to="/Courses" className="btn btn-primary rounded-pill py-3 align-items-center d-inline-flex justify-content-center text-center">
                            Browse Courses
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container p-0">
                    <div className="row justify-content-center">
                        {courses.map((course) => (
                            <div className="col-lg-3 col-md-4" key={course.id}>
                                <CourseCard
                                    id={course.id}
                                    image={course.image}
                                    courseType={course.courseType}
                                    title={course.title}
                                    type={course.type}
                                    rating={course.rating}
                                    ratingPoints={course.ratingPoints}
                                    stars={course.stars}
                                    price={course.price}
                                    discount={course.discount}
                                    link={'https://www.udemy.com/course/front-end-web-development-complete-guide-step-by-step/#overview'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container border border-2 shadow">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-2">
                            <img src="https://i0.wp.com/primeinspire.com/wp-content/uploads/2024/11/Man-learning-new-techniques-on-Web-Technology.jpg?resize=768%2C512&ssl=1" className="img-fluid rounded-3 shadow" />
                        </div>
                        <div className="col-lg-6 p-4">
                            <span className="display-6 fw-semibold">Stay Updated with the Latest in Tech</span>
                            <p className="lead">Explore expert tips, tricks, and guides on web development, PC optimization, Android customization, and more. Dive into a world of practical knowledge to enhance your tech skills.</p>
                            <Link to="/Blog">
                            <button className="btn btn-primary rounded-pill py-3 d-inline-flex align-items-center justify-content-center">
                                Visit Our Blog
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-circle mx-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                                </svg>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5 mb-4">
                <div className="container p-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4">
                            <BlogCards
                                title={"How to Learn React JS"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Learn-React-JS.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <BlogCards
                                title={"How to Deploy Angular App on Shared Hosting Like Bluehost"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Deploy-Angular-App-on-Shared-Hosting-Like-Bluehost.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <BlogCards
                                title={"How to Create a Component in Angular"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Create-a-Component-in-Angular.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <BlogCards
                                title={"How to Add Background Color in Bootstrap 5 (Simple Guide)"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Add-Background-Color-in-Bootstrap-5.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 mt-5">
                            <BlogCards
                                title={"jQuery: How to Change Text (Simple Guide for Beginners)"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/jQuery-How-to-Change-Text-Simple-Guide-for-Beginners.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 mt-5">
                            <BlogCards
                                title={"How to Call a Function in JavaScript"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Call-a-Function-in-JavaScript-Easily.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 mt-5">
                            <BlogCards
                                title={"How to Edit CSS in WordPress"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Edit-CSS-in-WordPress.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 mt-5">
                            <BlogCards
                                title={"How to Enable Automatic Updates in WordPress"}
                                image={"https://i0.wp.com/primeinspire.com/wp-content/uploads/2025/10/How-to-Enable-Automatic-Updates-in-WordPress.jpg?w=1200&ssl=1"}
                                btnText={"Read More"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home