import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./components/Layout";
import Fallback from "./components/Fallback";
import Carousel from "./components/Carousel";
const Home = React.lazy(() => import("./components/Home"));
const Arts = React.lazy(() => import("./components/Arts"));
const Graphics = React.lazy(() => import("./components/Graphics"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
