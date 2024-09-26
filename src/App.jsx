import * as React from "react";
import InputControlPanel from "./components/Input/InputControlPanel/InputControlPanel";
//import InputControlPanelStories from "./components/Input/InputControlPanel/InputControlPanel.stories";
import InputGroup from "./components/Input/InputGroup/InputGroup";

/* import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify"; */
/* import "react-toastify/dist/ReactToastify.css"; */
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
      <InputGroup />
    </>
  );
}
