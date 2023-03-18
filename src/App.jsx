import { Routes, Route, useLocation } from "react-router-dom";
import { getContext } from "./Context";
import { Home } from "./pages";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routes";
import { NetworkError, SharedLayout } from "./components";
import { loader } from "./assets";
function App() {
  
  const location = useLocation();
  const { error, isLoading } = getContext();

  const SetRoute = () =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));

  // !CHECKING FOR LOADING DATA OR GETTING NETWORK ERROR
  const errorHandler = () => {
    if (error) {
      return <NetworkError />;
    } else {
      return (
        <AnimatePresence mode="async">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              {SetRoute()}
            </Route>
          </Routes>
        </AnimatePresence>
      );
    }
  };
  return (
    <div className="App text-white">
      {isLoading ? (
        <div
          className={`fixed top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center`}
        >
          <img src={loader} alt="loader" className={`w-[300px]`} />
        </div>
      ) : (
        errorHandler()
      )}
    </div>
  );
}

export default App;
