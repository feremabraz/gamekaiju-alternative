import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import LoginPage from "./pages/Login.js";
import SignupPage from "./pages/Signup.js";
import BookPage from "./pages/Book.js";
import PagePage from "./pages/Page.js";
import AccountPage from "./pages/Account.js";
import Page404 from "./pages/404.js";
import HubPage from "./pages/Hub.js";
import AssetPage from "./pages/Asset.js";
import VerificationPage from "./pages/Verification.js";
import VerifiedPage from "./pages/Verified.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/page" element={<PagePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/hub" element={<HubPage />} />
      <Route path="/asset" element={<AssetPage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/verified" element={<VerifiedPage />} />
    </Routes>
  );
}

export default App;
