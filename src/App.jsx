import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import AdminLoginPage from "./components/loginPage/AdminLoginPage";
import RestaurantLoginPage from "./components/loginPage/RestaurantLoginPage";
import RegistrationPage from "./components/registrationPage/RegistrationPage";
import RestaurantsPage from "./components/restaurantsPage/RestaurantsPage";
import RestaurantAboutPage from "./components/restaurantAboutPage/RestaurantAboutPage";
import FoodItemsPage from "./components/foodItemsPage/FoodItemsPage";
import CartPage from "./components/cartPage/CartPage";

function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/adminLoginPage" element={<AdminLoginPage />} />
        <Route path="/restaurantLoginPage" element={<RestaurantLoginPage />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/restaurantsPage" element={<RestaurantsPage />} />
        <Route path="/restaurantAboutPage" element={<RestaurantAboutPage />} />
        <Route path="/foodItemsPage" element={<FoodItemsPage />} />
        <Route path="/cartPage" element={<CartPage />} />

        <Route path="*" element={<h1>PageNotFound! :(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
