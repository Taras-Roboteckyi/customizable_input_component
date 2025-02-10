import * as React from "react";
import InputControlPanel from "./components/Input/InputControlPanel/InputControlPanel";

import "./index.css";

/* import { Suspense } from "react";

import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import AppLoader from "./components/Loader/Loader";

import { CreateLazyChunk } from "./helpers/CreateLazyChunk"; */

/* const HomePage = CreateLazyChunk("HomePage", "HomePage/HomePage");

const LoginPage = CreateLazyChunk("LoginPage", "LoginPage/LoginPage");

const NewsPage = CreateLazyChunk("NewsPage", "NewsPage/NewsPage");

const ProfilePage = CreateLazyChunk("ProfilePage", "ProfilePage/ProfilePage"); */

export default function App() {
  return (
    <>
      <InputControlPanel></InputControlPanel>
    </>
  );
}
