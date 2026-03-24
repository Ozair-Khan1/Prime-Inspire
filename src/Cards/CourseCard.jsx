import { UseCart } from "../store/cartReducer";
import { motion, spring } from "framer-motion";


function CourseCard({
  id,
  image,
  title,
  rating,
  ratingPoints,
  stars,
  type,
  courseType,
  price,
  discount,
  link,
})
{
  const { cart, dispatch } = UseCart();
  const courseEnrolled = cart.find((item) => item.id === id);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { image, title, courseType, id, price, discount },
    });
  };

  function typebgcolor() {
    return type === "Free" ? "success" : "warning";
  }

  return (
    <motion.div className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{type : spring}}
    >
      <img src={image} className="img-card-top img-fluid rounded-2" />
      <span className="d-none">{courseType}</span>
      <hr />
      <strong className="card-title px-2 text-center align-items-center">
        {title}
        <span className={`badge text-bg-${typebgcolor()} fs-6`}>{type}</span>
      </strong>
      <div className="mb-2 card-text px-2 text-center align-items-center">
        <p>
          <strong>{rating}</strong>
          {rating ? "Ratings" : ""}
          <strong> {ratingPoints}</strong>
          {stars}
        </p>
        {type === "Premium" && (
          <p className="m-0">
            <strong className="bg-success text-white rounded p-1">
              RS {price}
            </strong>{" "}
            <span className="text-decoration-line-through">RS {discount}</span>
          </p>
        )}
      </div>
      <div className="card-footer border-0 d-flex justify-content-center">
        {type === "Premium" ? (
          <button
            className="btn btn-primary w-100 rounded-pill"
            onClick={addToCart}
          >
            {courseEnrolled ? "Added" : "Add To Cart"}
          </button>
        ) : (
          <button
            onClick={link}
            className="btn btn-primary w-100 rounded-pill"
          >
            Enroll Now
          </button>
        )}
        {courseEnrolled && (
          <button
            className="btn btn-danger text-white rounded-pill"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default CourseCard;
