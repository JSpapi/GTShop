import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { Home } from "./pages";
import { routes } from "./routes";
function App() {
  const SetRoute = () =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));
  return (
    <div className="App text-white">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {SetRoute()}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
