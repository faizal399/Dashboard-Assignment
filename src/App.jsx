import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";
import Navbar from "./components/Navbar";
import Graph from "./pages/Graph";
import MapPage from "./pages/MapPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <ProtectedRoutes>
          <Navbar />
        </ProtectedRoutes>
      )}

      <Routes>
        <Route
          path="/"
          element={
           
              <Login />
           
          }
        />
        <Route
          path="/list"
          element={
            <ProtectedRoutes>
              <List />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/graph"
          element={
            <ProtectedRoutes>
              <Graph />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoutes>
              <MapPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/details"
          element={
            <ProtectedRoutes>
              <Details />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/photo"
          element={
            <ProtectedRoutes>
              <PhotoResult />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
