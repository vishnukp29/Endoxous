import React from "react";
import { NavLink } from "react-router-dom";

const CustomerName = () => {
  return (
    <div className="section2">
      <nav
        className="s2-navabar navbar navbar-expand-lg "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink className="fw-bold navbar-brand" to="/">
            Customer Name
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>
      <div className="d-flex">
        <div className="d-flex flex-wrap px-4" style={{ width: "60%" }}>
          <div className="section2-btn">
            <button className="s2-btn fs-6" style={{ padding: "0 .7rem" }}>
              All
            </button>
            <button className="s2-btn fs-6" style={{ padding: "0 .7rem" }}>
              Pending
            </button>
            <button className="s2-btn fs-6" style={{ padding: "0 .7rem" }}>
              Shipped
            </button>
            <button className="s2-btn fs-6" style={{ padding: "0 .7rem" }}>
              Delivered
            </button>
            <button className="s2-btn fs-6" style={{ padding: "0 .7rem" }}>
              Cancelled
            </button>
          </div>
          <div className="container d-flex flex-wrap">
            <div className="card m-2" style={{ width: "46%" }}>
              <div className="row g-0 d-flex justify-content-center">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".5rem",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="..."
                      className=" bg-primary img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">safsaf</h5>
                    <p className="card-text">
                      <small className="text-muted text-capitalize">
                        per piece
                      </small>
                    </p>
                    <span className="card-text fs-5">Rs 332</span>

                    <span
                      className="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h5>In Stock: 2</h5>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card m-2" style={{ width: "46%" }}>
              <div className="row g-0 d-flex justify-content-center">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".5rem",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="..."
                      className=" bg-primary img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">safsaf</h5>
                    <p className="card-text">
                      <small className="text-muted text-capitalize">
                        per piece
                      </small>
                    </p>
                    <span className="card-text fs-5">Rs 332</span>

                    <span
                      className="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h5>In Stock: 2</h5>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card m-2" style={{ width: "46%" }}>
              <div className="row g-0 d-flex justify-content-center">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".5rem",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="..."
                      className=" bg-primary img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">safsaf</h5>
                    <p className="card-text">
                      <small className="text-muted text-capitalize">
                        per piece
                      </small>
                    </p>
                    <span className="card-text fs-5">Rs 332</span>

                    <span
                      className="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h5>In Stock: 2</h5>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card m-2" style={{ width: "46%" }}>
              <div className="row g-0 d-flex justify-content-center">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".5rem",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="..."
                      className=" bg-primary img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">safsaf</h5>
                    <p className="card-text">
                      <small className="text-muted text-capitalize">
                        per piece
                      </small>
                    </p>
                    <span className="card-text fs-5">Rs 332</span>

                    <span
                      className="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h5>In Stock: 2</h5>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card m-2" style={{ width: "46%" }}>
              <div className="row g-0 d-flex justify-content-center">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".5rem",
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="..."
                      className=" bg-primary img-fluid rounded-start"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">safsaf</h5>
                    <p className="card-text">
                      <small className="text-muted text-capitalize">
                        per piece
                      </small>
                    </p>
                    <span className="card-text fs-5">Rs 332</span>

                    <span
                      className="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h5>In Stock: 2</h5>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-md d-flex flex-column"
          style={{ width: "40%", backgroundColor: "white" }}
        >
          <div
            className="d-flex align-items-center justify-content-between w-100 px-3"
            style={{ height: "4rem" }}
          >
            <h5 className="m-0">Customer Details</h5>
            <button className="btn py-0">Edit</button>
          </div>
          <hr />
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
          <div
            className="px-3"
            style={{ lineHeight: ".4rem", margin: ".7rem 0" }}
          >
            <p>Name</p>
            <h6>Full name</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerName;
