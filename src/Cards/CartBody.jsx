function CartBody({ img, title, courseType, price, discount, dispatch}) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" />
      <div className="card-title text-center">{title}</div>
      <div className="card-text text-center align-items-center">
        <p>
          <strong className="bg-success p-2 rounded text-white">
            {courseType}
          </strong>
        </p>
        <p>
          <strong>RS {price}</strong>{" "}
          <span className="text-decoration-line-through">RS {discount}</span>
        </p>
      </div>
      <div className="card-footer d-flex justify-content-center border-0">
        <button type="button" className="btn btn-warning w-100" onClick={dispatch}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartBody;
