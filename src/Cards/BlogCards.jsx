import { motion, spring } from "framer-motion";

function BlogCards({ title, image, btnText }) {
  return (
    <motion.div className="card card-effect-2"
      whileHover={{scale : 1.05}}
      whileTap={{scale : 1}}
      initial={{opacity : 0}}
      whileInView={{opacity : 1}}
      transition={{type : spring}}
    >
      <img src={image} className="card-img-top" />
      <span className="card-title text-sm-center px-2 fw-semibold">
        {title}
      </span>
      <div className="card-footer border-0">
        <button className="btn btn-primary d-block w-100 rounded-pill">
          {btnText}
        </button>
      </div>
    </motion.div>
  );
}

export default BlogCards;
