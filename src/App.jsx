import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { getContext } from "./Context";
import { Home } from "./pages";
import { routes } from "./routes";
function App() {
  const { error } = getContext();

  const SetRoute = () =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));
  return error ? (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-[30px] font-media leading-[45px] mb-4">Ой что то пошло не так: {error}</h1>
      <div className="w-[600px] ">
        <img
          src="https://m.media-amazon.com/images/I/71nMCpy19UL.jpg"
          alt="error"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  ) : (
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
