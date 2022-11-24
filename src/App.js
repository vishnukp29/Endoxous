import SideBar from "./Components/SideBar/SideBar";
import HomePage from "./Pages/HomePage/HomePage";
import AllOrders from "./Pages/AllOrders/AllOrders";
import AllOrdersPage3 from "./Pages/AllOrdersPage3/AllOrdersPage3";
import AllNurseries from "./Pages/AllNurseries/AllNurseries";
import OrdersReports from "./Pages/OrdersReports/OrderReports";
import SalesReport from "./Pages/SalesReport/SalesReport";
import MyCustomers from "./Pages/MyCustomers/MyCutomers";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Categories from "./Pages/Categories/Categories";
import VerifyOTP from "./Pages/verifyOTP/VerifyOTP";
import Login from "./Pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddCategory from "./Pages/AddCategory/AddCategory";
import AddProducts from "./Pages/Products/AddProducts";
import EditProducts from "./Pages/Products/EditProducts";
import ProductDetails from "./Pages/Products/ProductDetails";
import Analystics from "./Pages/Analytics/Analytics";
import CustomerSupport from "./Pages/CustomerSupport/CustomerSupport";
import CustomerName from "./Pages/CustomerName/CustomerName";
import PageNotFound from "./Components/SideBar/PageNotFound";


//import Page1 from "./Pages/Page1/Page1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verifyotp" element={<VerifyOTP />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/orders/:id" element={<AllOrdersPage3 />} />
          <Route path="/allnurseries" element={<AllNurseries />} />
          <Route path="/ordersreport" element={<OrdersReports />} />
          <Route path="/salesreport" element={<SalesReport />} />
          <Route path="/catagories" element={<Categories />} />
          <Route path="/customers" element={<MyCustomers />} />
          <Route path="/customer" element={<CustomerName />} />
          <Route path="/category/new" element={<AddCategory />} />
          <Route path="/product/new" element={<AddProducts />} />
          <Route path="/analystics" element={<Analystics />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/customer/:id" element={<CustomerName />} />
          <Route path="/product/edit/:id" element={<EditProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
