import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./components/Layout";
import Fallback from "./components/Fallback";
const Home = React.lazy(() => import("./components/Home"));
const Skills = React.lazy(() => import("./components/Skills"));
const Works = React.lazy(() => import("./components/Works"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
