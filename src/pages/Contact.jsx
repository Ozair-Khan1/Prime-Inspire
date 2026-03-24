import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });

  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
  });

  const HandleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: formData.email.trim() === "",
      subject: formData.subject.trim() === "",
    };

    setErrors(newError);

    if (
      newError.firstName ||
      newError.lastName ||
      newError.email ||
      newError.subject
    )
      return;

    setShowModal(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
    });
  };
  return (
    <section>
      <div className="container my-4 py-4 border-2 shadow">
        <div className="row g-5">
          <div className="col-lg-6">
            <span className="display-6 fs-2 fw-bold">
              Get in Touch with Prime Inspire!
            </span>
            <p className="mt-3">
              Have a question, feedback, or just want to say hello? We’d love to
              hear from you! Fill out the contact form below or drop us an email
              directly. We’re here to help with anything you need, from course
              support to tech tips.
            </p>
            <form onSubmit={HandleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control border border-3 ${errors.firstName ? "is-invalid" : ""}`}
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={HandleInput}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                    {errors.firstName && (
                      <div className="invalid-feedback">
                        Please Enter Your First Name
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control border border-3 ${errors.lastName ? "is-invalid" : ""}`}
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={HandleInput}
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                    {errors.lastName && (
                      <div className="invalid-feedback">
                        Please Enter Your Last Name
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="form-floating">
                    <input
                      type="email"
                      className={`form-control border border-3 ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={HandleInput}
                    />
                    <label htmlFor="floatingInput">Email</label>
                    {errors.email && (
                      <div className="invalid-feedback">
                        Please Enter Your Email
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control border border-3 ${errors.subject ? "is-invalid" : ""}`}
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={HandleInput}
                    />
                    <label htmlFor="floatingInput">Subject</label>
                    {errors.subject && (
                      <div className="invalid-feedback">
                        Please Enter Your Subject
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <textarea
                    className="form-control border border-3"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary w-100" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="accordion accordion-flush" id="faqAccordion">
              <div className="accordion-item border mb-3 rounded">
                <span className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    How can I access your Udemy courses?
                  </button>
                </span>
                <div
                  id="faq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Head over to our Courses page, where you’ll find direct
                    links to each course on Udemy.
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3 rounded">
                <span className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    Do you provide one-on-one support for your courses?
                  </button>
                </span>
                <div
                  className="accordion-collapse collapse"
                  id="faq2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Absolutely! If you’re enrolled in a course and have
                    questions, feel free to reach out. We’re here to ensure you
                    get the most out of your learning experience.
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3 rounded">
                <span className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    aria-expanded="false"
                  >
                    How long does it take to receive a response?
                  </button>
                </span>
                <div
                  className="accordion-collapse collapse"
                  id="faq3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We aim to respond within 24-48 hours, though it can
                    sometimes be quicker!
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded mb-3">
                <span className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Do you offer customized courses or training sessions?
                  </button>
                </span>
                <div
                  className="accordion-collapse collapse"
                  id="faq4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We offer both the courses
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3 rounded">
                <span className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    Do you offer customized courses or training sessions?
                  </button>
                </span>
                <div
                  className="accordion-collapse collapse"
                  id="faq5"
                  data-bs-parent="faqAccordion"
                >
                  <div className="accordion-body">
                    While most of our courses are available on Udemy, feel free
                    to reach out if you have specific training needs, and we’ll
                    see what’s possible.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="ModalDrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        tabIndex="-1"
        style={{
          backgroundColor: showModal ? "rgba(0, 0, 0, 0.5)" : "transparent",
          display: showModal ? "block" : "none",
          transition: "background-color 1s ease",
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="fs-3" id="ModalDropLabel">
                Thank You!
              </span>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Your Feedback Has Been Received</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
