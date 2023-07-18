import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Update from "./pages/update/Update";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";




function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="users">
          <Route index element={<List/>} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New/>} />
          <Route path="update/:id" element={<Update />} />
        </Route>
        

      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
