// import { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getperDayOders } from "../../redux/actions/chartAction";
// import { clearErrors, getAllOrders } from "../../redux/actions/orderAction";
// import { getAllNurseries } from "../../redux/actions/nurseryAction";
// import "./Page6.css";
// // import logo from "../../Assets/Images/logo3.png";

// function OrderReports() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { error, orders } = useSelector((state) => state.allOrders);
//   const { error:salesPerDayError, loading,dateSales,totalSales,ordersReport } = useSelector((state) => state.ordersPerDay);
//   const toatlOrdersCount = totalSales&&totalSales.reduce((a,b)=>a+b,0);
//   const days = dateSales&&dateSales.length
//   const avg = Math.floor(toatlOrdersCount/days);

//   const { error: nurseriesError, nurseries } = useSelector(
//     (state) => state.allNurseries
//   ); 

//   const [nursery, setNursery] = useState("");
//   const [filteredOrders, setFilterOrders] = useState([]);


//   useEffect(() => {
//     if (error) {
//       toast.error(error.message);
//       dispatch(clearErrors());
//     }
    
//     dispatch(getperDayOders())
//     dispatch(getAllOrders());
//   }, [dispatch, error]);

//   const nurseryDropDownHandler = (e) => {
//     const nursery = e.target.value;
//     const nuserysOrders =
//       orders && orders.filter((order) => order.deliveredBy === nursery);
//     setFilterOrders(nuserysOrders);
//     if (nursery === 1) {
//       setFilterOrders(AllOrdders);
//     }
//   };

//   // Date 
//   let currentDate = new Date().toJSON().slice(0, 10)

//   // Week 
//   const getLastWeeksDate=()=> {
//     const now = new Date();
//     return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toJSON().slice(0,10);
//   }
//   const weekend= getLastWeeksDate()
  
//   // Month 
//   function getMonthEndDate(numOfMonths, date = new Date()) {
//     const dateCopy = new Date(date.getTime());
//     dateCopy.setMonth(dateCopy.getMonth() - numOfMonths);
//     return dateCopy;
//   }
//   const date = new Date();
//   const monthend = getMonthEndDate(1, date).toJSON().slice(0,10); 

//   // Filtering
//   const AllOrdders = ordersReport && ordersReport.filter((sale) => sale); 
//   const todayOrders =
//   ordersReport && ordersReport.filter((sale) => (sale.date)=== currentDate);

//   const weekOrders =
//   ordersReport && ordersReport.filter((sale) =>((sale.date)>=weekend));
  
//   const monthOrders =
//   ordersReport && ordersReport.filter((sale) =>((sale.date)>=monthend));

//   const salesSelect = (e) => {
//     let item = parseInt(e.target.value);
//     if (item === 1) {
//       setFilterOrders(todayOrders);
//     } else if (item === 2) {
//       setFilterOrders(weekOrders);
//     } else if (item === 3) {
//       setFilterOrders(monthOrders);
//     }else{
//       setFilterOrders(AllOrdders)
//     }
//   };

//   return (
//     <div>
//       <div className="mainsection">
//         <div className="section2" style={{ height: "100vh" }}>
//           <nav
//             className="s2-navabar navbar navbar-expand-lg "
//             style={{ backgroundColor: "white" }}
//           >
//             <div className="container-fluid px-5">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarTogglerDemo03"
//                 aria-controls="navbarTogglerDemo03"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <NavLink className="fw-bold navbar-brand " to="/">
//                 Orders Report
//               </NavLink>
//               <button
//                 className="btn btn-outline-success btnround"
//                 type="submit"
//               ></button>
//             </div>
//             <hr />
//           </nav>
//           <div className="d-flex justify-content-between  align-items-center px-2 py-1">
//             <div className="p-5">
//               <p>AVG ORDERS PER DAY</p>
//               <h4>{avg}</h4>
//             </div>
//             <div>
//               <div className="d-flex px-4 ">
//                 <div className="p2-selection mx-2 ">
//                   <select
//                     className="form-select "
//                     aria-label="Default select example"
//                   >
//                     <option selected>All nurseries</option>
//                     {nurseries &&
//                       nurseries.map((nursery, index) => (
//                         <option value={nursery.name} key={index}>
//                           {nursery?.name + " " + nursery?.address}
//                         </option>
//                       ))}
//                   </select>
//                 </div>

//                 <div className="p2-selection mx-2">
//                   <select
//                     className="form-select "
//                     aria-label="Default select example"
//                     onChange= {salesSelect}
//                   >
//                     <option defaultValue="Select">Lifetime</option>
//                     <option value="1">Today</option>
//                     <option value="2">This Week</option>
//                     <option value="3">This Month</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="s2-table px-5 mx-5 ">
//             <div className="s2-table py-4">
//               <table className="table table-borderless table-sm ">
//                 <thead className="s2-table-nava">
//                   <tr>
//                     <th scope="col">Date</th>
//                     <th scope="col">Orders</th>
//                     <th scope="col">Sales</th>
//                     <th scope="col">Nursery Name</th>
//                   </tr>
//                 </thead>
//                 <tbody className="table-group-divider my-5">
//                 {ordersReport&&ordersReport.map((sale,index)=>(
//                     <tr>
//                     <th scope="row">{sale.date}</th>
//                     <td>{sale.count}</td>
//                     <td>{sale.total}</td>
//                     <td>Area/Locality</td>
                    
