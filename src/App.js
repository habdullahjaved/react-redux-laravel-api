import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
function App() {
  const menu = useSelector((state) => state.menu);
  const CurrentPage = React.lazy(() => import(`${menu.value}`));
  return (
    <div className="container">
      {console.log("menu:", menu)}
      <Navbar />
      <Suspense fallback={<Loader />}>
        <CurrentPage {...menu.props} />
      </Suspense>
    </div>
  );
}

export default App;
