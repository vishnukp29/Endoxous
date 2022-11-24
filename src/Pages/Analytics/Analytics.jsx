import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
} from "chart.js";
import { clearErrors, getOrderChart, getSalesOrdders } from "../../redux/actions/chartAction";
import { toast } from "react-toastify";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement
);

const Analytics = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading,dateOrder,totalOrder } = useSelector((state) => state.chart);
  const { error:totalSalesError,dateSales,totalSales } = useSelector((state) => state.chartSales);

  console.log(dateOrder&&dateOrder,"======",totalOrder&&totalOrder,"========= === chart");


  const totalOrderCount = totalOrder?.reduce((a,b)=>a+b,0)
  const totalsalesAmount = totalSales?.reduce((a,b)=>a+b,0)

  console.log(totalOrderCount,"========= total orders");
  const orderReport = {
    labels: dateOrder&&dateOrder,
    datasets: [
      {
        label: "TOTAL ORDERS",
        backgroundColor: ["#0f390f"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: totalOrder&&totalOrder,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };
  const salesReport = {
    labels: dateSales&&dateSales,
    datasets: [
      {
        label: "SALES REPORT",
        backgroundColor: ["#0f390f"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: totalSales&&totalSales,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
    if (totalSalesError) {
      toast.error(error.message);
      dispatch(clearErrors());
    }


    dispatch(getOrderChart())
    dispatch(getSalesOrdders())
  }, [dispatch,error,totalSalesError]);


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
            Analytics
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>
      <div className="d-flex justify-content-between align-items-center py-1">
        <div className="p-5">
          <h4>Overview</h4>
        </div>
        <div>
          <div className="d-flex align-items-center px-4 ">
            {/* <button type="button" className="btn btn-sm btn-link me-5">
              Reorder Catagory
            </button> */}
            <div className="p2-selection mx-2">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>All nurseries</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="p2-selection mx-2">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>Lifetime</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between w-100 px-5">
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h5 className="card-title">AVG ORDERS PER DAY</h5>
            <h2 className="card-subtitle mb-2 text-muted">Rs 7,000</h2>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between w-100 px-5 py-4">
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h5 className="card-title">TOTAL ORDERS</h5>
            <h2 className="card-subtitle mb-2 text-muted">{totalOrderCount}</h2>
          </div>
        </div>
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h5 className="card-title">TOTAL SALES</h5>
            <h2 className="card-subtitle mb-2 text-muted">{totalsalesAmount}</h2>
          </div>
        </div>
      </div>

      <hr style={{ width: "95%", margin: "1rem auto" }} />
      <div className="linechart">
          <Line data={orderReport} />
      </div>
      <hr style={{ width: "95%", margin: "1rem auto" }} />
      <div className="linechart">
          <Line data={salesReport} />
      </div>
      <hr style={{ width: "95%", margin: "1rem auto" }} />

      <div className="container d-flex justify-content-between w-100 px-5 py-4">
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h2 className="card-title mb-4">SALES BY TOP NURSERIES</h2>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "30.5rem" }}>
          <div className="card-body">
            <h2 className="card-title mb-4">SALES BY TOP REGIONS</h2>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h6 className="card-subtitle text-muted mt-2">1.Nursery Name</h6>
            <div className="progress my-3">
              <div
                className="progress-bar w-50"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
