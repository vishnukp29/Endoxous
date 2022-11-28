import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { Convert } from "easy-currencies";
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
import { clearErrors, getOrderChart, getSalesOrdders, getSalesperDay } from "../../redux/actions/chartAction";
import { getperDayOders } from "../../redux/actions/chartAction";
import { toast } from "react-toastify";
import {getUsersOrders } from "../../redux/actions/orderAction";

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
  
  const { error: ordersPerDayError,loading: ordersPerDayLoading,dateSales:ordersPerDayDate,totalSales:ordersPerDayTotal,ordersReport,} 
        = useSelector((state) => state.ordersPerDay);

  const totalOrderCount = totalOrder?.reduce((a,b)=>a+b,0)
  const totalsalesAmount = totalSales?.reduce((a,b)=>a+b,0)

  const toatlOrdersCount = ordersPerDayTotal && ordersPerDayTotal.reduce((a, b) => a + b, 0);
  console.log(toatlOrdersCount);
  const days = ordersPerDayDate && ordersPerDayDate.length;
  console.log(days);
  const avg = Math.floor(toatlOrdersCount / days);
  console.log(avg); 

  const { error:salesError, loading:salesLoading, dateSales:salesDate, totalSales:salesTotal, salesReport:salesSalseReport } = useSelector(
    (state) => state.salePerDay
  );
  const salesAmountTotal = salesTotal && salesTotal.reduce((a, b) => a + b, 0);
  console.log(salesAmountTotal);
  const numOfDays = salesDate && salesDate.length;
  console.log(numOfDays);
  const avgSale = Math.floor(salesAmountTotal / numOfDays);
  console.log(avgSale);

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

  const averageOrderValue= totalsalesAmount/totalOrderCount
  console.log(totalsalesAmount);
  console.log(totalOrderCount);
  console.log(averageOrderValue);

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
    dispatch(getperDayOders())
    dispatch(getSalesperDay())
  }, [dispatch,error,totalSalesError]);

  const [sales, setSales] = useState(totalOrder);
  const [totalSale, setTotalSale] = useState();

  useEffect(() => {
    setTotalSale(totalOrder?.reduce((a,b)=>a+b,0));
  }, [sales]);

  // Date
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate);

  // Week
  const getLastWeeksDate = () => {
    const now = new Date();
    return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      .toJSON()
      .slice(0, 10);
  };
  const weekend = getLastWeeksDate();
  console.log(weekend);

  // Month
  function getMonthEndDate(numOfMonths, date = new Date()) {
    const dateCopy = new Date(date.getTime());
    dateCopy.setMonth(dateCopy.getMonth() - numOfMonths);
    return dateCopy;
  }
  const date = new Date();
  const monthend = getMonthEndDate(1, date).toJSON().slice(0, 10);
  console.log(monthend);

  // Filtering
  const todayOrders =
    totalOrder &&
    totalOrder.filter((order) => order.dateOrder === currentDate);

  const weekOrders =
    totalOrder && totalOrder.filter((order) => order.dateOrder >= weekend);

  const monthOrders =
    totalOrder &&
    totalOrder.filter((order) => order.dateOrder >= monthend);

    const analyticSelect = (e) => {
      let item = parseInt(e.target.value);
      if (item === 1) {
        setSales(totalOrder); 
      } else if (item === 2) {
        setSales(todayOrders);
      } else if (item === 3) {
        setSales(weekOrders);
      }else if (item === 4) {
        setSales(monthOrders);
      }
    };
  

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
                onChange={analyticSelect}
              >
                <option selected>Lifetime</option>
                <option value="1">Today</option>
                <option value="2">This Week</option>
                <option value="3">This Month</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between w-100 px-5">
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h6 className="card-title">AVG ORDERS PER DAY</h6>
            <h2 className="card-subtitle mb-2 text-muted">{avg}</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h6 className="card-title">AVG ORDER VALUE</h6>
            {/* <h2 className="card-subtitle mb-2 text-muted">{Math.round(averageOrderValue)}</h2> */}
            <h2 className="card-subtitle mb-2 text-muted">{averageOrderValue.toFixed(2)}</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h6 className="card-title">AVG SALES PER DAY</h6>
            <h2 className="card-subtitle mb-2 text-muted">Rs {avgSale.toFixed(2)}</h2>
          </div>
        </div>
        <div className="card" style={{ width: "24%" }}>
          <div className="card-body">
            <h6 className="card-title">RETURNING CUSTOMERS</h6>
            <h2 className="card-subtitle mb-2 text-muted">10 %</h2>
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
