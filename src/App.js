import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import SubCategory from "./pages/SubCategory/SubCategory";
import SellerBusinessPage from "./pages/SellerPage/SellerBusinessPage";
import ProductDetailsPage from "./pages/SellerPage/ProductDetailsPage";
import AddGSTPage from "./pages/SellerPage/AddGSTPage";
import AddressDetailsPage from "./pages/SellerPage/AddressDetailsPage";
import ViewNumber from "./subComponent/ViewNumber";
import EnterOTP from "./subComponent/EnterOTP";
import LoginWithOTP from "./subComponent/LoginWithOTP";
import SignInCreation from "./subComponent/SignInCreation";
import Inventory from "./pages/Inventory/Inventory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/User/userAction";
import SellerDash from "./pages/SellerDash/SellerDash";
import EditProfile from "./pages/SellerDash/EditProfile/EditProfile";
import ProductManagementDash from "./pages/SellerDash/ProductManagement/ProductManagementDash";
import ViewSingleProduct from "./pages/ViewSingleProduct/ViewSingleProduct";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { getInitialData } from "./actions/initialDataAction";

function App() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.user);
  
    useEffect(() => {
      if (!auth.authenticate) {
        dispatch(isUserLoggedIn());
      }
    },[auth]);
    
    useEffect(()=>{
      dispatch(getInitialData());
    },[]);


  return (
    <div className="App">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/contact-us"} element={<ContactUs />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route exact path={"/userprofile"} element={<UserProfile />} />
          <Route exact path={"/forgot-password"} element={<ForgetPassword />} />
          <Route exact path={"/subcategory/:catGid"} element={<SubCategory />} />

          <Route exact path={"/viewnumber"} element={<ViewNumber />} />
          <Route exact path={"/enterotp"} element={<EnterOTP />} />
          <Route exact path={"/enterloginotp"} element={<LoginWithOTP />} />
          <Route exact path={"/signincreation"} element={<SignInCreation />} />
          <Route exact path={"/sellerinventory"} element={<Inventory/>} />
          <Route exact path={"/sellerdash"} element={<SellerDash />} />
          <Route exact path={"/sellersetting"} element={<EditProfile />} />
          <Route exact path={"/sellerproduct"} element={<ProductManagementDash />} />
          <Route exact path={"/product/:id"} element={<ViewSingleProduct />} />
          <Route exact path={"/admin"} element={<AdminDashboard />} />
          <Route exact path={"/userdash"} element={<UserDashboard/>} />

        </Routes>
    </div>
  );
}

export default App;