//                   </tr>
//                   ))}

                  
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderReports;


import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getperDayOders } from "../../redux/actions/chartAction";
import { clearErrors, getAllOrders } from "../../redux/actions/orderAction";
import { getAllNurseries } from "../../redux/actions/nurseryAction";
import "./Page6.css";
// import logo from "../../Assets/Images/logo3.png";
import Loader from "../../Components/SideBar/Loader/Loader";

function OrderReports() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, orders,loading } = useSelector((state) => state.allOrders);
  const { error:salesPerDayError, loading:salesLoading,dateSales,totalSales,ordersReport } = useSelector((state) => state.ordersPerDay);
  const toatlOrdersCount = totalSales&&totalSales.reduce((a,b)=>a+b,0);
  const days = dateSales&&dateSales.length
  const avg = Math.floor(toatlOrdersCount/days);

  const { error: nurseriesError, nurseries } = useSelector(
    (state) => state.allNurseries
  ); 

  const [nursery, setNursery] = useState("");
  const [state, setState] = useState(false);
  const [filteredOrders, setFilterOrders] = useState([]);


  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
    
    dispatch(getperDayOders())
    dispatch(getAllOrders());
  }, [dispatch, error]);

  const nurseryDropDownHandler = (e) => {
    const nursery = e.target.value;
    const nuserysOrders =
      orders && orders.filter((order) => order.deliveredBy === nursery);
    setFilterOrders(nuserysOrders);
    if (nursery === 1) {
      setFilterOrders(AllOrdders);
    }
  };

  // Date 
  let currentDate = new Date().toJSON().slice(0, 10)

  // Week 
  const getLastWeeksDate=()=> {
    const now = new Date();
    return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toJSON().slice(0,10);
  }
  const weekend= getLastWeeksDate()
  
  // Month 
  function getMonthEndDate(numOfMonths, date = new Date()) {
    const dateCopy = new Date(date.getTime());
    dateCopy.setMonth(dateCopy.getMonth() - numOfMonths);
    return dateCopy;
  }
  const date = new Date();
  const monthend = getMonthEndDate(1, date).toJSON().slice(0,10); 

  // Filtering
  const AllOrdders = ordersReport && ordersReport.filter((sale) => sale); 
  const todayOrders =
  ordersReport && ordersReport.filter((sale) => (sale.date)=== currentDate);

  const weekOrders =
  ordersReport && ordersReport.filter((sale) =>((sale.date)>=weekend));
  
  const monthOrders =
  ordersReport && ordersReport.filter((sale) =>((sale.date)>=monthend));

  const salesSelect = (e) => {
    let item = parseInt(e.target.value);
    if (item === 1) {
      setFilterOrders(todayOrders);
      setState(true)
    } else if (item === 2) {
      setFilterOrders(weekOrders);
      setState(true)
    } else if (item === 3) {
      setFilterOrders(monthOrders);
      setState(true)
    }else{
      setFilterOrders(AllOrdders)
      setState(true)
    }
  };

  return (
    <div>
      <div className="mainsection">
        <div className="section2" style={{ height: "100vh" }}>
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

              <NavLink className="fw-bold navbar-brand " to="/">
                Orders Report
              </NavLink>
              <button
                className="btn btn-outline-success btnround"
                type="submit"
              ></button>
            </div>
            <hr />
          </nav>
          <div className="d-flex justify-content-between  align-items-center px-2 py-1">
            <div className="p-5">
              <p>AVG ORDERS PER DAY</p>
              <h4>{avg}</h4>
            </div>
            <div>
              <div className="d-flex px-4 ">
                <div className="p2-selection mx-2 ">
                  <select
                    className="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>All nurseries</option>
                    {nurseries &&
                      nurseries.map((nursery, index) => (
                        <option value={nursery.name} key={index}>
                          {nursery?.name + " " + nursery?.address}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="p2-selection mx-2">
                  <select
                    className="form-select "
                    aria-label="Default select example"
                    onChange= {salesSelect}
                  >
                    <option defaultValue="Select">Lifetime</option>
                    <option value="1">Today</option>
                    <option value="2">This Week</option>
                    <option value="3">This Month</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="s2-table px-5 mx-5 ">
            <div className="s2-table py-4">
              {salesLoading ? (<Loader/>):(
                <table className="table table-borderless table-sm ">
                <thead className="s2-table-nava">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Orders</th>
                    <th scope="col">Sales</th>
                    <th scope="col">Nursery Name</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider my-5">
                {ordersReport&&ordersReport.map((sale,index)=>(
                    <tr>
                    <th scope="row">{sale.date}</th>
                    <td>{sale.count}</td>
                    <td>{sale.total}</td>
                    <td>Area/Locality</td>
                    
                  </tr>
                  ))}

                  
                </tbody>
              </table>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderReports;
