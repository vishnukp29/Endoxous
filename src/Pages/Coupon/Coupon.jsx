import React from "react";

const Coupon = () => {
  return (
    <div
      className="conatiner-sm d-flex justify-content-center flex-column align-items-center w-100 bg-light"
      style={{ height: "100vh" }}>
      <div className="bg-white rounded px-5 mt-5 py-2"> 
        <h2 className="">Add New Coupon</h2>
        <form action="" encType="multipart/form-data" className="mt-4">
            <div className="mb-2 ">
            <label htmlFor="exampleInputNumber" className="form-label">
                Coupon Name
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>

            <div className="mb-2">
            <label htmlFor="exampleInputNumber" className="form-label">
                Coupon Code
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>

            <div className="mb-2">
            <label htmlFor="exampleInputNumber" className="form-label">
                Limit
            </label>
            <input
                type="number"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>

            <div className="mb-2">
            <label htmlFor="exampleInputNumber" className="form-label">
                Discount
            </label>
            <input
                type="number"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>

            <div className="mb-2">
            <label htmlFor="exampleInputNumber" className="form-label">
                Expiration Time
            </label>
            <input
                type="date"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>

            <div className="mb-2">
            <label htmlFor="exampleInputNumber" className="form-label">
                Message
            </label>
            <input
                type="text"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
            />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3 mb-5">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Coupon;
