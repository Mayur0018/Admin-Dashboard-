import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/new";
import List from "./pages/list/List";
import  Single  from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { productInputs, UserInputs } from "./FormSource";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New  inputs = {UserInputs} title="Add New User"/>} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
