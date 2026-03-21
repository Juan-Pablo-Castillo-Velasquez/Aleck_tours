import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import PackageDetail from "./pages/PackageDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Profile from "./pages/Profile";
import Personalization from "./pages/Personalization";
import Benefits from "./pages/Benefits";
import Corporate from "./pages/Corporate";
import TravelInfo from "./pages/TravelInfo";
import PreferencesForm from "./pages/PreferencesForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/search",
    Component: SearchResults,
  },
  {
    path: "/package/:id",
    Component: PackageDetail,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/checkout/:id",
    Component: Checkout,
  },
  {
    path: "/confirmation",
    Component: Confirmation,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/personalize/:id",
    Component: Personalization,
  },
  {
    path: "/benefits",
    Component: Benefits,
  },
  {
    path: "/corporate",
    Component: Corporate,
  },
  {
    path: "/travel-info",
    Component: TravelInfo,
  },
  {
    path: "/onboarding-preferences", // Nueva ruta
    Component: PreferencesForm,
  }
]);