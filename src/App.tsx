import { Routes, Route } from "react-router-dom";

import "./App.css";
import routes from "./config/routes";

const App = () => (
  <Routes>
    {Object.values(routes).map((r) => (
      <Route key={r.path} path={r.path} element={<r.Element />} />
    ))}
  </Routes>
);

export default App;
