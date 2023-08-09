import { useState } from "react";
import "./App.css";
import Button from "./components/ui-kit/button/Button";
import Layout from "./components/layout/Layout";
import MainPage from "./page/main/MainPage";

function App() {
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
}

export default App;
