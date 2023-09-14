import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import RegistrationPage from "./components/registrationPage/RegistrationPage";
import RestaurantsPage from "./components/restaurantsPage/RestaurantsPage";
import RestaurantAboutPage from "./components/restaurantAboutPage/RestaurantAboutPage";
import FoodItemsPage from "./components/foodItemsPage/FoodItemsPage";
import CartPage from "./components/cartPage/CartPage";

function App() {
  return (
    <div className="appContainer">
      {/*       <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/registrationPage" element={<RegistrationPage />}></Route>
        <Route path="/restaurantsPage" element={<RestaurantsPage />}></Route>
        <Route path="/restaurantAboutPage" element={<RestaurantAboutPage />} />
        <Route path="/foodItemsPage" element={<FoodItemsPage />}></Route>
        <Route path="/cartPage" element={<CartPage />}></Route>
        <Route path="*" element={<h1>PageNotFound! :(</h1>} />
      </Routes> */}
      <HomePage />
    </div>
  );
}

export default App;
