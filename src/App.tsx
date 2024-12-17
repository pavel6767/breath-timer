import { Routes, Route } from "react-router-dom";

import "./App.css";
import routes from "./config/routes";

import AllProviders from "./context/AllProviders";

const App = () => (
  <AllProviders>
    <Routes>
      {Object.values(routes).map((r) => (
        <Route key={r.path} path={r.path} element={<r.Element />} />
      ))}
    </Routes>
  </AllProviders>
);

export default App;
