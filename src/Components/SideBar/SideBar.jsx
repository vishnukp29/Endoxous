import React from "react";
import logo from "../../Assets/Images/logo3.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  return (
    <div>
      <div className="section1">
        <div className="logo">
          <img className="logo" src={logo} alt="img" />
        </div>
        <div>
          <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li className="nav-item m-2">
              <NavLink to="/dashboard">
                <button className="s1-btn btn btn-sm px-4 ">Home</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/orders">
                <button className="s1-btn btn btn-sm px-4 ">Orders</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <div>
                {/* to="/salesreport" */}
                {/* <button className="s1-btn btn btn-sm px-4 ">Products</button> */}
                <div className="dropdown">
                  <button
                    className="s1-btn btn btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/products"
                      >
                        All Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/catagories"
                      >
                        Catagories
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/"
                      >
                        Inventory
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/ordersreport">
                <button className="s1-btn btn btn-sm px-4 ">Payments</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/allnurseries">
                <button className="s1-btn btn btn-sm px-4 ">Nurseries</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink>
                <button
                  className="s1-btn btn btn-sm px-4"
                  onClick={() => logoutUser()}
                >
                  Logout
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
