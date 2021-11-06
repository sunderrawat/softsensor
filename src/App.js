import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
