import { BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Homepage></Homepage>
      </div>
    </BrowserRouter>
  );
}

export default App;
