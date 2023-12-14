import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "380px" }}>
        <img
          src="https://openthemagazine.com/wp-content/uploads/2019/04/Hanuman1.jpg"
          className="card-img-top"
          alt="Product img"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is about Product.</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-primary text-white rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option className="text-white" key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-primary text-white rounded">
              <option className="text-white" key={1} value="Full">
                Half
              </option>
              <option className="text-white" key={2} value="Full">
                Full
              </option>
            </select>
            <div className="d-inline h-100 fs-5">Main Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
